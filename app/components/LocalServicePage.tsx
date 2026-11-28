type Props = {
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  whatsappText: string;
};

export default function LocalServicePage({ h1, intro, sections, faqs, whatsappText }: Props) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <h1>{h1}</h1>
      <p>{intro}</p>

      {sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}

      <h2>Preguntas frecuentes</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <a href={`https://wa.me/34654533971?text=${encodeURIComponent(whatsappText)}`}>
        Solicitar presupuesto por WhatsApp
      </a>
      <a href="tel:+34654533971">Llamar: 654 53 39 71</a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </main>
  );
}