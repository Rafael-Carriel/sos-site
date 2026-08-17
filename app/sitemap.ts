import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://sospneus-c5925.web.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
