import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/cuidador-mascotas-benifaio";
const title = "Cuidador de mascotas a domicilio en Benifaió | KuidaPet";
const description =
  "Cuidado de gatos, perros y pequeñas mascotas a domicilio en Benifaió. Medicación, fotos, vídeos e informe en cada visita. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Qué animales cuidas en Benifaió?",
    a: "Gatos, perros, conejos, cobayas, hámsters, ratones y jerbos, hurones, aves domésticas, tortugas y peces ornamentales.",
  },
  {
    q: "¿Cuánto cuesta cuidar a un gato en Benifaió?",
    a: "La visita estándar de 45-60 minutos cuesta 24 € e incluye hasta 3 pequeñas mascotas. Mascota adicional: +3 € por visita. El desplazamiento en Benifaió está incluido.",
  },
  {
    q: "¿Y si mi mascota necesita medicación?",
    a: "La medicación sencilla está incluida. La compleja tiene un suplemento de 3 € por visita, y también existe el Plan Medicación (2 visitas de 30 minutos) por 38 €.",
  },
  {
    q: "¿Riegas las plantas?",
    a: "Sí, durante las visitas programadas y sin coste adicional.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Escríbeme por WhatsApp con las fechas y las mascotas que tienes. Hacemos una pre-visita (15 €) y listo.",
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

      <h1>Cuidador de mascotas a domicilio en Benifaió</h1>
      <p>
        En KuidaPet cuido de gatos, perros y pequeñas mascotas en su propia casa en Benifaió, para que
        mantengan su rutina mientras tú estás de viaje, trabajando o fuera. Después de cada visita
        recibes fotos, vídeos e informe personalizado.
      </p>

      <h2>Qué incluye cada visita</h2>
      <ul>
        <li>Alimentación y agua fresca.</li>
        <li>Limpieza básica (por ejemplo, el arenero en el caso de los gatos).</li>
        <li>Compañía y enriquecimiento ambiental.</li>
        <li>Administración de medicación pautada por el veterinario.</li>
        <li>Fotos, vídeos e informe personalizado.</li>
        <li>Riego de plantas incluido.</li>
      </ul>

      <h2>Tarifas para gatos y pequeñas mascotas</h2>
      <ul>
        <li>Visita estándar (45-60 min): 24 €</li>
        <li>Visita ampliada (75-90 min): 35 €</li>
        <li>Plan medicación (2 visitas de 30 min): 38 €</li>
        <li>Compañía prolongada (4 horas): 90 €</li>
        <li>Hasta 3 mascotas incluidas. Mascota adicional: +3 € por visita</li>
        <li>Pre-visita y entrega de llaves: 15 €</li>
      </ul>
      <p>En Benifaió el desplazamiento está incluido.</p>

      <h2>Servicios para perros</h2>
      <p>
        Si tienes perro, consulta el <Link href="/cuidador-perros-benifaio">cuidado de perros en Benifaió</Link> y
        los <Link href="/paseador-perros-benifaio">paseos para perros en Benifaió</Link>. Si vives en
        Alginet, tienes el <Link href="/cuidador-mascotas-alginet">cuidado de mascotas en Alginet</Link>.
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
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre el cuidado de mi mascota en Benifaió.")}
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