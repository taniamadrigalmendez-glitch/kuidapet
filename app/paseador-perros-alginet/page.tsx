import type { Metadata } from "next";
import Link from "next/link";

const url = "https://kuidapet.es/paseador-perros-alginet";
const title = "Paseador de perros en Alginet | KuidaPet";
const description =
  "Paseador de perros en Alginet: paseos de 30 o 60 minutos desde 13 €. Servicio personalizado con fotos. Pide presupuesto por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "es_ES", siteName: "KuidaPet" },
};

const faqs = [
  {
    q: "¿Cuánto cuesta un paseador de perros en Alginet?",
    a: "El paseo de 30 minutos cuesta 13 € por perro y el de 60 minutos 22 €. Para dos perros compatibles, 30 minutos son 22 €.",
  },
  {
    q: "¿Hay suplemento por un segundo o tercer perro?",
    a: "Si es compatible, el perro adicional tiene un suplemento de 15 € por paseo. Para dos perros en 30 minutos la tarifa es de 22 €.",
  },
  {
    q: "¿Puedo contratar paseos de forma recurrente?",
    a: "Sí. Escríbeme por WhatsApp con los días y horarios que necesitas y lo organizamos.",
  },
  {
    q: "¿Cómo recojo a mi perro si no estoy?",
    a: "Hacemos una pre-visita (15 €) donde me entregas las llaves, conozco a tu perro y repasamos su rutina y sus cuidados.",
  },
  {
    q: "¿Cubres otros pueblos con paseos?",
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

      <h1>Paseador de perros en Alginet</h1>
      <p>
        Un perro que sale, se mueve y se relaciona es un perro más tranquilo en casa. Con los paseos de
        KuidaPet en Alginet tu perro tiene su rato de ejercicio y atención aunque tú estés trabajando o
        fuera. Recibes fotos o vídeos para ver cómo ha ido.
      </p>

      <h2>Tarifas de paseos en Alginet</h2>
      <ul>
        <li>30 minutos (1 perro): 13 €</li>
        <li>30 minutos (2 perros compatibles): 22 €</li>
        <li>60 minutos (1 perro): 22 €</li>
        <li>Perro adicional compatible: +15 €</li>
      </ul>
      <p>El desplazamiento en Alginet está incluido.</p>

      <h2>Cuándo conviene un paseo</h2>
      <p>
        Si trabajas toda la mañana o todo el día, si tu perro tiene mucha energía, si estás de
        vacaciones y quieres sumar una salida extra a las visitas, o si tu perro mayor necesita
        un paseo tranquilo y sin prisa.
      </p>

      <h2>Combínalo con otros servicios</h2>
      <p>
        Si te vas de viaje, mira el <Link href="/cuidador-perros-alginet">cuidado de perros a domicilio en Alginet</Link>.
        Para otros animales, tienes el <Link href="/cuidador-mascotas-alginet">cuidado de mascotas en Alginet</Link>.
        Si vives en Benifaió, consulta los <Link href="/paseador-perros-benifaio">paseos en Benifaió</Link>.
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
          href={"https://wa.me/34654533971?text=" + encodeURIComponent("Hola, quiero información sobre paseos para mi perro en Alginet.")}
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