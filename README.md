# Maitask Docs

This repository hosts the official Maitask documentation site built with Nextra.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Documentation Structure

- `app/`: documentation pages and navigation metadata
- `app/layout.tsx`: Nextra docs layout
- `theme.config.tsx`: theme and site configuration

## Writing Rules

- Document implemented behavior only; do not describe planned work as complete.
- Prefer stable architecture and operation guidance over line counts, stale version claims, or roadmap status.
- Keep commit message subjects and bodies concise, formal, and in English. Do not use `fix:`, `feat:`, or other Conventional Commit prefixes unless tooling requires them.
