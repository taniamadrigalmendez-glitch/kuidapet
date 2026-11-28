import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://kuidapet.es";
const paths = [
  "",
  "/cuidador-gatos-valencia",
  "/cuidador-mascotas-alginet",
  "/cuidador-mascotas-benifaio",
  "/cuidador-perros-alginet",
  "/cuidador-perros-benifaio",
  "/paseador-perros-alginet",
  "/paseador-perros-benifaio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}