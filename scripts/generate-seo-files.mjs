import { writeFileSync } from "fs";
import { join } from "path";

const siteUrl = (
  process.env.URL ||
  process.env.SITE_URL ||
  "https://joel-henry-yellamelli.netlify.app"
).replace(/\/$/, "");

const lastmod = new Date().toISOString().split("T")[0];
const outDir = process.argv[2] || "dist";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(outDir, "sitemap.xml"), sitemap);
writeFileSync(join(outDir, "robots.txt"), robots);

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
