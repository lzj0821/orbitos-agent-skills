# Compatibility

OrbitOS Agent Skills are plain Markdown instruction bundles.

## Tested/Targeted Agent Types

- Codex-style coding agents with local file access
- Claude Code-style local agents with skills support
- OpenCode/OpenClaw-style local agents
- Any agent runtime that can load `SKILL.md`

## Expected Skill Layout

```text
skills/
  skill-name/
    SKILL.md
    README.md
```

## Portability Notes

- The public skills avoid hard-coded private paths.
- Obsidian examples use generic folder names and should be adapted to the user's vault.
- Saodust assumes Markdown notes and Obsidian-style wikilinks.
- Writing skills can be used without Obsidian, but saved-draft sections are designed for Markdown.

## Windows Notes

Saodust can be implemented with PowerShell for filesystem metadata and mtime checks. When editing files on Windows, prefer safe native commands and avoid destructive shell pipelines.

## Claude Code Notes

These skills also load in Claude Code-style environments. The differences worth knowing:

- **Skill location**: copy each skill folder into `~/.claude/skills/` (personal, available in every project) or a project's `.claude/skills/` (shared with that project). The folder name becomes the skill's invocation name.
- **Frontmatter**: Claude Code reads the same `name` and `description` YAML frontmatter at the top of `SKILL.md`. No format changes are needed for the skills in this repo.
- **Invocation**: a skill can be invoked explicitly with `/<skill-name>`, or picked up automatically when the task matches its description. If a skill does not trigger, name it directly in your prompt.
- **File access**: Claude Code works from the current project directory by default. For vault-wide skills such as saodust, start the session at the vault root (or grant access to it) so relative paths and wikilink scans resolve correctly.
- **Everything else is unchanged**: workflow steps, output formats, and the privacy rules in each `SKILL.md` apply exactly as written.
