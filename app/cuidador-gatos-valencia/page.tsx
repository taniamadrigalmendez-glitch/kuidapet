import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuidador de gatos en Valencia | KuidaPet",
  description:
    "Servicio profesional de cuidado de gatos a domicilio en Valencia y la Ribera Alta. Visitas, medicación, fotos, vídeos e informes personalizados.",
};

export default function CuidadorGatosValencia() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Cuidador de gatos a domicilio en Valencia
      </h1>

      <p className="mb-6">
        En KuidaPet ofrecemos un servicio profesional de cuidado de gatos
        a domicilio en Valencia y la Ribera Alta. Tu gato permanece en su
        hogar, rodeado de sus olores, rutinas y espacios habituales,
        reduciendo el estrés que pueden causar los desplazamientos o las
        residencias.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        ¿Qué incluye cada visita?
      </h2>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Comida y agua fresca.</li>
        <li>Limpieza de arenero.</li>
        <li>Tiempo de juego y compañía.</li>
        <li>Administración de medicación cuando sea necesario.</li>
        <li>Fotos y vídeos durante la visita.</li>
        <li>Informe personalizado tras cada visita.</li>
        <li>Riego de plantas sin coste adicional.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        Ventajas del cuidado de gatos a domicilio
      </h2>

      <p className="mb-6">
        La mayoría de los gatos se adaptan mucho mejor cuando permanecen en
        su entorno habitual. Mantener sus horarios y su territorio ayuda a
        reducir el estrés y favorece su bienestar durante periodos de
        vacaciones, viajes o ausencias.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Zonas de servicio
      </h2>

      <p className="mb-6">
        Prestamos servicio en Valencia, Alginet, Benifaió, Algemesí,
        Carlet, Almussafes y otras localidades de la Ribera Alta.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Solicitar información
      </h2>

      <p>
        Si buscas un cuidador de gatos en Valencia o la Ribera Alta, puedes
        contactar con KuidaPet para solicitar información y presupuesto sin
        compromiso.
      </p>

    </main>
  );
}