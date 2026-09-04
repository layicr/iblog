# lyc.la Blog

English | [中文](README.md)

Personal blog built with Hugo static site generator and hugo-theme-next theme.

- Site: <http://b.lyc.la>

## Tech Stack

- **Hugo**: Static site generator (configured via `hugo.yaml`)
- **hugo-theme-next**: NexT theme (located at `themes/hugo-theme-next`)
- Multilingual: Simplified Chinese (default) / English
- Search: Local search (`/searchindexes.xml`)
- Analytics: Baidu Analytics
- Deployment: Vercel

## Directory Structure

```
.
├── archetypes/         # Article templates (front-matter defaults)
├── assets/            # Assets (processed by Hugo Pipes)
├── content/           # Site content
│   ├── zh-cn/         # Chinese content
│   └── en/            # English content
├── data/              # Data files
├── i18n/              # Internationalization translations
├── layouts/           # Custom layout overrides
├── static/            # Static assets (images, CSS, etc., unprocessed)
├── themes/            # Theme (hugo-theme-next)
├── public/            # Build output (generated static site)
├── resources/         # Hugo build cache
└── hugo.yaml          # Main site configuration
```

## Requirements

- Hugo Extended (latest version recommended, theme requires SCSS/PostCSS)

## Local Preview

```bash
# Start local dev server (default http://localhost:1313)
hugo server -D

# Build site only (output to public/)
hugo
```

## Writing

Create a new post (using default template):

```bash
# Chinese
hugo new zh-cn/posts/your-title.md

# English
hugo new en/posts/your-title.md
```

Front-matter example:

```markdown
---
title: "Post Title"
date: 2026-09-03T12:00:00+08:00
categories: ["Category"]
tags: ["tag1", "tag2"]
---
```

> URL structure follows the original Hexo format: `/year/month/title/` (see `permalinks` in `hugo.yaml`).
