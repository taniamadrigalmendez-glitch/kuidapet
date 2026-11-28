import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/paseador-perros-benifaio";
const title = "Paseador de perros en Benifaió | KuidaPet";
const description =
  "Paseador de perros en Benifaió: paseos de 30 o 60 minutos desde 13 €. Servicio personalizado con fotos. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Cuánto cuesta un paseo de perros en Benifaió?",
    a: "Un paseo de 30 minutos para un perro cuesta 13 €, y de 60 minutos 22 €. Para dos perros compatibles, el paseo de 30 minutos son 22 €.",
  },
  {
    q: "¿Puedo pasear a más de un perro a la vez?",
    a: "Sí, siempre que sean compatibles entre ellos. El perro adicional tiene un suplemento de 15 € por paseo.",
  },
  {
    q: "¿Cuánto dura un paseo?",
    a: "Hay dos opciones: 30 minutos o 60 minutos, según la energía de tu perro y lo que necesites.",
  },
  {
    q: "¿Tengo que dejarte las llaves?",
    a: "Para recogerlo en casa, sí: lo coordinamos en una pre-visita (15 €), donde también conozco a tu perro y repasamos sus hábitos.",
  },
  {
    q: "¿Paseas en otros pueblos?",
    a: "Los paseos están disponibles exclusivamente en Alginet y Benifaió.",
  },
];

export default function Page() {
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
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", lineHeight: 1.7 }}>
      <p><Link href="/">← Volver a KuidaPet</Link></p>

      <h1>Paseador de perros en Benifaió</h1>
      <p>
        Si tu perro pasa muchas horas solo, un paseo a mediodía le cambia el día: sale, se mueve, hace
        sus necesidades y recibe atención. En KuidaPet paseo perros en Benifaió con trato personalizado
        y te mando una foto o un vídeo para que veas cómo lo ha pasado.
      </p>

      <h2>Tarifas de paseos en Benifaió</h2>
      <ul>
        <li>30 minutos (1 perro): 13 €</li>
        <li>30 minutos (2 perros compatibles): 22 €</li>
        <li>60 minutos (1 perro): 22 €</li>
        <li>Perro adicional compatible: +15 €</li>
      </ul>
      <p>El desplazamiento en Benifaió está incluido.</p>

      <h2>Para qué perros es ideal</h2>
      <p>
        Para perros que se quedan solos mientras trabajas, para los que necesitan gastar energía a
        mitad del día, para cachorros y para perros mayores que agradecen una salida tranquila.
      </p>

      <h2>Más que un paseo</h2>
      <p>
        Si además necesitas que alguien cuide a tu perro mientras viajas, mira el
        servicio de <Link href="/cuidador-perros-benifaio">cuidado de perros a domicilio en Benifaió</Link>.
        Y si vives en Alginet, tienes los <Link href="/paseador-perros-alginet">paseos en Alginet</Link>.
      </p>

      <h2>Preguntas frecuentes</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <p>
        <a
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre paseos para mi perro en Benifaió.")}
          style={{ display: "inline-block", background: "#25D366", color: "#fff", padding: "12px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}
        >
          Solicitar presupuesto por WhatsApp
        </a>
      </p>
      <p>También puedes llamar al <a href="tel:+34654533971">654 53 39 71</a>.</p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
}