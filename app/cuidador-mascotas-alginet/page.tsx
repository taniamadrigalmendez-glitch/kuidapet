import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuidador de mascotas en Alginet | KuidaPet",
  description:
    "Cuidado de mascotas a domicilio en Alginet. Servicio para gatos, perros y pequeñas mascotas. Visitas personalizadas, medicación, fotos y vídeos.",
};

export default function CuidadorMascotasAlginet() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        Cuidador de mascotas a domicilio en Alginet
      </h1>

      <p className="mb-6 text-lg">
        En KuidaPet ofrecemos servicios de cuidado de mascotas a domicilio
        en Alginet. Nos ocupamos de gatos, perros y pequeñas mascotas para
        que puedan permanecer en su hogar mientras sus familias están de
        viaje, trabajando o fuera de casa.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Servicios para gatos
      </h2>

      <p className="mb-6">
        Alimentación, limpieza de arenero, compañía, enriquecimiento
        ambiental, administración de medicación y envío de fotos y vídeos
        durante las visitas.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Servicios para perros
      </h2>

      <p className="mb-6">
        Visitas a domicilio, compañía, administración de medicación,
        alimentación y paseos para perros disponibles en Alginet.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Pequeñas mascotas
      </h2>

      <p className="mb-6">
        También cuidamos conejos, cobayas, hámsters, jerbos, ratones
        domésticos, hurones, aves domésticas, tortugas y peces ornamentales.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Qué incluye cada visita
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Alimentación y agua fresca.</li>
        <li>Limpieza básica y bienestar diario.</li>
        <li>Administración de medicación cuando sea necesaria.</li>
        <li>Fotos y vídeos durante cada visita.</li>
        <li>Informe personalizado.</li>
        <li>Riego de plantas incluido.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        ¿Por qué elegir un cuidador de mascotas en Alginet?
      </h2>

      <p className="mb-6">
        Mantener a las mascotas en su entorno habitual ayuda a reducir el
        estrés y permite conservar sus rutinas diarias. Además, al estar
        ubicados en Alginet podemos ofrecer un servicio cercano y flexible.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Solicita información
      </h2>

      <p>
        Contacta con KuidaPet para solicitar información o presupuesto para
        el cuidado de tu mascota en Alginet.
      </p>

    </main>
  );
}