---
title: 友情链接
date: 2008-08-08 08:08:08
comments: false
lang: zh-CN
---

<div class="links-container">
  <div class="links-intro">
    <p>"山水一程，三生有幸"</p>
    <p class="links-subtitle"></p>
    <p class="links-en">"A journey together, a lifetime of fortune"</p>
    <p class="links-subtitle-en"></p>
  </div>
  
  <div class="links-list" id="links-list"></div>
</div>

<script>
var linksData = [
  { name: 'lyc.la', url: 'http://www.lyc.la', avatar: '/images/logo.png', desc: 'lyc.la网站' },
  { name: 'hi lyc', url: 'http://hi.lyc.la', avatar: '/images/logo.png', desc: 'hi.lyc.la网站' },
  { name: 'ilive lyc', url: 'http://ilive.lyc.la', avatar: '/images/logo.png', desc: '演唱会足迹' },
  { name: 'iblog lyc', url: 'http://b.lyc.la', avatar: '/images/logo.png', desc: 'lyc 博客' },
  { name: 'Github', url: 'http://github.com/layicr', avatar: '/images/links/github.jpg', desc: '一个Github' },
  { name: 'Weibo', url: 'http://weibo.com/layicr', avatar: '/images/links/weibo.jpg', desc: '一个微博' },
  { name: 'Weixin', url: 'https://mp.weixin.qq.com/s/S1sq45LC_iQuCLYxzoaRkw', avatar: '/images/links/weixin.jpg', desc: '一个微信' },
  { name: 'Douyin', url: 'http://v.douyin.com/5nAiAZQoUXw/', avatar: '/images/links/douyin.jpg', desc: '一个抖音' },
  { name: 'Douban', url: 'http://www.douban.com/people/layicr', avatar: '/images/links/douban.jpg', desc: '一个豆瓣' },
  { name: 'Lofter', url: 'http://ilayicr.lofter.com', avatar: '/images/links/lofter.jpg', desc: '一个乐乎' },
  { name: 'Tuchong', url: 'http://ilyc.tuchong.com', avatar: '/images/links/tuchong.jpg', desc: '一个图虫' },
  { name: 'Twitter', url: 'http://twitter.com/layicr', avatar: '/images/links/twitter.jpg', desc: '一个推特' },
  { name: 'Facebook', url: 'http://www.facebook.com/layicr', avatar: '/images/links/facebook.jpg', desc: '一个脸书' },
  { name: 'Instagram', url: 'http://instagram.com/ilayicr', avatar: '/images/links/instagram.jpg', desc: '一个Ins' },
  { name: 'VK', url: 'http://vk.com/layicr', avatar: '/images/links/vk.jpg', desc: '一个VK' },
  { name: 'YouTube', url: 'http://youtube.com/@lyc9530', avatar: '/images/links/youtube.gif', desc: '一个YouTube' }
];

(function() {
  var container = document.getElementById('links-list');
  var html = '';
  
  linksData.forEach(function(link) {
    html += '<a class="link-item" href="' + link.url + '" title="' + link.name + '" rel="external nofollow" target="_blank">' +
      '<div class="link-card">' +
        '<img class="link-avatar" src="' + link.avatar + '" alt="' + link.name + '">' +
        '<div class="link-info">' +
          '<h3 class="link-title">' + link.name + '</h3>' +
          '<p class="link-description">' + link.desc + '</p>' +
        '</div>' +
      '</div>' +
    '</a>';
  });
  
  container.innerHTML = html;
})();
</script>

<style>
.links-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.links-intro {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 20px;
}

.links-intro p {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #333;
}

.links-intro .links-subtitle {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #888;
}

.links-intro .links-en {
  margin-top: 20px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #666;
}

.links-intro .links-subtitle-en {
  margin-top: 8px;
  font-size: 1rem;
  color: #888;
}

.links-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.link-item {
  text-decoration: none;
  color: inherit;
}

.link-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.link-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid #f5f5f5;
  transition: all 0.4s ease;
}

.link-card:hover .link-avatar {
  transform: rotate(360deg) scale(1.1);
  border-color: #667eea;
}

.link-info {
  flex: 1;
  min-width: 0;
}

.link-title {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link-description {
  margin: 0;
  font-size: 0.85rem;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 768px) {
  .links-list {
    grid-template-columns: 1fr;
  }
  
  .links-intro p {
    font-size: 1.2rem;
  }
  
  .link-card {
    padding: 20px 15px;
  }
  
  .link-avatar {
    width: 60px;
    height: 60px;
  }
}
</style>
