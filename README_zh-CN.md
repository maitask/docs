# Maitask 平台总览

Maitask 是一套模块化的自动化平台，帮助团队在数分钟内构建、执行并监控复杂流程，同时保持企业级治理与 AI 能力。

## 核心组件

| 组件 | 仓库 | 说明 |
|------|------|------|
| Engine | [maitask/engine](https://github.com/maitask/engine) | 高性能执行引擎（Rust + Deno Core），提供 REST/CLI 接口、包沙箱与资源管理。 |
| Plane | [maitask/plane](https://github.com/maitask/plane) | 控制面 API，负责包管理、认证、Credits 与 Engine 聚合。 |
| Frontend | [maitask/plane-frontend](https://github.com/maitask/plane-frontend) | 面向运维与开发的 Web 界面，负责监控资源、管理包、触发执行。 |
| Desktop | [maitask/desktop](https://github.com/maitask/desktop) | 跨平台桌面客户端（Tauri + Vite.js），实现本地编排和离线执行。 |
| Packages | [maitask/packages](https://github.com/maitask/packages) | 官方包集合，涵盖 AI、数据处理、自动化与集成场景。 |
| Examples | [maitask/examples](https://github.com/maitask/examples) | 参考工作流、示例数据和最佳实践演示。 |

## 核心能力

- **工作流引擎**：可配置调度、并发控制、流式输出、可观测性钩子。
- **AI 集成**：原生支持 GPT-5、Claude Sonnet、Gemini 2.5 Pro、DeepSeek 以及本地 Ollama。
- **包生态**：30+ 官方包，涵盖 AI、数据处理、通信、开发者工具，由注册表集中发布。
- **安全与治理**：JWT/API Key 认证、包签名、速率限制、审计日志、可配置存储后端。
- **开发体验**：CLI 与 HTTP API 协同、TypeScript 优先的包开发流程、自动化文档工具链。

## 部署蓝图

1. **部署 Engine**（Kubernetes 或裸机），暴露 REST API。
2. **部署 Plane 服务**，配置 PostgreSQL、Redis 与对象存储（S3 兼容或本地文件系统）。
3. **发布官方包**，使用 `maitask` 账号在注册表完成发布。
4. **部署 Plane Frontend 应用**（Vite.js），可结合反向代理暴露给内部用户。
5. **可选**：向终端用户分发 Desktop 客户端，实现本地执行场景。

## 文档规划

- 本仓库负责汇总跨组件的手册、架构图与运维指南。
- 各组件的 README 仍保留在对应仓库，以便与源码同步。
- 后续将补充：部署手册、包制作指南、安全加固检查清单、集成模式案例等。

## 联系方式

- 官网：[https://maitask.com](https://maitask.com)
- 邮箱：[team@maitask.com](mailto:team@maitask.com)
- 反馈：可在对应组件仓库提交 Issue，或在 `maitask/docs` 收集（规划中）。

---

*本文档反映当前生产架构。有关新的发布与更新，请关注各组件仓库。*
