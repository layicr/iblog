# lyc.la 博客

[English](README_en.md) | 中文

基于 Hugo 静态站点生成器，使用 hugo-theme-next 主题搭建的个人博客。

- 站点地址：<http://b.lyc.la>

## 技术栈

- **Hugo**：静态站点生成器（通过 `hugo.yaml` 配置）
- **hugo-theme-next**：NexT 主题（位于 `themes/hugo-theme-next`）
- 多语言支持：简体中文（默认）/ 英文
- 内容搜索：本地搜索（`/searchindexes.xml`）
- 统计组件：百度统计
- 部署平台：Vercel

## 目录结构

```
.
├── archetypes/         # 文章模板（front-matter 默认值）
├── assets/            # 资源文件（由 Hugo Pipes 处理）
├── content/           # 站点内容
│   ├── zh-cn/         # 中文内容
│   └── en/            # 英文内容
├── data/              # 数据文件
├── i18n/              # 国际化翻译
├── layouts/           # 自定义布局覆盖
├── static/            # 静态资源（图片、CSS 等，不经过处理）
├── themes/            # 主题（hugo-theme-next）
├── public/            # 构建产物（生成的静态站点，可忽略/部署用）
├── resources/         # Hugo 构建缓存
└── hugo.yaml          # 站点主配置文件
```

## 环境要求

- Hugo Extended 版本（建议使用最新版，主题依赖 SCSS/PostCSS）

## 本地预览

```bash
# 启动本地开发服务器（默认 http://localhost:1313）
hugo server -D

# 仅构建站点（输出到 public/）
hugo
```

## 写作

新建文章（使用默认模板）：

```bash
# 中文
hugo new zh-cn/posts/your-title.md

# 英文
hugo new en/posts/your-title.md
```

文章 front-matter 示例：

```markdown
---
title: "文章标题"
date: 2026-09-03T12:00:00+08:00
categories: ["分类名"]
tags: ["标签1", "标签2"]
---
```

> URL 规则沿用原 Hexo 结构：`/年/月/标题/`（见 `hugo.yaml` 中的 `permalinks` 配置）。


