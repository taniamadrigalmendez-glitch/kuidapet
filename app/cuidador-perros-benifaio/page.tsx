import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/cuidador-perros-benifaio";
const title = "Cuidador de perros a domicilio en Benifaió | KuidaPet";
const description =
  "Cuidador de perros a domicilio en Benifaió: visitas, medicación, fotos, vídeos e informe tras cada visita. Desde 25 €. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Qué pasa si mi perro necesita salir más de una vez al día?",
    a: "Lo hablamos por WhatsApp según su rutina. Se pueden acordar varias visitas al día para que tu perro salga y coma a sus horas habituales.",
  },
  {
    q: "¿Cuánto cuesta un cuidador de perros en Benifaió?",
    a: "Una visita estándar de 45-60 minutos para un perro cuesta 25 €. Para dos perros compatibles son 33 €. En Benifaió el desplazamiento está incluido.",
  },
  {
    q: "¿Tengo que hacer una pre-visita?",
    a: "Sí. En la pre-visita (15 €) conozco a tu perro, repasamos sus rutinas, sus manías y cualquier cuidado especial, y me entregas las llaves.",
  },
  {
    q: "¿Puedes darle medicación a mi perro?",
    a: "Sí, siguiendo siempre las pautas de tu veterinario. La medicación sencilla está incluida y la compleja tiene un suplemento de 3 € por visita.",
  },
  {
    q: "¿Mi perro se queda en tu casa?",
    a: "No. Voy yo a tu domicilio, así tu perro se queda en su casa, con su cama, sus juguetes y su rutina.",
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

      <h1>Cuidador de perros a domicilio en Benifaió</h1>
      <p>
        Si te vas de viaje, trabajas muchas horas o tienes un imprevisto, tu perro puede quedarse en
        casa con su cama, su comida y su rutina de siempre. En KuidaPet voy a tu domicilio en
        Benifaió y, después de cada visita, recibes fotos, vídeos y un informe de cómo ha ido todo.
      </p>

      <h2>Qué incluye cada visita a tu perro</h2>
      <ul>
        <li>Comida y agua fresca.</li>
        <li>Compañía, juego y enriquecimiento.</li>
        <li>Salida corta para sus necesidades.</li>
        <li>Medicación siguiendo las pautas del veterinario.</li>
        <li>Limpieza básica.</li>
        <li>Fotos, vídeos e informe personalizado.</li>
        <li>Riego de plantas incluido sin coste adicional.</li>
      </ul>

      <h2>Cómo funciona</h2>
      <ol>
        <li>Me escribes por WhatsApp con las fechas y los datos de tu perro.</li>
        <li>Hacemos una pre-visita para conocernos y entregar las llaves.</li>
        <li>Visito a tu perro en los horarios acordados y te mantengo informado.</li>
      </ol>

      <h2>Tarifas para perros en Benifaió</h2>
      <ul>
        <li>1 perro (45-60 min): 25 €</li>
        <li>2 perros compatibles (45-60 min): 33 €</li>
        <li>Visita ampliada (75-90 min): 36 €</li>
        <li>Plan medicación (2 visitas de 30 min): 38 €</li>
        <li>Compañía prolongada (4 horas): 90 €</li>
        <li>Perro adicional compatible: +8 € por visita</li>
        <li>Pre-visita y entrega de llaves: 15 €</li>
      </ul>
      <p>En Benifaió el desplazamiento está incluido. En temporada alta las visitas pueden ajustarse a 30-45 minutos.</p>

      <h2>Otros servicios en Benifaió</h2>
      <p>
        También ofrezco <Link href="/paseador-perros-benifaio">paseos para perros en Benifaió</Link> y
        cuidado de <Link href="/cuidador-mascotas-benifaio">gatos y pequeñas mascotas</Link>. Si vives
        en Alginet, mira el <Link href="/cuidador-perros-alginet">cuidado de perros en Alginet</Link>.
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
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre el cuidado de mi perro en Benifaió.")}
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