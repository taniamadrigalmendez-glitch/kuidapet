import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/cuidador-mascotas-alginet";
const title = "Cuidador de mascotas a domicilio en Alginet | KuidaPet";
const description =
  "Cuidado de gatos, perros y pequeñas mascotas a domicilio en Alginet. Medicación, fotos, vídeos e informe en cada visita. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Qué animales cuidas en Alginet?",
    a: "Gatos, perros, conejos, cobayas, hámsters, ratones y jerbos, hurones, aves domésticas, tortugas y peces ornamentales.",
  },
  {
    q: "¿Cuánto cuesta un cuidador de mascotas en Alginet?",
    a: "Para gatos y pequeñas mascotas, la visita estándar de 45-60 minutos cuesta 24 € e incluye hasta 3 mascotas. Para perros, 25 € por 1 perro y 33 € por 2 perros compatibles. En Alginet el desplazamiento está incluido.",
  },
  {
    q: "¿Puedes darle medicación a mi mascota?",
    a: "Sí, siguiendo siempre las pautas de tu veterinario. La medicación sencilla está incluida en la visita y la compleja tiene un suplemento de 3 € por visita. También existe el Plan Medicación (2 visitas de 30 minutos) por 38 €.",
  },
  {
    q: "¿Recibiré fotos y vídeos de mi mascota?",
    a: "Sí. Después de cada visita recibes fotos, vídeos y un informe personalizado de cómo ha ido.",
  },
  {
    q: "¿Cómo se entregan las llaves?",
    a: "Durante la pre-visita (15 €). Así conozco a tus mascotas, repasamos sus rutinas y resolvemos cualquier duda antes de empezar.",
  },
  {
    q: "¿Riegas las plantas?",
    a: "Sí. El riego de plantas está incluido sin coste adicional durante las visitas programadas.",
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

      <h1>Cuidador de mascotas a domicilio en Alginet</h1>
      <p>
        En KuidaPet cuido de gatos, perros y pequeñas mascotas en su propia casa en Alginet, para que
        mantengan su rutina mientras tú estás de viaje, trabajando o fuera de casa. Mantener a las
        mascotas en su entorno habitual reduce el estrés, y tú recibes fotos, vídeos e informe después
        de cada visita.
      </p>

      <h2>Servicios para gatos</h2>
      <p>
        Alimentación, agua fresca, limpieza del arenero, compañía, enriquecimiento ambiental,
        administración de medicación y envío de fotos y vídeos durante las visitas. Más información en
        la página de <Link href="/cuidador-gatos-valencia">cuidado de gatos a domicilio</Link>.
      </p>

      <h2>Servicios para perros</h2>
      <p>
        Visitas a domicilio con comida, agua, compañía, salida corta para necesidades y medicación
        cuando haga falta. También tengo paseos disponibles en Alginet. Mira el detalle en
        <Link href="/cuidador-perros-alginet"> cuidado de perros en Alginet</Link> y en
        <Link href="/paseador-perros-alginet"> paseos para perros en Alginet</Link>.
      </p>

      <h2>Pequeñas mascotas</h2>
      <p>
        También cuido conejos, cobayas, hámsters, jerbos, ratones domésticos, hurones, aves domésticas,
        tortugas y peces ornamentales.
      </p>

      <h2>Qué incluye cada visita</h2>
      <ul>
        <li>Alimentación y agua fresca.</li>
        <li>Limpieza básica y bienestar diario.</li>
        <li>Compañía y enriquecimiento ambiental.</li>
        <li>Administración de medicación cuando sea necesaria.</li>
        <li>Fotos y vídeos durante cada visita.</li>
        <li>Informe personalizado.</li>
        <li>Riego de plantas incluido.</li>
      </ul>

      <h2>Tarifas en Alginet</h2>
      <h3>Gatos y pequeñas mascotas</h3>
      <ul>
        <li>Visita estándar (45-60 min): 24 €</li>
        <li>Visita ampliada (75-90 min): 35 €</li>
        <li>Plan medicación (2 visitas de 30 min): 38 €</li>
        <li>Compañía prolongada (4 horas): 90 €</li>
        <li>Hasta 3 mascotas incluidas. Mascota adicional: +3 € por visita</li>
      </ul>
      <h3>Perros</h3>
      <ul>
        <li>1 perro (45-60 min): 25 €</li>
        <li>2 perros compatibles (45-60 min): 33 €</li>
        <li>Visita ampliada (75-90 min): 36 €</li>
        <li>Perro adicional compatible: +8 € por visita</li>
      </ul>
      <h3>Paseos</h3>
      <ul>
        <li>30 minutos (1 perro): 13 €</li>
        <li>60 minutos (1 perro): 22 €</li>
      </ul>
      <p>
        Pre-visita y entrega de llaves: 15 €. En Alginet el desplazamiento está incluido. En
        temporada alta las visitas pueden ajustarse a 30-45 minutos.
      </p>

      <h2>¿Por qué elegir un cuidador de mascotas en Alginet?</h2>
      <p>
        Mantener a las mascotas en su entorno habitual ayuda a reducir el estrés y permite conservar
        sus rutinas diarias. Además, al estar ubicados en Alginet podemos ofrecer un servicio cercano y
        flexible, con respuesta rápida por WhatsApp.
      </p>

      <h2>También en Benifaió</h2>
      <p>
        Si vives en Benifaió, consulta el <Link href="/cuidador-mascotas-benifaio">cuidado de mascotas en Benifaió</Link>.
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
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre el cuidado de mi mascota en Alginet.")}
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