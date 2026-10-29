# Quickstart

A text-only guide: no screenshots, no private setup details. You can follow it end to end in a terminal.

## 1. Get the skills

```bash
git clone https://github.com/1484324055-ops/orbitos-agent-skills.git
cd orbitos-agent-skills
```

## 2. Install them into your agent

Copy the skill folders (keep each folder whole — `SKILL.md` and `README.md` travel together):

- **Codex-style agents**: copy `skills/*` into `~/.codex/skills/`
- **Claude Code-style agents**: copy `skills/*` into `~/.claude/skills/` (or a project's `.claude/skills/`)
- **Other SKILL.md runtimes**: copy `skills/*` into the skills directory your runtime documents

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
```

## 3. First run: a safe health check

Start with saodust because it is read-first and changes nothing. Copy the ready-made fake vault in `examples/fixtures/fake-vault/` (it has planted orphans, dead links, and inbox backlog) — or make a tiny throwaway vault of your own — then ask:

```text
Use the saodust skill to run a dry-run health check on this folder. Report a score, the top findings, and the three highest-value cleanup actions. Do not move, rename, or delete anything.
```

You should get a scored report that flags your planted dead link. The worked example in `examples/saodust-example.md` shows the expected shape.

## 4. Try the other two skills

Write (structured long-form drafting):

```text
Use the write skill to turn this rough idea into a Chinese article outline: "AI tools are getting better, but the real gap is still workflow design." Keep my original words separate from your synthesis.
```

Four Platform Daily Content (one idea, four platforms):

```text
Use the four-platform-daily-content skill to adapt this idea into WeChat, Xiaohongshu, X, and Douyin drafts: "Keep one source of truth for every recurring task."
```

More worked examples live in `examples/`, including an English quickstart (`examples/english-quickstart.md`).

## 5. If you plan to contribute

Run the repository checks before opening a pull request:

```bash
npm test
```

All examples in this repository use fake data only. Keep yours the same way: no real vault paths, no customer data, no keys or tokens.
