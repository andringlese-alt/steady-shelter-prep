import { Shield, CheckCircle, AlertTriangle, BookOpen, Users, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const STRIPE_LINK = "https://buy.stripe.com/7sY6oHg37gTLfrea2t3AY00";

const features = [
  { icon: Zap, title: "Kit di emergenza completo", desc: "Lista dettagliata di tutto ciò che serve per affrontare i primi 72 ore senza servizi." },
  { icon: Shield, title: "Scorte alimentari e idriche", desc: "Come calcolare, conservare e ruotare le scorte per tutta la famiglia." },
  { icon: Users, title: "Piano familiare di evacuazione", desc: "Procedure chiare per ogni membro della famiglia, inclusi bambini e anziani." },
  { icon: BookOpen, title: "Primo soccorso essenziale", desc: "Le competenze base che possono fare la differenza in un'emergenza." },
  { icon: AlertTriangle, title: "Comunicazioni senza rete", desc: "Come restare in contatto quando telefono e internet non funzionano." },
  { icon: CheckCircle, title: "Checklist pronte all'uso", desc: "Stampa e compila: sai sempre cosa hai e cosa ti manca." },
];

const benefits = [
  "Proteggi la tua famiglia da qualsiasi scenario",
  "Riduci ansia e incertezza con un piano concreto",
  "Risparmia tempo: tutto organizzato in un unico documento",
  "Adatto a famiglie con bambini, anziani o animali",
  "Checklist stampabili per agire subito",
  "Basato su linee guida della Protezione Civile",
];

const faqs = [
  { q: "È davvero necessario prepararsi?", a: "L'Italia è tra i paesi europei più esposti a terremoti, alluvioni e fenomeni climatici estremi. Negli ultimi anni abbiamo visto blackout prolungati, interruzioni idriche e situazioni di emergenza sempre più frequenti. Prepararsi non è allarmismo, è responsabilità." },
  { q: "La guida è adatta anche a chi vive in città?", a: "Assolutamente sì. Molti scenari — blackout, interruzioni dei servizi, emergenze sanitarie — riguardano soprattutto chi vive in contesti urbani dove la dipendenza dalle infrastrutture è totale." },
  { q: "Cosa ricevo dopo l'acquisto?", a: "Dopo il pagamento verrai reindirizzato a una pagina dove potrai scaricare immediatamente il PDF. Nessuna attesa, nessuna complicazione." },
  { q: "Posso stampare la guida?", a: "Certo. La guida è pensata per essere stampata e tenuta a portata di mano. Le checklist sono formattate appositamente per la stampa." },
  { q: "È aggiornata al contesto attuale?", a: "Sì. La guida tiene conto delle tensioni geopolitiche internazionali, dei rischi climatici crescenti e delle vulnerabilità delle infrastrutture moderne." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left font-body font-semibold text-foreground text-lg"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Guida Pratica PDF
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Preparazione per Emergenze:{" "}
            <span className="text-gradient">Autosufficienza Familiare</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            La guida completa per proteggere la tua famiglia in caso di blackout, calamità naturali, interruzioni dei servizi o crisi prolungate.
          </p>
          <a href={STRIPE_LINK}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 rounded-lg">
              Acquista la Guida — €19,90
            </Button>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Download immediato dopo il pagamento • PDF stampabile</p>
        </div>
      </section>

      {/* Perché serve oggi */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            Perché prepararsi è urgente, oggi più che mai
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Non si tratta di allarmismo. Si tratta di guardare in faccia la realtà.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Blackout e guasti infrastrutturali", text: "Le reti elettriche e idriche sono vulnerabili. Un'interruzione prolungata può paralizzare intere città." },
              { title: "Eventi climatici estremi", text: "Alluvioni, ondate di calore, tempeste violente: fenomeni sempre più frequenti e intensi nel nostro territorio." },
              { title: "Instabilità geopolitica", text: "Le tensioni internazionali possono avere ripercussioni dirette sulle forniture energetiche e sulle catene di approvvigionamento." },
              { title: "Dipendenza totale dai servizi", text: "La maggior parte delle famiglie non sopravviverebbe più di 48 ore senza elettricità, acqua corrente o supermercati aperti." },
            ].map((item) => (
              <div key={item.title} className="bg-background p-6 rounded-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa trovi */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Cosa trovi nella guida
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Tutto ciò che serve, organizzato in modo chiaro e immediatamente applicabile.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-6 rounded-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefici */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            I benefici concreti
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-2xl mx-auto text-left">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-lg font-light">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerta */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inizia a proteggere la tua famiglia
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Un investimento minimo per una sicurezza che non ha prezzo.
          </p>
          <div className="bg-card rounded-xl p-8" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Prezzo di lancio</p>
            <p className="text-5xl font-display font-bold text-foreground mb-1">€19,90</p>
            <p className="text-muted-foreground mb-6">pagamento unico • nessun abbonamento</p>
            <a href={STRIPE_LINK} className="block">
              <Button variant="cta" size="lg" className="w-full text-lg py-6 rounded-lg">
                Acquista Ora
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Pagamento sicuro via Stripe • Download immediato</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Guida Preparazione Emergenze. Tutti i diritti riservati.</p>
          <p>Pagamento sicuro gestito da Stripe. Nessun dato di pagamento viene conservato da noi.</p>
        </div>
      </footer>
    </div>
  );
}
