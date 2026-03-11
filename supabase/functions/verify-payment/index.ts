import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.25.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const jsonHeaders = {
  ...corsHeaders,
  "Content-Type": "application/json",
};

const jsonResponse = (status: number, payload: Record<string, string>) =>
  new Response(JSON.stringify(payload), { status, headers: jsonHeaders });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let sessionId = url.searchParams.get("session_id");

    if (!sessionId && req.method !== "GET") {
      try {
        const body = await req.json();
        if (typeof body?.session_id === "string") {
          sessionId = body.session_id;
        }
      } catch {
        // Ignore invalid JSON body and rely on query string.
      }
    }

    if (!sessionId) {
      return jsonResponse(400, { error: "session_id is required" });
    }

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      return jsonResponse(500, { error: "Stripe not configured" });
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: "2024-06-20",
    });

    let session;

    try {
      session = await stripe.checkout.sessions.retrieve(sessionId);
    } catch (error) {
      console.error("Stripe session retrieve error:", error);
      return jsonResponse(403, { error: "Accesso non autorizzato" });
    }

    if (session.payment_status !== "paid") {
      return jsonResponse(403, { error: "Accesso non autorizzato" });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return jsonResponse(500, { error: "Storage not configured" });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const candidatePaths = [
      "guides/guida-kitpronto.pdf",
      "Guida-Preparazione-Emergenze.pdf.pdf",
    ];

    for (const filePath of candidatePaths) {
      const { data, error } = await supabase.storage
        .from("digital-products")
        .createSignedUrl(filePath, 600);

      if (data?.signedUrl) {
        return jsonResponse(200, { download_url: data.signedUrl });
      }

      if (error) {
        console.error(`Storage signed URL error for ${filePath}:`, error);
      }
    }

    return jsonResponse(500, { error: "Could not generate download link" });
  } catch (err) {
    console.error("Error:", err);
    return jsonResponse(500, { error: "Internal server error" });
  }
});
