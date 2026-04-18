---
title: 关于
date: 2008-08-08 08:08:08
type: "about"
comments: false
---

<div class="about-container">
  <div class="about-section">
    <h2 class="section-title"></h2>
    <div class="about-content">
      <div class="info-item">
        <span class="info-label">昵称</span>
        <span class="info-value">layicr</span>
      </div>
      <div class="info-item">
        <span class="info-label">标签</span>
        <span class="info-value">I'm a slash</span>
      </div>
      <div class="info-item">
        <span class="info-label">签名</span>
        <span class="info-value">这个时代，这个城市，好多再见，都会成为永别。</span>
      </div>
      <div class="info-quote">
        <p>「如果中了500W，第一件事情做什么？」</p>
        <p>『去南极。』</p>
        <p>「接着呢？」</p>
        <p>『等活着回来再说。』</p>
        <p>「。。。」</p>
      </div>
    </div>
  </div>

  <div class="about-copyright">
    <img src="/images/b_cc.png">
    <p>The <a href="/" target="_blank">Layicr</a> is licensed under a Creative Commons <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank">BY-NC-ND</a> International License.</p>
  </div>

  <div class="language-switch-link">
    <a href="/about_en/">
      <span style="font-size: 14px;">🌐</span>
      <span>English</span>
      <span style="font-size: 10px;">→</span>
    </a>
  </div>
</div>

<style>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
  display: inline-block;
  margin-bottom: 20px;
}

.about-content {
  padding: 10px 0;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
  align-items: flex-start;
}

.info-label {
  min-width: 100px;
  font-weight: 600;
  color: #667eea;
  font-size: 1.3rem;
}

.info-value {
  color: #555;
  font-size: 1.3rem;
  line-height: 1.6;
  margin-left: 20px;
}

.info-quote {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 20px 25px;
  border-radius: 10px;
  margin-top: 20px;
  border-left: 4px solid #667eea;
}

.info-quote p {
  margin: 8px 0;
  color: #666;
  font-size: 1.3rem;
  line-height: 1.8;
}

.about-copyright {
  text-align: center;
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.about-copyright p {
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-copyright a {
  color: #667eea;
  text-decoration: none;
}

.about-copyright a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .info-item {
    flex-direction: column;
  }
  
  .info-label {
    margin-bottom: 5px;
  }
  
  .info-quote {
    padding: 15px;
  }
}
</style>
