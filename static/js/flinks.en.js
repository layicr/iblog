var linksData = [
  { name: 'lyc.la', url: 'http://www.lyc.la', avatar: '/images/logo.png', desc: 'lyc.la website' },
  { name: 'app lyc', url: 'http://app.lyc.la', avatar: '/images/logo.png', desc: 'app.lyc.la website' },
  { name: 'ilive lyc', url: 'http://ilive.lyc.la', avatar: '/images/logo.png', desc: 'Concert Footprints' },
  { name: 'iblog lyc', url: 'http://b.lyc.la', avatar: '/images/logo.png', desc: 'lyc Blog' },
  { name: 'imovie lyc', url: 'http://imovie.lyc.la', avatar: '/images/logo.png', desc: 'lyc imovie' },
  { name: 'Github', url: 'http://github.com/layicr', avatar: '/images/links/github.jpg', desc: 'My GitHub' },
  { name: 'Weibo', url: 'http://weibo.com/layicr', avatar: '/images/links/weibo.jpg', desc: 'My Weibo' },
  { name: 'Weixin', url: 'https://mp.weixin.qq.com/s/S1sq45LC_iQuCLYxzoaRkw', avatar: '/images/links/weixin.jpg', desc: 'My WeChat' },
  { name: 'Douyin', url: 'http://v.douyin.com/5nAiAZQoUXw/', avatar: '/images/links/douyin.jpg', desc: 'My Douyin' },
  { name: 'Douban', url: 'http://www.douban.com/people/layicr', avatar: '/images/links/douban.jpg', desc: 'My Douban' },
  { name: 'Lofter', url: 'http://ilayicr.lofter.com', avatar: '/images/links/lofter.jpg', desc: 'My Lofter' },
  { name: 'Tuchong', url: 'http://ilyc.tuchong.com', avatar: '/images/links/tuchong.jpg', desc: 'My Tuchong' },
  { name: 'Twitter', url: 'http://twitter.com/layicr', avatar: '/images/links/twitter.jpg', desc: 'My Twitter' },
  { name: 'Facebook', url: 'http://www.facebook.com/layicr', avatar: '/images/links/facebook.jpg', desc: 'My Facebook' },
  { name: 'Instagram', url: 'http://instagram.com/ilayicr', avatar: '/images/links/instagram.jpg', desc: 'My Instagram' },
  { name: 'VK', url: 'http://vk.com/layicr', avatar: '/images/links/vk.jpg', desc: 'My VK' },
  { name: 'YouTube', url: 'http://youtube.com/@lyc9530', avatar: '/images/links/youtube.gif', desc: 'My YouTube' }
];

(function () {
  var container = document.getElementById('links-list');
  if (!container) return;
  var html = '';
  linksData.forEach(function (link) {
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

  var postBody = document.querySelector('.post-body.autonumber');
  if (postBody) postBody.classList.remove('autonumber');
})();
