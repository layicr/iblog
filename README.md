# layicr 博客



网址：[http://b.lyc.la](http://b.lyc.la)

个人博客网站，基于 Hexo + NexT 主题构建。

## 技术栈

| 组件 | 版本 |
|------|------|
| Hexo | 8.1.1 |
| NexT | 8.27.0 |
| Node.js | 18+ (推荐 20.x 或 22.x LTS) |

## 功能特性

- 📝 文章管理 - 支持 Markdown 写作
- 🏷️ 标签分类 - 文章标签与分类系统
- 🔍 站内搜索 - 本地搜索功能
- 📡 RSS 订阅 - Atom 格式订阅支持
- 🗺️ SEO 优化 - Sitemap + 百度 Sitemap
- 🎨 自定义样式 - 通过 `source/_data/styles.styl` 自定义
- 💰 打赏功能 - 微信/支付宝二维码
- 📱 响应式设计 - 适配移动端

## 目录结构

```
blog_www/
├── _config.yml          # Hexo 主配置
├── _config.next.yml     # NexT 主题配置
├── package.json         # 依赖管理
├── gulpfile.js          # 构建优化
├── source/              # 源文件
│   ├── _posts/          # 文章目录
│   ├── about/           # 关于页面
│   ├── links/           # 友链页面
│   ├── ad/              # 广告页面
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