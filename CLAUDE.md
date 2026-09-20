# Maitask Docs Rules

Read workspace `AGENTS.md` first. This file adds documentation-site constraints.

- Document implemented behavior only.
- Keep architecture, adapter, workflow, and operations pages aligned with the
  current Plane, Frontend, Runtime, and package contracts.
- Remove stale roadmaps, one-off audit snapshots, and version claims that are
  not continuously verified.

## Git

Follow workspace `AGENTS.md`.

## Quality Gates

Run from `docs/`:

```bash
npm run typecheck
npm run build
```
