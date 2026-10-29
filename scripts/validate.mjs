import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const manifestPath = path.join(root, "skill-manifest.json");
const requiredFiles = ["README.md", "LICENSE", "CONTRIBUTING.md", "CHANGELOG.md", "NOTICE.md", "SECURITY.md"];

let failed = false;

function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`OK   ${message}`);
}

function validateManifestEntry(entry) {
  const requiredFields = ["id", "name", "path", "category", "language", "riskLevel", "summary"];

  for (const field of requiredFields) {
    if (typeof entry[field] !== "string" || entry[field].trim() === "") {
      fail(`manifest entry ${entry.id ?? "(missing id)"} needs ${field}`);
    }
  }

  if (entry.language && entry.language !== "zh-CN") {
    fail(`manifest entry ${entry.id} has unsupported language: ${entry.language}`);
  }

  if (entry.riskLevel && !["low", "medium", "high"].includes(entry.riskLevel)) {
    fail(`manifest entry ${entry.id} has unsupported riskLevel: ${entry.riskLevel}`);
  }
}

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  fs.existsSync(fullPath) ? pass(`${file} exists`) : fail(`${file} is missing`);
}

let manifest = null;
if (!fs.existsSync(manifestPath)) {
  fail("skill-manifest.json is missing");
} else {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    pass("skill-manifest.json is valid JSON");
    if (!Array.isArray(manifest.skills) || manifest.skills.length === 0) {
      fail("skill-manifest.json must include a non-empty skills array");
    } else {
      for (const entry of manifest.skills) {
        validateManifestEntry(entry);
      }
      pass("skill-manifest.json entries include required fields");
    }
  } catch (error) {
    fail(`skill-manifest.json is invalid JSON: ${error.message}`);
  }
}

if (!fs.existsSync(skillsDir)) {
  fail("skills directory is missing");
} else {
  const skills = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  if (skills.length === 0) fail("no skills found");

  for (const skill of skills) {
    const skillPath = path.join(skillsDir, skill.name);
    const skillFile = path.join(skillPath, "SKILL.md");
    const readmeFile = path.join(skillPath, "README.md");

    if (!fs.existsSync(skillFile)) {
      fail(`${skill.name}/SKILL.md is missing`);
      continue;
    }

    const content = fs.readFileSync(skillFile, "utf8");
    if (!content.startsWith("---\n")) fail(`${skill.name}/SKILL.md must start with YAML frontmatter`);
    if (!/^name:\s*.+$/m.test(content)) fail(`${skill.name}/SKILL.md frontmatter needs name`);
    if (!/^description:\s*.+$/m.test(content)) fail(`${skill.name}/SKILL.md frontmatter needs description`);
    if (!content.includes("## Workflow")) fail(`${skill.name}/SKILL.md should include a Workflow section`);
    if (!content.includes("## Output")) fail(`${skill.name}/SKILL.md should include an Output section`);
    fs.existsSync(readmeFile) ? pass(`${skill.name}/README.md exists`) : fail(`${skill.name}/README.md is missing`);

    if (manifest?.skills) {
      const item = manifest.skills.find((entry) => entry.id === skill.name);
      if (!item) {
        fail(`${skill.name} is missing from skill-manifest.json`);
      } else if (!fs.existsSync(path.join(root, item.path))) {
        fail(`${skill.name} manifest path does not exist: ${item.path}`);
      } else {
        pass(`${skill.name} manifest entry exists`);
      }
    }
  }
}

// --- Privacy checklist for examples (issue #6) ---
// Examples must stay fake. Scan every Markdown file under examples/ for
// obvious private-data patterns. tests/fixtures/dirty-example.md is a
// self-test: the scanner MUST flag every category in it.

const privacyPatterns = [
  { name: "Windows user path", re: /[A-Za-z]:\\Users\\[^\\\s"']+/ },
  { name: "Unix home path", re: /\/(?:home|Users)\/[A-Za-z0-9._-]+\// },
  { name: "API key / token shape", re: /(?:sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|gho_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|xox[baprs]-[A-Za-z0-9-]{10,})/ },
  { name: "Secret assignment", re: /(?:api[_-]?key|access[_-]?token|client[_-]?secret|password)\s*[:=]\s*["']?[A-Za-z0-9!@#$%^&*._-]{8,}/i },
  { name: "Email address", re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, allow: /@example\.(?:com|org|net)$/i },
  { name: "Phone number (CN mobile)", re: /(?<!\d)1[3-9]\d{9}(?!\d)/ },
];

function scanText(text) {
  const hits = [];
  for (const { name, re, allow } of privacyPatterns) {
    const flags = re.flags.includes("g") ? re.flags : re.flags + "g";
    for (const match of text.matchAll(new RegExp(re.source, flags))) {
      if (allow && allow.test(match[0])) continue;
      hits.push(name);
      break; // one hit per category per file is enough to report
    }
  }
  return hits;
}

function* walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMarkdown(full);
    else if (entry.isFile() && entry.name.endsWith(".md")) yield full;
  }
}

let exampleFiles = 0;
for (const file of walkMarkdown(path.join(root, "examples"))) {
  exampleFiles += 1;
  const hits = scanText(fs.readFileSync(file, "utf8"));
  if (hits.length > 0) {
    fail(`privacy: ${path.relative(root, file)} contains ${hits.join(", ")}`);
  }
}
pass(`privacy: scanned ${exampleFiles} example files`);

const dirtyFixture = path.join(root, "tests", "fixtures", "dirty-example.md");
if (!fs.existsSync(dirtyFixture)) {
  fail("privacy self-test fixture is missing: tests/fixtures/dirty-example.md");
} else {
  const detected = scanText(fs.readFileSync(dirtyFixture, "utf8"));
  const expected = privacyPatterns.map((p) => p.name);
  const missing = expected.filter((name) => !detected.includes(name));
  if (missing.length > 0) {
    fail(`privacy self-test: scanner missed ${missing.join(", ")} in dirty fixture`);
  } else {
    pass("privacy self-test: dirty fixture fully detected");
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log("All checks passed.");
}
