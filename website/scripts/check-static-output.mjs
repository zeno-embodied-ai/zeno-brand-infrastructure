import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "out");

const routes = [
  "",
  "platform",
  "hardware",
  "software",
  "humanoid",
  "marine",
  "research",
  "education",
  "documentation",
  "community",
  "roadmap",
  "about",
  "contact",
  "security",
];

const failures = [];

function fail(message) {
  failures.push(message);
}

function routeFile(route) {
  return route === "" ? join(output, "index.html") : join(output, route, "index.html");
}

for (const route of routes) {
  const file = routeFile(route);
  if (!existsSync(file)) {
    fail(`missing static route: /${route}`);
    continue;
  }

  const html = readFileSync(file, "utf8");
  if (!html.includes('<meta name="description"')) {
    fail(`missing description metadata: /${route}`);
  }
  if (!html.includes('property="og:title"')) {
    fail(`missing Open Graph metadata: /${route}`);
  }
  if (!html.includes('rel="canonical"')) {
    fail(`missing canonical URL: /${route}`);
  }
  if (!html.includes('id="main-content"')) {
    fail(`missing main content landmark: /${route}`);
  }
}

const requiredOutputFiles = [
  "404.html",
  "manifest.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "icon.svg",
  "og/zeno-og-placeholder.svg",
];

for (const file of requiredOutputFiles) {
  if (!existsSync(join(output, file))) {
    fail(`missing static output file: ${file}`);
  }
}

if (existsSync(routeFile(""))) {
  const home = readFileSync(routeFile(""), "utf8");
  const homeRequirements = [
    "Zeno is a full-stack open-source embodied intelligence platform for education,",
    "Zeno Core",
    "Zeno Link",
    "Zeno Brain",
    "Zeno Cerebellum",
    "Zeno Humanoid",
    "Zeno Marine",
    "GitHub",
    "Documentation",
    "Join the community",
  ];

  for (const requirement of homeRequirements) {
    if (!home.includes(requirement)) {
      fail(`homepage is missing required content: ${requirement}`);
    }
  }
}

if (existsSync(join(output, "sitemap.xml"))) {
  const sitemap = readFileSync(join(output, "sitemap.xml"), "utf8");
  for (const route of routes) {
    const expected = route === "" ? "https://zeno-ai.org/" : `https://zeno-ai.org/${route}/`;
    if (!sitemap.includes(`<loc>${expected}</loc>`)) {
      fail(`sitemap is missing route: ${expected}`);
    }
  }
}

if (existsSync(join(output, "robots.txt"))) {
  const robots = readFileSync(join(output, "robots.txt"), "utf8");
  if (!robots.includes("Sitemap: https://zeno-ai.org/sitemap.xml")) {
    fail("robots.txt is missing the production sitemap URL");
  }
}

for (const route of routes) {
  const file = routeFile(route);
  if (!existsSync(file)) continue;
  const html = readFileSync(file, "utf8");
  const hrefs = [...html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)].map((match) => match[1]);

  for (const href of hrefs) {
    if (href.startsWith("/_next/") || href.startsWith("/og/") || href === "/icon.svg") continue;
    if (href === "/manifest.webmanifest") continue;

    const target = href === "/" ? routeFile("") : join(output, href, "index.html");
    if (!existsSync(target)) {
      fail(`broken internal link on /${route}: ${href}`);
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`ERROR: ${failure}`);
  }
  process.exit(1);
}

console.log(`Static output checks passed for ${routes.length} public pages.`);
