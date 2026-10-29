# OrbitOS Agent Skills

Reusable agent skills for Chinese knowledge workers, creators, and Obsidian-based personal operating systems.

[![Validate Skills](https://github.com/1484324055-ops/orbitos-agent-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/1484324055-ops/orbitos-agent-skills/actions/workflows/validate.yml)
[![Release](https://img.shields.io/github/v/release/1484324055-ops/orbitos-agent-skills)](https://github.com/1484324055-ops/orbitos-agent-skills/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

This repository contains a small, privacy-safe set of original skills extracted from the OrbitOS workflow. The goal is to turn repeatable AI-assisted work into portable skills that can be used by agents such as Codex, Claude Code, OpenCode, and other `SKILL.md` compatible tools.

## Why This Exists

Most agent workflows are still written as one-off prompts. OrbitOS Agent Skills packages three workflows as reusable open-source skills:

- **Saodust**: health check for Obsidian knowledge bases.
- **Write**: structured Chinese long-form content workflow.
- **Four Platform Daily Content**: adapt one idea into WeChat, Xiaohongshu, X, and Douyin drafts.

These skills are written for real daily work, not demo prompts. They emphasize traceability, source separation, privacy boundaries, and concrete output formats.

## Skills

| Skill | Purpose | Best For |
| --- | --- | --- |
| [`saodust`](skills/saodust/) | Scan an Obsidian vault for entropy and produce a health report | Knowledge base maintenance |
| [`write`](skills/write/) | Turn a rough idea into a structured Chinese article draft | Long-form writing |
| [`four-platform-daily-content`](skills/four-platform-daily-content/) | Adapt one source into four platform-specific drafts | Daily content distribution |

## Installation

New here? Follow the text-only [Quickstart](QUICKSTART.md) — it takes you from clone to a first safe run.

Clone the repository and copy the skill folders into your agent's skills directory.

```bash
git clone https://github.com/1484324055-ops/orbitos-agent-skills.git
```

Example layout:

```text
~/.codex/skills/
  saodust/
    SKILL.md
  write/
    SKILL.md
  four-platform-daily-content/
    SKILL.md
```

## Usage Examples

```text
/saodust --dry-run
```

```text
Use the write skill to turn this idea into a public WeChat article draft.
```

```text
Turn this note into WeChat, Xiaohongshu, X, and Douyin versions.
```

See [`examples/`](examples/) for complete examples.

For English-speaking contributors, see [`examples/english-quickstart.md`](examples/english-quickstart.md).

## Design Principles

- **Privacy first**: the public skills do not include private vault paths, customer data, or personal voice corpora.
- **Source separation**: user words, external references, and AI synthesis stay separate.
- **Agent portability**: skills avoid platform-specific tool assumptions where possible.
- **Chinese-first workflows**: outputs are optimized for Chinese content platforms and Obsidian users.
- **Maintainable instructions**: every skill has a clear trigger, workflow, output shape, and quality checklist.

See [`docs/design-principles.md`](docs/design-principles.md) for details.

## Compatibility

These skills are plain Markdown `SKILL.md` files. They are intended to work with agent systems that support local skills or instruction bundles.

See [`docs/compatibility.md`](docs/compatibility.md).

## Project Metadata

The repository includes a lightweight [`skill-manifest.json`](skill-manifest.json) so agents and tooling can discover the public skills without parsing the full README.

## Security And Privacy

Security and privacy notes are documented in:

- [`docs/security-review.md`](docs/security-review.md)
- [`docs/privacy.md`](docs/privacy.md)
- [`SECURITY.md`](SECURITY.md)

## Maintenance

See [`docs/maintenance-plan.md`](docs/maintenance-plan.md) and [`docs/starter-issues.md`](docs/starter-issues.md) for current maintenance priorities.

For Codex-style maintenance workflows, see [`docs/codex-usage.md`](docs/codex-usage.md).

## License

MIT. See [`LICENSE`](LICENSE).

## Attribution And Boundaries

This repository only bundles original or rewritten OrbitOS skills. Third-party skills and private workflow references are not included. See [`NOTICE.md`](NOTICE.md).
