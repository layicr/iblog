# layicr 博客

[English](README_en.md) | 简体中文

网址：[http://b.lyc.la](http://b.lyc.la)

个人博客网站，基于 Hexo + NexT 主题构建。

## 技术栈

| 组件 | 版本 |
|------|------|
| Hexo | 8.1.1 |
| NexT | 8.27.0 |
| Node.js | 18+ |

## 功能特性

- 📝 文章管理 - 支持 Markdown 写作
- 🏷️ 标签分类 - 文章标签与分类系统
- 🔍 站内搜索 - 本地搜索功能
- 📡 RSS 订阅 - Atom 格式订阅支持
- 🗺️ SEO 优化 - Sitemap + 百度 Sitemap
- 🎨 自定义样式 - 通过 `source/_data/styles.styl` 自定义
- 💰 打赏功能 - 微信/支付宝二维码
- 📱 响应式设计 - 适配移动端
- 📊 数据可视化 - 支持流程图、时序图、Mermaid 图表
- 📅 日历功能 - 文章发布日历
- 📄 PDF 预览 - 支持 PDF 文件嵌入
- 📈 字数统计 - 文章字数和阅读时间统计

## 目录结构

```
iblog/
├── _config.yml          # Hexo 主配置
├── _config.next.yml     # NexT 主题配置
├── package.json         # 依赖管理
├── gulpfile.js          # 构建优化
├── source/              # 源文件
│   ├── _posts/          # 文章目录
│   ├── about/           # 关于页面
│   ├── links/           # 友链页面
│   ├── ad/              # 广告页面
│   ├── yearcity/        # 行者页面
│   ├── images/          # 图片资源
│   └── _data/           # 自定义数据
│       └── styles.styl  # 自定义样式
├── themes/              # 主题目录
│   └── next/            # NexT 主题
└── scaffolds/           # 文章模板
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
hexo clean
hexo generate
hexo server
```

访问 http://localhost:4000

### 创建文章

```bash
hexo new "文章标题"
```

### 构建部署

```bash
hexo clean
hexo generate
hexo deploy
```

## 配置说明

### 主要配置文件

| 文件 | 说明 |
|------|------|
| `_config.yml` | Hexo 核心配置（站点信息、URL、分页等） |
| `_config.next.yml` | NexT 主题配置（菜单、侧边栏、社交链接等） |
| `source/_data/styles.styl` | 自定义 CSS 样式 |


## 插件列表

| 插件 | 功能 |
|------|------|
| hexo-generator-feed | RSS 订阅 |
| hexo-generator-sitemap | 网站地图 |
| hexo-generator-baidu-sitemap | 百度网站地图 |
| hexo-generator-searchdb | 本地搜索 |
| hexo-symbols-count-time | 字数统计 |
| hexo-neat | 代码压缩 |
| hexo-filter-flowchart | 流程图支持 |
| hexo-filter-sequence | 时序图支持 |
| hexo-filter-mermaid-diagrams | Mermaid 图表支持 |
| hexo-generator-calendar | 文章日历 |
| hexo-pdf | PDF 预览 |
| hexo-word-counter | 字数统计 |
| hexo-generator-topindex | 置顶文章 |
| gulp | 构建工具 |
| gulp-clean-css | CSS 压缩 |
| gulp-htmlclean | HTML 清理 |
| gulp-htmlmin | HTML 压缩 |
| gulp-uglify | JS 压缩 |