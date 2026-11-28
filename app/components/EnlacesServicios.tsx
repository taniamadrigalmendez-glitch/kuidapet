import Link from "next/link";

const grupos = [
  {
    titulo: "Alginet",
    enlaces: [
      { href: "/cuidador-mascotas-alginet", texto: "Cuidado de mascotas en Alginet" },
      { href: "/cuidador-perros-alginet", texto: "Cuidador de perros en Alginet" },
      { href: "/paseador-perros-alginet", texto: "Paseador de perros en Alginet" },
    ],
  },
  {
    titulo: "Benifaió",
    enlaces: [
      { href: "/cuidador-mascotas-benifaio", texto: "Cuidado de mascotas en Benifaió" },
      { href: "/cuidador-perros-benifaio", texto: "Cuidador de perros en Benifaió" },
      { href: "/paseador-perros-benifaio", texto: "Paseador de perros en Benifaió" },
    ],
  },
  {
    titulo: "Gatos",
    enlaces: [
      { href: "/cuidador-gatos-valencia", texto: "Cuidador de gatos a domicilio" },
    ],
  },
];

export default function EnlacesServicios() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Servicios por zona</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {grupos.map((g) => (
          <div key={g.titulo} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-xl font-semibold mb-3">{g.titulo}</h3>
            <ul className="space-y-2">
              {g.enlaces.map((e) => (
                <li key={e.href}>
                  <Link href={e.href} className="text-green-700 underline hover:text-green-900">
                    {e.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}