# Maitask Platform Overview

Maitask is a modular automation platform. Teams can design, execute, and monitor complex workflows within minutes while retaining enterprise-grade governance and AI capabilities.

## Core Components

| Component | Repository | Description |
|-----------|------------|-------------|
| Engine | [maitask/engine](https://github.com/maitask/engine) | High-performance execution runtime (Rust + Deno Core) that exposes REST and CLI interfaces, enforces package sandboxing, and governs resources. |
| Registry | [maitask/registry](https://github.com/maitask/registry) | Package registry and distribution service that delivers publishing workflows, search, and storage backends. |
| Maitask | [maitask/maitask](https://github.com/maitask/maitask) | Web interface for operators to monitor resources, manage packages, and trigger executions. |
| Desktop | [maitask/desktop](https://github.com/maitask/desktop) | Cross-platform desktop client (Tauri + Next.js) that enables local orchestration and offline execution. |
| Packages | [maitask/packages](https://github.com/maitask/packages) | Official package collection covering AI, data processing, automation, and integration scenarios. |
| Examples | [maitask/examples](https://github.com/maitask/examples) | Reference workflows, sample data, and walkthroughs illustrating best practices. |

## Key Capabilities

- **Workflow Engine** – Deterministic job scheduling, concurrency controls, streaming outputs, and observability hooks.
- **AI Integration** – Native support for GPT-5, Claude Sonnet, Gemini 2.5 Pro, DeepSeek, and local Ollama deployments.
- **Package Ecosystem** – More than thirty official packages across AI, data processing, communications, and developer tooling, published through the registry.
- **Security & Governance** – Authentication via JWT or API keys, package signing, rate limiting, audit logs, and configurable storage backends.
- **Developer Experience** – Consistent CLI and HTTP APIs, TypeScript-focused package development, and automated documentation tooling.

## Installation Blueprint

1. **Deploy the engine** (Kubernetes or bare-metal) and expose the REST API.
2. **Provision the registry**, ensuring PostgreSQL, Redis, and object storage (S3-compatible or local filesystem) are available.
3. **Publish official packages** from the `maitask` registry account.
4. **Deploy the Maitask application** (Next.js) behind your preferred reverse proxy.
5. **Optional**: distribute the desktop client to end users for local execution scenarios.

## Documentation Roadmap

- This repository (`maitask/docs`) hosts cross-project manuals, architecture diagrams, and operational guides.
- Component-specific READMEs remain in their respective repositories to mirror the codebase.
- Upcoming sections: deployment guides, package authoring handbook, security hardening checklists, and integration patterns.

## Contact & Support

- Website: [https://maitask.com](https://maitask.com)
- Email: [team@maitask.com](mailto:team@maitask.com)
- Issues: Submit to the relevant component repository or aggregated backlog in `maitask/docs` (to be activated).

---

*This document reflects the current production architecture. Follow the linked repositories for release notes and component-specific changelogs.*
