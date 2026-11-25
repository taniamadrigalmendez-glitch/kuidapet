import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "KuidaPet | Cuidado de mascotas a domicilio en Valencia y la Ribera Alta",

  description:
    "Cuidado profesional de gatos, perros y pequeñas mascotas a domicilio. Visitas, paseos, administración de medicación, fotos, vídeos e informes. Servicio en Valencia, Alginet, Benifaió y la Ribera Alta.",

  keywords: [
    "cuidado de mascotas",
    "cuidado de mascotas a domicilio",
    "cuidador de gatos Valencia",
    "cuidado de gatos Valencia",
    "cat sitter Valencia",
    "pet sitter Valencia",
    "cuidador de perros Alginet",
    "cuidador de mascotas Benifaió",
    "cuidado de mascotas Ribera Alta",
    "administración de medicación mascotas",
    "paseador de perros Alginet",
    "paseador de perros Benifaió",
    "cuidado de gatos a domicilio Valencia",
  ],

  authors: [{ name: "KuidaPet" }],

  creator: "KuidaPet",

  openGraph: {
    title:
      "KuidaPet | Cuidado de mascotas a domicilio en Valencia y la Ribera Alta",

    description:
      "Visitas a domicilio para gatos, perros y pequeñas mascotas. Medicación, fotos, vídeos, informes y riego de plantas incluido.",

    siteName: "KuidaPet",

    locale: "es_ES",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}