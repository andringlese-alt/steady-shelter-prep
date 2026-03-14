import { Shield, CheckCircle, ChevronDown, Zap, CloudLightning, Droplets, Radio, Heart, FileText, Users, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const STRIPE_LINK = "https://buy.stripe.com/bJe6oH4kp6f70wka2t3AY01";

const faqs = [
  {
    q: "La guida parla solo di guerra?",
    a: "No. La guerra e le crisi geopolitiche sono uno degli scenari trattati, ma la guida copre anche blackout prolungati, calamità naturali, interruzioni dei servizi essenziali e qualsiasi situazione in cui la tua famiglia debba cavarsela da sola per qualche giorno.",
  },
  {
    q: "Quanto tempo serve per applicarla?",
    a: "Puoi leggere la guida in un paio d'ore e iniziare subito a organizzarti. Non devi fare tutto in un giorno: le checklist ti aiutano a procedere con calma, un passo alla volta.",
  },
  {
    q: "Serve vivere in campagna o va bene anche in città?",
    a: "Va benissimo anche in città. Anzi, chi vive in contesti urbani dipende di più dalle infrastrutture e spesso ha meno margine di autonomia. La guida è pensata proprio per famiglie che vivono in appartamento o in periferia.",
  },
  {
    q: "È utile anche se ho già un piccolo kit in casa?",
    a: "Sì. Il kit è solo una parte della preparazione. La guida ti aiuta a organizzare un piano familiare completo: comunicazioni, documenti, ruoli, scorte e procedure per le prime 72 ore.",
  },
  {
    q: "Cosa succede dopo l'acquisto?",
    a: "Dopo il pagamento verrai reindirizzato a una pagina dove scaricare immediatamente il PDF. Nessuna attesa, nessun abbonamento, nessun costo nascosto. Il file è tuo per sempre.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left font-semibold text-foreground text-lg"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* ───── HERO ───── */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Guida Pratica PDF — Scaricabile subito
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Prepara la tua famiglia{" "}
            <span className="text-gradient">prima che serva improvvisare</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Un piano familiare concreto per affrontare guerra, crisi geopolitiche, blackout, calamità naturali e interruzioni dei servizi. Tutto in un unico PDF chiaro e stampabile.
          </p>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {[
              "Sapere cosa fare nelle prime 72 ore se succede qualcosa",
              "Organizzare acqua, cibo, energia e documenti senza impazzire",
              "Ridurre panico, confusione e discussioni in famiglia",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-3xl font-display font-bold text-foreground mb-4">€7,99</p>

          <a href={STRIPE_LINK}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 rounded-lg">
              Acquista la guida PDF — €7,99
            </Button>
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Download immediato · PDF stampabile · Nessun abbonamento</p>
        </div>
      </section>

      {/* ───── PERCHÉ LA GUERRA TI RIGUARDA ───── */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Perché la guerra ti riguarda anche se è "lontana"
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Non serve che un conflitto arrivi fisicamente vicino a casa tua per avere conseguenze sulla tua quotidianità. Le crisi geopolitiche influiscono sulle forniture di energia, sui prezzi, sulla disponibilità di beni nei supermercati e sulla stabilità dei servizi su cui contiamo ogni giorno.
            </p>
            <p>
              In una situazione di tensione internazionale, la disinformazione aumenta, l'ansia sale e le famiglie si trovano a prendere decisioni importanti senza avere un piano. Avere un documento chiaro, preparato con calma, cambia tutto.
            </p>
            <p>
              Non si tratta di prepararsi alla fine del mondo. Si tratta di sapere dove sono i documenti, avere qualche giorno di scorte base e aver parlato con la propria famiglia di cosa fare se qualcosa non funziona come al solito.
            </p>
          </div>

          <div className="mt-10 bg-background rounded-lg p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="font-semibold text-foreground mb-4">Esempi concreti di problemi per una famiglia normale:</p>
            <ul className="space-y-3">
              {[
                "Blackout prolungato: niente luce, niente frigorifero, niente riscaldamento elettrico",
                "Bancomat e POS fuori uso: impossibile pagare o prelevare contanti",
                "Scaffali vuoti per qualche giorno: ritardi nelle consegne ai supermercati",
              ].map((ex) => (
                <li key={ex} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───── NON SOLO GUERRA ───── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            La stessa guida ti aiuta anche in caso di…
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ogni scenario è diverso, ma il metodo è lo stesso: sapere cosa fare, avere le cose pronte e organizzare la famiglia per le prime 72 ore.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: CloudLightning,
                title: "Blackout prolungato",
                desc: "Ore o giorni senza corrente. Niente frigo, niente ricarica telefoni, niente acqua calda. La guida ti spiega come gestire luce, cibo e comunicazioni anche senza elettricità.",
              },
              {
                icon: Droplets,
                title: "Calamità naturali",
                desc: "Pioggia intensa, alluvioni, neve abbondante, vento forte. Situazioni in cui potresti restare bloccato in casa o dover lasciare la zona. Sapere cosa portare e dove andare fa la differenza.",
              },
              {
                icon: Zap,
                title: "Interruzione dei servizi essenziali",
                desc: "Acqua, gas, rete telefonica o internet che smettono di funzionare. Può succedere per un guasto tecnico o per sovraccarico. Avere un piano B è semplice, se lo prepari prima.",
              },
              {
                icon: MapPin,
                title: "Emergenze locali",
                desc: "Strade bloccate, quartiere isolato, trasporti fermi. Non serve una catastrofe nazionale: basta un evento locale per trovarsi tagliati fuori per qualche giorno.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── COSA TROVI NELLA GUIDA ───── */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Cosa trovi nella guida
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-10">
            Contenuti pratici, organizzati per agire subito.
          </p>

          <div className="space-y-4">
            {[
              { icon: Shield, text: "Piano per le prime 72 ore: cosa fare, in che ordine, chi fa cosa" },
              { icon: Package, text: "Checklist acqua, cibo semplice e conservabile, energia e illuminazione" },
              { icon: Users, text: "Organizzazione familiare: chi chiama chi, dove ci si trova, compiti per adulti e ragazzi" },
              { icon: FileText, text: "Gestione e copie dei documenti importanti: identità, sanità, assicurazioni, contatti" },
              { icon: Radio, text: "Comunicazioni in emergenza: cosa fare quando telefono e internet non funzionano" },
              { icon: Heart, text: "Primo soccorso base e farmaci essenziali da tenere sempre a portata di mano" },
              { icon: CloudLightning, text: "Esempi di scenari: guerra e crisi, blackout, calamità naturali, problemi ai servizi" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-background rounded-lg p-4" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed pt-1.5">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-base italic">
            Preparazione concreta, passo dopo passo. Niente estremismi, niente liste impossibili. Solo quello che serve davvero a una famiglia normale.
          </p>
        </div>
      </section>

      {/* ───── PER CHI È QUESTA GUIDA ───── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Per chi è questa guida
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              È pensata per <strong className="text-foreground">famiglie con figli</strong> che vogliono avere un piano chiaro senza diventare survivalisti. Per genitori che preferiscono preparare le cose con calma il sabato pomeriggio, piuttosto che improvvisare nel panico.
            </p>
            <p>
              Va bene anche per <strong className="text-foreground">coppie che vivono in città o in periferia</strong>, in appartamento, senza giardino e senza cantina. La guida è realistica: tiene conto degli spazi piccoli e della vita quotidiana normale.
            </p>
            <p>
              Se non vuoi diventare un "prepper estremo" ma pensi che avere un minimo di organizzazione e autosufficienza sia una cosa intelligente, questa guida è per te.
            </p>
          </div>
        </div>
      </section>

      {/* ───── PERCHÉ ORA E PERCHÉ 7,99 € ───── */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Perché ora e perché €7,99
          </h2>
          <div className="space-y-5 text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
            <p>
              L'obiettivo è semplice: rendere la preparazione familiare accessibile a tutti, non solo a chi ha tempo e soldi da investire in corsi costosi o attrezzature professionali.
            </p>
            <p className="text-xl font-semibold opacity-100">
              Meno del costo di una pizza per avere un piano chiaro per la tua famiglia.
            </p>
            <p>
              È un PDF scaricabile subito dopo il pagamento, stampabile e riutilizzabile ogni volta che vuoi. Lo compri una volta e ce l'hai per sempre. Nessun abbonamento, nessun rinnovo.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Domande frequenti
          </h2>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA FINALE ───── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Preparati oggi, con calma, invece di improvvisare domani
          </h2>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {[
              "Un piano familiare completo per le prime 72 ore",
              "Checklist pronte, stampabili e facili da seguire",
              "Scenari reali: guerra, blackout, calamità, interruzioni",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-lg">{b}</span>
              </li>
            ))}
          </ul>

          <a href={STRIPE_LINK}>
            <Button variant="cta" size="lg" className="text-lg px-10 py-6 rounded-lg">
              Acquista la guida PDF — €7,99
            </Button>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Pagamento sicuro via Stripe · Download immediato · PDF stampabile</p>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Kit Pronto — Guida Preparazione Emergenze Familiare</p>
          <p>Pagamento sicuro gestito da Stripe. Nessun dato di pagamento viene conservato da noi.</p>
        </div>
      </footer>
    </div>
  );
}
