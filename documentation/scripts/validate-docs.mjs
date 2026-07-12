import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = join(root, "docs");
const versionedDocsDir = join(root, "versioned_docs", "version-0.1.0-draft");
const buildDir = join(root, "build");

const docPaths = [
  "overview/introduction",
  "overview/architecture",
  "overview/quick-start",
  "overview/safety",
  "hardware/zeno-core",
  "hardware/zeno-link",
  "hardware/power-system",
  "hardware/jetson-orin-nano",
  "hardware/stm32f767",
  "hardware/camera-interfaces",
  "hardware/can",
  "hardware/rs-485",
  "hardware/manufacturing",
  "firmware/boot-sequence",
  "firmware/power-management",
  "firmware/drivers",
  "firmware/motor-control",
  "firmware/servo-control",
  "software/ros-2",
  "software/sdk",
  "software/apis",
  "software/brain",
  "software/cerebellum",
  "simulation/isaac-lab",
  "simulation/mujoco",
  "simulation/gazebo",
  "simulation/lerobot",
  "platforms/zeno-humanoid",
  "platforms/zeno-marine",
  "community/contributing",
  "community/code-of-conduct",
  "community/governance",
  "community/security",
  "community/release-process",
];

const failures = [];

function fail(message) {
  failures.push(message);
}

for (const docPath of docPaths) {
  const current = join(docsDir, `${docPath}.md`);
  const versioned = join(versionedDocsDir, `${docPath}.md`);
  const currentOutput = join(buildDir, "docs", "next", docPath, "index.html");
  const versionedOutput = join(buildDir, "docs", docPath, "index.html");

  for (const [label, file] of [
    ["current source", current],
    ["versioned source", versioned],
    ["current output", currentOutput],
    ["versioned output", versionedOutput],
  ]) {
    if (!existsSync(file)) {
      fail(`missing ${label}: ${docPath}`);
    }
  }

  if (existsSync(current) && !readFileSync(current, "utf8").includes("Draft / TBD")) {
    fail(`current document is missing Draft / TBD marker: ${docPath}`);
  }
}

for (const file of [
  "versions.json",
  "versioned_sidebars/version-0.1.0-draft-sidebars.json",
  "build/index.html",
  "build/search/index.html",
  "build/sitemap.xml",
  "build/robots.txt",
]) {
  if (!existsSync(join(root, file))) {
    fail(`missing versioning or static output file: ${file}`);
  }
}

const versionsPath = join(root, "versions.json");
if (existsSync(versionsPath) && !JSON.parse(readFileSync(versionsPath, "utf8")).includes("0.1.0-draft")) {
  fail("versions.json is missing the 0.1.0-draft snapshot");
}

const configPath = join(root, "docusaurus.config.ts");
if (existsSync(configPath)) {
  const config = readFileSync(configPath, "utf8");
  if (!config.includes('status: "reserved"')) fail("search reserve is not configured");
  if (!config.includes('reserved: ["zh-CN"]')) fail("zh-CN locale reserve is not configured");
}

const unsafeParameterPattern = /\b\d+(?:\.\d+)?\s?(?:V|A|Hz|kHz|MHz|GHz|Mbps|Gbps|baud|mm)\b/;
for (const docPath of docPaths.filter((path) => path.startsWith("hardware/") || path.startsWith("firmware/"))) {
  const file = join(docsDir, `${docPath}.md`);
  if (existsSync(file) && unsafeParameterPattern.test(readFileSync(file, "utf8"))) {
    fail(`hardware or firmware draft contains an unreviewed numeric parameter: ${docPath}`);
  }
}

const sitemapPath = join(buildDir, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  if (!sitemap.includes("https://docs.zeno-ai.org/docs/overview/introduction")) {
    fail("sitemap is missing the versioned introduction route");
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exit(1);
}

console.log(`Documentation checks passed for ${docPaths.length} current and versioned pages.`);
