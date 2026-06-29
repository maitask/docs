# Maitask 文档站

本仓库为 Maitask 官方文档站，基于 Nextra 构建。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run start
```

## 目录说明

- `app/`：文档页面与导航元数据
- `app/layout.tsx`：Nextra 站点布局
- `theme.config.tsx`：主题与站点配置

## 编写规则

- 只记录已经真实实现并验证过的行为，不把计划项写成已完成能力。
- 优先维护稳定的架构与运维说明，不维护易过期的行数、版本状态或路线图承诺。
- 提交 message/body 使用简洁、正式且符合代码改动内容的英文。除非工具强制要求，不使用 `fix:`、`feat:` 或其它 Conventional Commit 前缀。
