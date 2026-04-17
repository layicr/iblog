# layicr Blog

[中文](README.md) | English

Website: [http://b.lyc.la](http://b.lyc.la)

Personal blog website built with Hexo + NexT theme.

## Tech Stack

| Component | Version |
|-----------|---------|
| Hexo      | 8.1.1   |
| NexT      | 8.27.0  |
| Node.js   | 18+     |

## Features

- 📝 Article Management - Markdown support
- 🏷️ Tag & Category System - Article tagging and categorization
- 🔍 Site Search - Local search functionality
- 📡 RSS Subscription - Atom format support
- 🗺️ SEO Optimization - Sitemap + Baidu Sitemap
- 🎨 Custom Styling - Customize via `source/_data/styles.styl`
- 💰 Donation Feature - WeChat/Alipay QR codes
- 📱 Responsive Design - Mobile-friendly
- 📊 Data Visualization - Support for flowcharts, sequence diagrams, Mermaid charts
- 📅 Calendar Feature - Article publication calendar
- 📄 PDF Preview - PDF file embedding support
- 📈 Word Count - Article word count and reading time statistics

## Directory Structure

```
iblog/
├── _config.yml          # Hexo main configuration
├── _config.next.yml     # NexT theme configuration
├── package.json         # Dependency management
├── gulpfile.js          # Build optimization
├── source/              # Source files
│   ├── _posts/          # Article directory
│   ├── about/           # About page
│   ├── links/           # Links page
│   ├── ad/              # Advertising page
│   ├── yearcity/        # Traveler page
│   ├── images/          # Image resources
│   └── _data/           # Custom data
│       └── styles.styl  # Custom CSS styles
├── themes/              # Theme directory
│   └── next/            # NexT theme
└── scaffolds/           # Article templates
```

## Quick Start

### Install Dependencies

```bash
npm install
```

### Local Preview

```bash
hexo clean
hexo generate
hexo server
```

Visit http://localhost:4000

### Create Article

```bash
hexo new "Article Title"
```

### Build & Deploy

```bash
hexo clean
hexo generate
hexo deploy
```

## Configuration

### Main Configuration Files

| File | Description |
|------|-------------|
| `_config.yml` | Hexo core configuration (site info, URL, pagination, etc.) |
| `_config.next.yml` | NexT theme configuration (menu, sidebar, social links, etc.) |
| `source/_data/styles.styl` | Custom CSS styles |

## Plugin List

| Plugin | Function |
|--------|----------|
| hexo-generator-feed | RSS subscription |
| hexo-generator-sitemap | Sitemap |
| hexo-generator-baidu-sitemap | Baidu sitemap |
| hexo-generator-searchdb | Local search |
| hexo-symbols-count-time | Word count |
| hexo-neat | Code compression |
| hexo-filter-flowchart | Flowchart support |
| hexo-filter-sequence | Sequence diagram support |
| hexo-filter-mermaid-diagrams | Mermaid chart support |
| hexo-generator-calendar | Article calendar |
| hexo-pdf | PDF preview |
| hexo-word-counter | Word count |
| hexo-generator-topindex | Top articles |
| gulp | Build tool |
| gulp-clean-css | CSS compression |
| gulp-htmlclean | HTML cleaning |
| gulp-htmlmin | HTML compression |
| gulp-uglify | JS compression |