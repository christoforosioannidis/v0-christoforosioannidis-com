import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://christoforosioannidis.com"
  const lastModified = new Date()
  const routes = ["", "/publications", "/conferences", "/teaching", "/qualifications", "/media"]
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }))
}
