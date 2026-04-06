---
title: 广告合作
date: 2008-08-08 08:08:08
comments: false
lang: zh-CN
---

<div class="ad-container">
  <div class="ad-header">
    <h1></h1>
    <p class="ad-subtitle"></p>
    <p class="ad-desc">欢迎各类优质品牌、产品投放广告，共同创造价值</p>
    <p class="ad-desc-en">Welcome quality brands and products for advertising cooperation</p>
  </div>

  <div class="ad-positions">
    <h2 class="section-title">广告位</h2>
    <div class="position-list" id="position-list"></div>
  </div>

  <div class="ad-contact">
    <h2 class="section-title">联系方式</h2>
    <div class="contact-cards">
      <a class="contact-card" href="https://mp.weixin.qq.com/s/S1sq45LC_iQuCLYxzoaRkw" target="_blank" rel="external nofollow">
        <div class="contact-icon"><img src="/images/links/weixin.jpg" alt=""></div>
        <div class="contact-info">
          <h3>微信</h3>
          <p>点击查看公众号</p>
        </div>
      </a>
    </div>
  </div>
</div>

<script>
var adPositions = [
  { avatar: '/images/logo.png', url: 'http://www.lyc.la', name: 'lyc.la' },
  { avatar: '/images/logo.png', url: 'http://b.lyc.la', name: '博客' }
];

(function() {
  var container = document.getElementById('position-list');
  var html = '';
  
  adPositions.forEach(function(ad) {
    html += '<a class="position-card" href="' + ad.url + '" target="_blank" rel="external nofollow">' +
      '<img class="position-avatar" src="' + ad.avatar + '" alt="' + ad.name + '">' +
      '<div class="position-name">' + ad.name + '</div>' +
    '</a>';
  });
  
  container.innerHTML = html;
})();
</script>

<style>
.ad-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.ad-header {
  text-align: center;
  margin-bottom: 40px;
}

.ad-header h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px 0;
}

.ad-subtitle {
  font-size: 1.6rem;
  color: #888;
  margin: 0 0 15px 0;
}

.ad-desc {
  font-size: 1.5rem;
  color: #666;
  margin: 0;
}

.ad-desc-en {
  font-size: 1.5rem;
  color: #888;
  margin: 8px 0 0 0;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
  display: inline-block;
}

.ad-positions {
  margin-bottom: 50px;
}

.position-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.position-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.position-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.position-avatar {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.position-card:hover .position-avatar {
  transform: scale(1.1);
}

.position-name {
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
}

.ad-contact {
  margin-bottom: 50px;
}

.contact-cards {
  display: flex;
  justify-content: center;
}

.contact-card {
  background: #fff;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  border-color: #667eea;
}

.contact-icon {
  margin-bottom: 15px;
}

.contact-icon img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
}

.contact-info h3 {
  margin: 0 0 8px 0;
  font-size: 1rem;
  color: #333;
}

.contact-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #888;
}

@media screen and (max-width: 768px) {
  .ad-header h1 {
    font-size: 1.8rem;
  }
}
</style>
