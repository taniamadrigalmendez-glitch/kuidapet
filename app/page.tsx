import Image from "next/image";
import EnlacesServicios from "./components/EnlacesServicios";
export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-8">
<div className="flex justify-center mb-0">
  <img
    src="/logo-kuidapet.png"
    alt="KuidaPet"
    className="w-72 md:w-96 h-auto"
  />
</div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
  Cuidado de mascotas a domicilio en Alginet, Benifaió, Valencia y la Ribera Alta
</h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-center">
  Servicio profesional de cuidado de gatos, perros y pequeñas mascotas a domicilio
  en Alginet, Benifaió, Valencia y la Ribera Alta. Visitas personalizadas,
  medicación, fotos, vídeos e informes durante cada servicio.
</p>


        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
          <div>✅ Español e inglés</div>
          <div>✅ Medicación</div>
          <div>✅ Fotos y vídeos</div>
          <div>✅ Riego de plantas incluido</div>
        </div>
<div className="flex justify-center">
        <a
          href="https://wa.me/34654533971?text=Hola,%20he%20encontrado%20KuidaPet%20y%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20el%20cuidado%20de%20mi%20mascota."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700"
        >
          Solicitar presupuesto por WhatsApp
        </a>
       </div>

      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            ¿Por qué elegir KuidaPet?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">
                Atención personalizada
              </h3>

              <p>
                Cada mascota recibe atención adaptada a sus necesidades y rutina.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">
                Seguimiento diario
              </h3>

              <p>
                Fotos, vídeos e informe personalizado después de cada visita.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <h3 className="font-semibold mb-2">
                Valor añadido
              </h3>

              <p>
                Riego de plantas incluido sin coste adicional.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              🐱 Gatos y pequeñas mascotas
            </h3>

            <p>
  Alimentación, agua fresca, limpieza básica,
  compañía, fotos, vídeos e informe personalizado.
</p>

<div className="mt-4 text-sm text-gray-600">
  <p className="mb-3 font-medium">
    También cuidamos:
  </p>

  <ul className="space-y-1">
    <li>🐰 Conejos</li>
    <li>🐹 Cobayas y hámsters</li>
    <li>🐭 Ratones y jerbos</li>
    <li>🦦 Hurones</li>
    <li>🐦 Aves domésticas</li>
    <li>🐢 Tortugas</li>
    <li>🐠 Peces ornamentales</li>
  </ul>
</div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              🐶 Perros
            </h3>

            <p>
              Alimentación, compañía, enriquecimiento,
              salida corta para necesidades y seguimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              💊 Administración de medicación
            </h3>

            <p>
              Siguiendo siempre las pautas facilitadas por el veterinario.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">
              🚶 Paseos para perros
          </h3>

            <p>
                Servicio disponible exclusivamente en Alginet y Benifaió.
            </p>
          </div>

        </div>

      </section>

      {/* TARIFAS */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Tarifas
          </h2>

          <p className="text-gray-600 mb-10">
            Todas las visitas incluyen fotos, vídeos, informe personalizado y riego de plantas sin coste adicional.
          </p>
<div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8">
  <h3 className="font-bold text-lg mb-3">
    ℹ️ Información importante
  </h3>

  <ul className="space-y-2">
    <li>✅ Hasta 3 pequeñas mascotas incluidas</li>
    <li>✅ Mascota adicional: +3 € por visita</li>
    <li>✅ Perro adicional compatible: +8 € por visita</li>
    <li>✅ Medicación compleja: +3 € por visita</li>
    <li>✅ Riego de plantas incluido</li>
    <li>✅ Suplemento por desplazamiento fuera de Alginet y Benifaió</li>
    <li>✅ En temporada alta las visitas pueden ajustarse a una duración aproximada de entre 30 y 45 minutos</li>

  </ul>
</div>
          <div className="space-y-8">

            <details className="bg-white border rounded-xl p-6">
  <summary className="text-2xl font-semibold cursor-pointer list-none">
    🐱🐰🐹 Gatos y pequeñas mascotas
  </summary>

  <div className="mt-4">
    <ul className="space-y-2">
      <li>Visita estándar (45-60 min): <strong>24 €</strong></li>
      <li>Visita ampliada (75-90 min): <strong>35 €</strong></li>
      <li>Plan medicación (2 visitas de 30 min): <strong>38 €</strong></li>
      <li>Compañía prolongada (4 horas): <strong>90 €</strong></li>
    </ul>

    <div className="mt-4 text-sm text-gray-600">
      <p><strong>Hasta 3 mascotas incluidas.</strong></p>
      <p>Mascota adicional: <strong>+3 € por visita</strong></p>

      <div className="mt-4 flex flex-wrap gap-4">
        <span>🐰 Conejos</span>
        <span>🐹 Cobayas y hámsters</span>
        <span>🐭 Ratones y jerbos</span>
        <span>🦦 Hurones</span>
        <span>🐦 Aves domésticas</span>
        <span>🐢 Tortugas</span>
        <span>🐠 Peces ornamentales</span>
      </div>
      <div className="mt-6">
  <a
    href="/cuidador-gatos-valencia"
    className="text-green-600 font-semibold hover:underline"
  >
    Más información sobre el cuidado de gatos →
  </a>
</div>
    </div>
  </div>
</details>

            <details className="bg-white border rounded-xl p-6">
  <summary className="text-2xl font-semibold cursor-pointer list-none">
    🐶 Perros
  </summary>

  <div className="mt-4">
    <ul className="space-y-2">
      <li>1 perro (45-60 min): <strong>25 €</strong></li>
      <li>2 perros compatibles (45-60 min): <strong>33 €</strong></li>
      <li>Visita ampliada (75-90 min): <strong>36 €</strong></li>
      <li>Plan medicación (2 visitas de 30 min): <strong>38 €</strong></li>
      <li>Compañía prolongada (4 horas): <strong>90 €</strong></li>
    </ul>

    <p>
  Perro adicional compatible:
  <strong> +8 € por visita</strong>
</p>

<div className="mt-6">
  <a
    href="/cuidador-mascotas-alginet"
    className="text-green-600 font-semibold hover:underline"
  >
    Más información sobre el cuidado de mascotas en Alginet →
  </a>
</div>

</div>
</details>

           <details className="bg-white border rounded-xl p-6">
  <summary className="text-2xl font-semibold cursor-pointer list-none">
    🚶 Paseos
  </summary>

  <div className="mt-4">

    <p className="text-red-600 font-bold mb-3">
      * Servicio disponible exclusivamente en Alginet y Benifaió
    </p>

    <ul className="space-y-2">
      <li>30 minutos (1 perro): <strong>13 €</strong></li>
      <li>30 minutos (2 perros compatibles): <strong>22 €</strong></li>
      <li>60 minutos (1 perro): <strong>22 €</strong></li>
      <li>Perro adicional compatible: <strong>+15 €</strong></li>
    </ul>

  </div>
</details>

            <details className="bg-white border rounded-xl p-6">
  <summary className="text-2xl font-semibold cursor-pointer list-none">
    🔑 Pre-visita
  </summary>

  <div className="mt-4">
    <p>
      Pre-visita presencial y entrega de llaves:
      <strong> 15 €</strong>
    </p>
  </div>
</details>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">
                🚗 Desplazamientos
              </h3>

              <p>
                Los servicios realizados en Alginet y Benifaió tienen el desplazamiento incluido.
              </p>

              <p className="mt-3">
                Para servicios fuera de Alginet y Benifaió se aplicará un suplemento por desplazamiento según la distancia.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                💊 Información sobre la medicación
              </h3>

              <p className="mb-3">
                La medicación sencilla está incluida en las visitas.
              </p>

              <p className="mb-3">
                El Plan Medicación (38 €) está pensado para mascotas que necesitan dos visitas diarias.
              </p>

              <p>
                La medicación compleja tiene un suplemento de <strong>+3 € por visita</strong>.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                🌿 Riego de plantas incluido
              </h3>

              <p>
                Durante las visitas también puedo encargarme del riego de tus plantas sin coste adicional.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ZONAS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-10">
          Zonas de servicio
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-xl">
              Ribera Alta
            </h3>

            <p>
              Alginet, Benifaió, Algemesí, Carlet, Almussafes y alrededores.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              Valencia capital
            </h3>

            <p>
              Servicio de cuidado de gatos y pequeñas mascotas en la zona de Pérez Galdós y alrededores.
            </p>
          </div>

        </div>

      </section>
{/* DISPONIBILIDAD */}
<section className="bg-green-50 py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-4">
      📅 Disponibilidad actual
    </h2>

    <p className="text-gray-600 mb-8">
      Calendario orientativo actualizado manualmente.
      Para confirmar fechas concretas, consulta disponibilidad por WhatsApp.
    </p>
<div className="grid md:grid-cols-2 gap-8">

  {/* DICIEMBRE */}

  <div className="bg-white rounded-xl border p-6">

    <h3 className="text-xl font-semibold mb-4">
      Diciembre 2026
    </h3>

    <div className="grid grid-cols-7 gap-2 text-center text-sm">

      <div className="font-semibold">L</div>
      <div className="font-semibold">M</div>
      <div className="font-semibold">X</div>
      <div className="font-semibold">J</div>
      <div className="font-semibold">V</div>
      <div className="font-semibold">S</div>
      <div className="font-semibold">D</div>

      <div></div>

      <div className="p-2 rounded bg-yellow-200">1</div>
      <div className="p-2 rounded bg-yellow-200">2</div>
      <div className="p-2 rounded bg-yellow-200">3</div>
      <div className="p-2 rounded bg-yellow-200">4</div>
      <div className="p-2 rounded bg-yellow-200">5</div>
      <div className="p-2 rounded bg-yellow-200">6</div>
      <div className="p-2 rounded bg-yellow-200">7</div>
<div className="p-2 rounded bg-yellow-200">8</div>
<div className="p-2 rounded bg-yellow-200">9</div>
<div className="p-2 rounded bg-yellow-200">10</div>
<div className="p-2 rounded bg-yellow-200">11</div>
<div className="p-2 rounded bg-yellow-200">12</div>
<div className="p-2 rounded bg-yellow-200">13</div>

<div className="p-2 rounded bg-yellow-200">14</div>
<div className="p-2 rounded bg-yellow-200">15</div>
<div className="p-2 rounded bg-yellow-200">16</div>
<div className="p-2 rounded bg-yellow-200">17</div>
<div className="p-2 rounded bg-yellow-200">18</div>
<div className="p-2 rounded bg-yellow-200">19</div>
<div className="p-2 rounded bg-yellow-200">20</div>

<div className="p-2 rounded bg-yellow-200">21</div>
<div className="p-2 rounded bg-yellow-200">22</div>
<div className="p-2 rounded bg-yellow-200">23</div>
<div className="p-2 rounded bg-yellow-200">24</div>
<div className="p-2 rounded bg-yellow-200">25</div>
<div className="p-2 rounded bg-yellow-200">26</div>
<div className="p-2 rounded bg-yellow-200">27</div>

<div className="p-2 rounded bg-yellow-200">28</div>
<div className="p-2 rounded bg-yellow-200">29</div>
<div className="p-2 rounded bg-yellow-200">30</div>
<div className="p-2 rounded bg-yellow-200">31</div>

    </div>

    <p className="mt-4 text-sm text-gray-600">
      🟡 Plazas limitadas durante todo diciembre.
    </p>

  </div>

  {/* ENERO */}

  <div className="bg-white rounded-xl border p-6">

    <h3 className="text-xl font-semibold mb-4">
      Enero 2027
    </h3>

    <div className="grid grid-cols-7 gap-2 text-center text-sm">

      <div className="font-semibold">L</div>
      <div className="font-semibold">M</div>
      <div className="font-semibold">X</div>
      <div className="font-semibold">J</div>
      <div className="font-semibold">V</div>
      <div className="font-semibold">S</div>
      <div className="font-semibold">D</div>
      

      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div className="p-2 rounded bg-green-200">1</div>
      <div className="p-2 rounded bg-green-200">2</div>
      <div className="p-2 rounded bg-green-200">3</div>
      <div className="p-2 rounded bg-green-200">4</div>
<div className="p-2 rounded bg-green-200">5</div>
<div className="p-2 rounded bg-green-200">6</div>
<div className="p-2 rounded bg-green-200">7</div>
<div className="p-2 rounded bg-green-200">8</div>
<div className="p-2 rounded bg-green-200">9</div>
<div className="p-2 rounded bg-green-200">10</div>

<div className="p-2 rounded bg-green-200">11</div>
<div className="p-2 rounded bg-green-200">12</div>
<div className="p-2 rounded bg-green-200">13</div>
<div className="p-2 rounded bg-green-200">14</div>
<div className="p-2 rounded bg-green-200">15</div>
<div className="p-2 rounded bg-green-200">16</div>
<div className="p-2 rounded bg-green-200">17</div>

<div className="p-2 rounded bg-green-200">18</div>
<div className="p-2 rounded bg-green-200">19</div>
<div className="p-2 rounded bg-green-200">20</div>
<div className="p-2 rounded bg-green-200">21</div>
<div className="p-2 rounded bg-green-200">22</div>
<div className="p-2 rounded bg-green-200">23</div>
<div className="p-2 rounded bg-green-200">24</div>

<div className="p-2 rounded bg-green-200">25</div>
<div className="p-2 rounded bg-green-200">26</div>
<div className="p-2 rounded bg-green-200">27</div>
<div className="p-2 rounded bg-green-200">28</div>
<div className="p-2 rounded bg-green-200">29</div>
<div className="p-2 rounded bg-green-200">30</div>
<div className="p-2 rounded bg-green-200">31</div>

    </div>

    <p className="mt-4 text-sm text-gray-600">
      🟢 Disponible.
    </p>

  </div>

</div>

<div className="flex flex-wrap gap-6 mt-8">

  <div>
    🟢 Disponible
  </div>

  <div>
    🟡 Plazas limitadas
  </div>

  <div>
    🔴 Completo
  </div>

</div>
  </div>
</section>
{/* FAQ */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold mb-10">
    Preguntas frecuentes
  </h2>

  <details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Cómo funciona la entrega de llaves?
  </summary>

  <p className="mt-4">
    La entrega de llaves se realiza durante la pre-visita. En ese momento conocemos a las mascotas, revisamos sus rutinas y resolvemos cualquier duda.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Recibiré fotos y vídeos?
  </summary>

  <p className="mt-4">
    Sí. Después de cada visita recibirás fotos, vídeos e información sobre el estado de tu mascota.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Administras medicación?
  </summary>

  <p className="mt-4">
    Sí. La medicación sencilla está incluida en las visitas. La medicación compleja tiene un suplemento de 3 € por visita.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Regáis las plantas?
  </summary>

  <p className="mt-4">
    Sí. El riego de plantas está incluido sin coste adicional durante las visitas programadas.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Qué zonas cubrís?
  </summary>

  <p className="mt-4">
    Trabajo en Valencia capital, Alginet, Benifaió, Algemesí, Carlet, Almussafes y poblaciones cercanas de la Ribera Alta.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Cuántas mascotas están incluidas?
  </summary>

  <p className="mt-4">
    Las tarifas para gatos y pequeñas mascotas incluyen hasta 3 mascotas. A partir de la cuarta mascota se aplica un suplemento de 3 € por visita.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Hay suplemento por perros adicionales?
  </summary>

  <p className="mt-4">
    Sí. Los perros adicionales compatibles tienen un suplemento de 8 € por visita.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Con cuánta antelación debo reservar?
  </summary>

  <p className="mt-4">
    Cuanto antes mejor, especialmente en vacaciones, festivos y periodos de alta demanda.
  </p>
</details>

<details className="border rounded-xl p-6">
  <summary className="font-semibold text-lg cursor-pointer">
    ¿Las visitas mantienen la misma duración en temporada alta?
  </summary>

  <p className="mt-4">
    Durante periodos de alta demanda, como vacaciones, puentes o festivos, las visitas pueden ajustarse a una duración aproximada de entre 30 y 45 minutos para poder atender correctamente a todos los clientes.

    Los cuidados contratados seguirán realizándose con normalidad, incluyendo alimentación, limpieza, medicación cuando corresponda, fotos, vídeos e informe de seguimiento.
  </p>
</details>


</section>
{/* RESERVA */}
<section className="py-10">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      🐾 ¿Listo para reservar?
    </h2>

    <p className="text-lg text-gray-600 mb-8">
      Ya conoces los servicios, tarifas, disponibilidad y condiciones.
      Escríbeme por WhatsApp y responderé personalmente a tu consulta.
    </p>

    <a
      href="https://wa.me/34654533971"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-xl bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700"
    >
      Reservar por WhatsApp
    </a>

  </div>
</section>
{/* BOTÓN FLOTANTE WHATSAPP */}
<a
  href="https://wa.me/34654533971"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="white"
  className="w-8 h-8"
>
  <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.55 0 .25 5.29.25 11.82c0 2.08.54 4.11 1.57 5.89L0 24l6.47-1.7a11.8 11.8 0 005.6 1.43h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.14-3.38-8.43zM12.08 21.7a9.87 9.87 0 01-5.03-1.37l-.36-.21-3.84 1.01 1.03-3.75-.24-.39a9.84 9.84 0 01-1.51-5.17c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.13 1.03 6.99 2.89a9.82 9.82 0 012.91 7.01c0 5.46-4.45 9.88-9.92 9.88zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.01 2.5.03 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.71.63.72.23 1.37.2 1.89.12.58-.08 1.76-.72 2.01-1.42.25-.7.25-1.31.18-1.43-.07-.12-.27-.2-.57-.35z"/>
</svg>

</a>
<EnlacesServicios />
     {/* FOOTER */}
<footer className="border-t py-10 mt-10">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="text-gray-500 mb-4">
      © 2026 KuidaPet
    </p>

    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">

      <a href="/aviso-legal" className="hover:text-green-600">
        Aviso Legal
      </a>

      <a href="/privacidad" className="hover:text-green-600">
        Política de Privacidad
      </a>

      <a href="/cookies" className="hover:text-green-600">
        Política de Cookies
      </a>

    </div>

  </div>
</footer> 
    </main>
  );
}
