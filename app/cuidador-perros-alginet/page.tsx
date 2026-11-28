import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/cuidador-perros-alginet";
const title = "Cuidador de perros a domicilio en Alginet | KuidaPet";
const description =
  "Cuidador de perros a domicilio en Alginet: visitas, medicación, fotos, vídeos e informe tras cada visita. Desde 25 €. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Cuánto cuesta cuidar a un perro a domicilio en Alginet?",
    a: "Una visita estándar de 45-60 minutos para un perro cuesta 25 €, y 33 € para dos perros compatibles. En Alginet el desplazamiento está incluido.",
  },
  {
    q: "¿Mi perro estará más tranquilo en casa que en una residencia?",
    a: "Muchos perros llevan mejor quedarse en su entorno habitual, con sus rutinas, su cama y sus olores. Por eso mi servicio es a domicilio y no en una residencia.",
  },
  {
    q: "¿Recibiré información durante las visitas?",
    a: "Sí. Después de cada visita recibes fotos, vídeos y un informe personalizado con cómo ha comido, cómo está y cómo ha ido la visita.",
  },
  {
    q: "¿Cómo se entregan las llaves?",
    a: "Durante la pre-visita (15 €). Así conozco a tu perro, repasamos sus rutinas y resolvemos cualquier duda antes de empezar.",
  },
  {
    q: "¿Puedes dar medicación a mi perro?",
    a: "Sí, siguiendo las pautas del veterinario. La medicación sencilla está incluida y la compleja tiene un suplemento de 3 € por visita.",
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

      <h1>Cuidador de perros a domicilio en Alginet</h1>
      <p>
        Tu perro no tiene por qué pasar tus días fuera en una residencia. En KuidaPet voy a tu casa en
        Alginet para darle de comer, hacerle compañía, sacarlo a hacer sus necesidades y mantener su
        rutina. Tú recibes fotos, vídeos e informe después de cada visita, estés donde estés.
      </p>

      <h2>Qué incluye cada visita</h2>
      <ul>
        <li>Alimentación y agua fresca.</li>
        <li>Compañía y enriquecimiento.</li>
        <li>Salida corta para necesidades y seguimiento.</li>
        <li>Medicación pautada por el veterinario.</li>
        <li>Fotos, vídeos e informe personalizado.</li>
        <li>Riego de plantas incluido sin coste adicional.</li>
      </ul>

      <h2>Para quién es este servicio</h2>
      <p>
        Para familias de Alginet que se van de vacaciones o de fin de semana, para quien trabaja
        jornadas largas y quiere una visita a mediodía, y para perros que necesitan medicación o que no
        llevan bien cambiar de entorno.
      </p>

      <h2>Tarifas para perros en Alginet</h2>
      <ul>
        <li>1 perro (45-60 min): 25 €</li>
        <li>2 perros compatibles (45-60 min): 33 €</li>
        <li>Visita ampliada (75-90 min): 36 €</li>
        <li>Plan medicación (2 visitas de 30 min): 38 €</li>
        <li>Compañía prolongada (4 horas): 90 €</li>
        <li>Perro adicional compatible: +8 € por visita</li>
        <li>Pre-visita y entrega de llaves: 15 €</li>
      </ul>
      <p>En Alginet el desplazamiento está incluido.</p>

      <h2>Otros servicios en Alginet</h2>
      <p>
        Mira también los <Link href="/paseador-perros-alginet">paseos para perros en Alginet</Link> y
        el <Link href="/cuidador-mascotas-alginet">cuidado de mascotas a domicilio en Alginet</Link>.
        Si vives en Benifaió, consulta el <Link href="/cuidador-perros-benifaio">cuidado de perros en Benifaió</Link>.
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
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre el cuidado de mi perro en Alginet.")}
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