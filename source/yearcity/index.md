---
title: 行者无疆
date: 2008-08-08 08:08:08
comments: false
lang: zh-CN
---

<div class="yearcity-container">
  <section class="section-spacing">
    <div class="max-w-4xl">
      <p class="section-text" id="section-text"></p>
    </div>
  </section>

  <section class="year-city-section">
    <div class="year-city-container">
      <div class="year-city-header" role="row">
        <div></div>
        <div>年份</div>
        <div>城市</div>
      </div>
      <div id="years-list"></div>
    </div>
  </section>
</div>

<style>
.yearcity-container {
  max-width: 100%;
  margin: 0 auto;
}

/* Section Spacing */
.section-spacing {
  padding: 80px 0 100px;
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  overflow: hidden;
}

.section-spacing .max-w-4xl {
  position: relative;
  text-align: left;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-text {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  line-height: 1.1;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin: 0;
}

.section-text .text-line {
  display: block;
  margin-bottom: 0.2rem;
  opacity: 0;
  transform: translateY(20px);
  position: relative;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.section-text .text-line.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-text .text-line:last-child {
  margin-bottom: 0;
}

.section-text .text-line[data-index="3"] {
  font-weight: 700;
}

.section-text .highlight-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #fbbf24 0%, #fbbf24 100%);
  background-position: left center;
  background-repeat: no-repeat;
  z-index: -1;
  border-radius: 4px;
}

/* Year City Section */
.year-city-section {
  min-height: 100vh;
  background-color: transparent;
  color: #333;
  padding: 40px 20px;
}

.year-city-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.year-city-header {
  display: grid;
  grid-template-columns: 50px 1fr 200px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 700;
  color: #8b7d7c;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.year-city-header > div:nth-child(2) {
  text-align: left;
}

.year-city-header.race-detail-header {
  grid-template-columns: 80px 1fr 150px;
}

.year-city-header.race-detail-header > div:nth-child(2) {
  text-align: left;
}

.year-row {
  display: grid;
  grid-template-columns: 50px 1fr 200px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #d4b8b6;
  cursor: pointer;
  transition: background-color 0.2s;
}

.year-row:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.year-row.active {
  background-color: #6a7dc2;
  color: #fff;
}

.year-row .expand-icon {
  font-size: 24px;
  color: #4851ad;
  transition: transform 0.2s;
}

.year-row.active .expand-icon {
  transform: rotate(180deg);
  color: #fff;
}

.year-row .year {
  font-size: 64px;
  font-weight: 900;
  text-align: left;
}

.year-row .city {
  font-size: 48px;
  font-weight: 900;
}

.race-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background-color: #f5e8e7;
}

.year-row.active + .race-details {
  max-height: 2000px;
}

.race-row {
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #d4b8b6;
}

.race-row .round {
  font-size: 48px;
  font-weight: 900;
  color: #8b7d7c;
}

.race-row .location {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  font-weight: 700;
}

.race-row .location img {
  width: 30px;
  height: 20px;
}

.race-row .date {
  font-size: 24px;
  font-weight: 600;
  color: #8b7d7c;
}

.show-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  margin: 30px auto;
  font-size: 15px;
  font-weight: 600;
  color: #4851ad;
  background: linear-gradient(135deg, rgba(72, 81, 173, 0.08) 0%, rgba(99, 126, 197, 0.08) 100%);
  border: 2px solid rgba(72, 81, 173, 0.3);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.show-more-btn::before {
  content: '▼';
  font-size: 12px;
  transition: transform 0.3s ease;
}

.show-more-btn:hover {
  background: linear-gradient(135deg, #4851ad 0%, #637ec5 100%);
  color: #fff;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(72, 81, 173, 0.35);
}

.show-more-btn:hover::before {
  transform: translateY(3px);
}

/* 响应式 */
@media (max-width: 768px) {
  .section-spacing {
    padding: 60px 20px 80px;
    min-height: 50vh;
  }

  .section-text {
    font-size: clamp(1.2rem, 5vw, 1.8rem);
  }

  .year-city-header {
    grid-template-columns: 50px 1fr 100px;
    font-size: 12px;
  }

  .year-city-header.race-detail-header {
    grid-template-columns: 50px 1fr 100px;
  }

  .year-row {
    grid-template-columns: 50px 1fr 100px;
    padding: 15px 0;
  }

  .year-row .year {
    font-size: 32px;
  }

  .year-row .city {
    font-size: 24px;
  }

  .race-row {
    grid-template-columns: 50px 1fr 100px;
    padding: 10px 0;
  }

  .race-row .round {
    font-size: 24px;
  }

  .race-row .location {
    font-size: 18px;
  }

  .race-row .location img {
    width: 20px;
    height: 14px;
  }

  .race-row .date {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-spacing {
    padding: 40px 15px 60px;
  }

  .section-text {
    font-size: clamp(1rem, 6vw, 1.5rem);
  }
}
</style>

<script>
(function() {
  var sectionTextData = [
    { text: '说真的，', highlight: false },
    { text: '似有若无的坦荡，强迫我们成长。', highlight: false },
    { text: '一抹蓝，', highlight: false },
    { text: '路上的脚印，永远不会停歇。', highlight: true }
  ];

   var yearCityData = [
    {
        year: '2026',
        details: [
          { location: '广西 . 南宁 . 周杰伦演唱会', flag: 'cn', date: '04.01' },
          { location: '广东 . 清远', flag: 'cn', date: '01.01' },
          { location: '广东 . 清远 . 李荣浩演唱会', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌 . 伍佰演唱会', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2025',
        details: [
          { location: '广西 . 南宁 . 周传雄演唱会', flag: 'cn', date: '11.01' },
          { location: '广西 . 南宁 . 邓紫棋演唱会', flag: 'cn', date: '11.01' },
          { location: '广西 . 柳州', flag: 'cn', date: '06.01' },
          { location: '广西 . 柳江', flag: 'cn', date: '06.01' },
          { location: '广东 . 深圳', flag: 'cn', date: '05.01' },
          { location: '广东 . 深圳 . 孙燕姿演唱会', flag: 'cn', date: '05.01' }
        ]
      },
      {
        year: '2024',
        details: [
          { location: '广东 . 佛山', flag: 'cn', date: '12.01' },
          { location: '广东 . 佛山 . 任贤齐演唱会', flag: 'cn', date: '12.01' },
          { location: '广东 . 江门', flag: 'cn', date: '06.01' }
        ]
      },
       {
        year: '2023',
        details: [
          { location: '江苏 . 无锡', flag: 'cn', date: '10.01' }
        ]
      },
      {
        year: '2022',
        details: [
          { location: '浙江 . 湖州', flag: 'cn', date: '02.01' }
        ]
      },
      {
        year: '2021',
        details: [
          { location: '福建 . 福州', flag: 'cn', date: '12.01' },
          { location: '福建 . 福州长乐国际机场', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2020',
        details: [
          { location: '浙江 . 宁波', flag: 'cn', date: '12.01' },
          { location: '福建 . 晋江', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2019',
        details: [
          { location: '广西 . 南宁', flag: 'cn', date: '08.01' },
          { location: '广西 . 邕江', flag: 'cn', date: '08.01' },
          { location: '广西 . 南宁吴圩国际机场', flag: 'cn', date: '08.01' },
          { location: '山西 . 晋中', flag: 'cn', date: '03.01' },
          { location: '山西 . 平遥古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2018',
        details: [
           { location: '山西 . 太原', flag: 'cn', date: '12.01' },
           { location: '山西 . 太原武宿国际机场', flag: 'cn', date: '12.01' },
           { location: '安徽 . 合肥', flag: 'cn', date: '01.01' },
           { location: '安徽 . 合肥新桥国际机场', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2017',
        details: [
          { location: '台湾 . 台北', flag: 'cn', date: '09.01' },
          { location: '台湾 . 新北', flag: 'cn', date: '09.01' },
          { location: '台湾 . 桃园', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台中', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台南', flag: 'cn', date: '09.01' },
          { location: '台湾 . 高雄', flag: 'cn', date: '09.01' },
          { location: '台湾 . 屏东', flag: 'cn', date: '09.01' },
          { location: '台湾 . 垦丁', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台东', flag: 'cn', date: '09.01' },
          { location: '台湾 . 花莲', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台北桃园国际机场', flag: 'cn', date: '09.01' },
          { location: '内蒙古 . 呼和浩特', flag: 'cn', date: '08.01' },
          { location: '宁夏 . 银川', flag: 'cn', date: '08.01' },
          { location: '宁夏 . 中卫', flag: 'cn', date: '08.01' }
        ]
      },
      {
        year: '2016',
        details: [
          { location: '北京 . 古北水镇', flag: 'cn', date: '12.01' },
          { location: '北京 . 鸟巢 . 陈奕迅演唱会', flag: 'cn', date: '10.01' },
          { location: '陕西 . 西安', flag: 'cn', date: '09.01' },
          { location: '陕西 . 西安 . 五月天演唱会', flag: 'cn', date: '09.01' },
          { location: '河北 . 张家口', flag: 'cn', date: '08.01' },
          { location: '河北 . 天路草原', flag: 'cn', date: '08.01' },
          { location: '北京 . 延庆', flag: 'cn', date: '08.01' },
          { location: '泰国 . 曼谷', flag: 'th', date: '01.01' },
          { location: '泰国 . 芭堤雅', flag: 'th', date: '01.01'},
          { location: '泰国 . 素万那普国际机场', flag: 'th', date: '01.01' }
        ]
      },
      {
        year: '2015',
        details: [
          { location: '福建 . 泉州', flag: 'cn', date: '12.01' },
          { location: '福建 . 石狮', flag: 'cn', date: '12.01' },
          { location: '福建 . 泉州晋江机场', flag: 'cn', date: '12.01' },
          { location: '青海 . 西宁', flag: 'cn', date: '07.01' },
          { location: '青海 . 茶卡盐湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 青海湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 门源', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉萨', flag: 'cn', date: '07.01' },
          { location: '西藏 . 林芝', flag: 'cn', date: '07.01' },
          { location: '西藏 . 唐古拉山口', flag: 'cn', date: '07.01' },
          { location: '西藏 . 巴松措', flag: 'cn', date: '07.01' },
          { location: '西藏 . 山南', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉姆拉错', flag: 'cn', date: '07.01' },
          { location: '西藏 . 雅鲁藏布江', flag: 'cn', date: '07.01' },
          { location: '西藏 . 羊卓雍措', flag: 'cn', date: '07.01' },
          { location: '韩国 . 首尔', flag: 'kr', date: '04.01' },
          { location: '韩国 . 济州岛', flag: 'kr', date: '04.01' },
          { location: '韩国 . 仁川国际机场', flag: 'kr', date: '04.01' },
          { location: '韩国 . 济州国际机场', flag: 'kr', date: '04.01' }
        ]
      },
      {
        year: '2014',
        details: [
          { location: '浙江 . 嘉兴', flag: 'cn', date: '07.01' },
          { location: '浙江 . 西塘', flag: 'cn', date: '07.01' },
          { location: '澳门', flag: 'mo', date: '06.01' },
          { location: '湖南 . 长沙', flag: 'cn', date: '03.01' },
          { location: '湖南 . 张家界', flag: 'cn', date: '03.01' },
          { location: '湖南 . 凤凰古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2013',
        details: [
          { location: '四川 . 成都', flag: 'cn', date: '10.01' },
          { location: '四川 . 成都双流国际机场', flag: 'cn', date: '10.01' }, 
          { location: '河南 . 登封', flag: 'cn', date: '10.01' },
          { location: '河南 . 少林寺', flag: 'cn', date: '10.01' },
          { location: '河南 . 洛阳', flag: 'cn', date: '10.01' },
          { location: '四川 . 绵阳', flag: 'cn', date: '10.01' },
          { location: '四川 . 江油', flag: 'cn', date: '10.01' },
          { location: '四川 . 阿坝', flag: 'cn', date: '08.01' },
          { location: '四川 . 九寨沟', flag: 'cn', date: '08.01' },
          { location: '四川 . 汶川', flag: 'cn', date: '08.01' },
          { location: '天津', flag: 'cn', date: '05.01' },
          { location: '天津 . 天津滨海国际机场', flag: 'cn', date: '05.01' },
          { location: '广东 . 广州', flag: 'cn', date: '04.01' },
          { location: '广东 . 广州白云国际机场', flag: 'cn', date: '04.01' },
          { location: '浙江 . 绍兴', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州萧山国际机场', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口美兰国际机场', flag: 'cn', date: '03.01' },
          { location: '江苏 . 苏州', flag: 'cn', date: '01.01' },
          { location: '江苏 . 昆山', flag: 'cn', date: '01.01' },
          { location: '江苏 . 同里', flag: 'cn', date: '01.01' },
          { location: '江苏 . 周庄', flag: 'cn', date: '01.01' },
          { location: '江苏 . 甪直', flag: 'cn', date: '01.01' },
          { location: '江苏 . 锦溪', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2012',
        details: [
          { location: '河南 . 开封', flag: 'cn', date: '10.01' },
          { location: '河南 . 许昌', flag: 'cn', date: '10.01' },
          { location: '山西 . 忻州', flag: 'cn', date: '09.01' },
          { location: '山西 . 五台山', flag: 'cn', date: '09.01' },
          { location: '山西 . 大同', flag: 'cn', date: '09.01' },
          { location: '山西 . 恒山', flag: 'cn', date: '09.01' },
          { location: '山西 . 悬空寺', flag: 'cn', date: '09.01' },
          { location: '福建 . 厦门', flag: 'cn', date: '08.01' },
          { location: '福建 . 鼓浪屿', flag: 'cn', date: '08.01' },
          { location: '福建 . 厦门高崎国际机场', flag: 'cn', date: '08.01' },
          { location: '河北 . 唐山', flag: 'cn', date: '08.01' },
          { location: '河北 . 石家庄', flag: 'cn', date: '07.01' },
          { location: '河北 . 石家庄正定国际机场', flag: 'cn', date: '07.01' },
          { location: '辽宁 . 沈阳', flag: 'cn', date: '04.01' },
          { location: '辽宁 . 本溪', flag: 'cn', date: '04.01' }
        ]
      },
      {
        year: '2011',
        details: [
          { location: '山东 . 济南', flag: 'cn', date: '11.01' },
          { location: '山东 . 青岛', flag: 'cn', date: '11.01' },
          { location: '山东 . 济南遥墙国际机场', flag: 'cn', date: '11.01' },
          { location: '河南 . 郑州', flag: 'cn', date: '07.01' },
          { location: '上海', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海浦东国际机场', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海虹桥国际机场', flag: 'cn', date: '06.01' },
          { location: '广东 . 珠海', flag: 'cn', date: '01.01' },
          { location: '广东 . 珠海三灶国际机场', flag: 'cn', date: '01.01' },
          { location: '广西 . 桂林', flag: 'cn', date: '01.01' },
          { location: '广西 . 桂林两江国际机场', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2010',
        details: [
          { location: '新疆 . 阿勒泰', flag: 'cn', date: '09.01' },
          { location: '新疆 . 布尔津', flag: 'cn', date: '09.01' },
          { location: '新疆 . 喀纳斯', flag: 'cn', date: '09.01' },
          { location: '新疆 . 禾木村', flag: 'cn', date: '09.01' },
          { location: '新疆 . 克拉玛依', flag: 'cn', date: '09.01' },
          { location: '新疆 . 乌尔禾', flag: 'cn', date: '09.01' },
          { location: '新疆 . 乌鲁木齐', flag: 'cn', date: '08.01' },
          { location: '新疆 . 乌鲁木齐地窝堡国际机场', flag: 'cn', date: '08.01' },
          { location: '北京 . 昌平', flag: 'cn', date: '07.01' },
          { location: '重庆', flag: 'cn', date: '06.01' },
          { location: '重庆江北国际机场', flag: 'cn', date: '06.01' },
          { location: '江苏 . 南京', flag: 'cn', date: '05.01' },
          { location: '河北 . 保定', flag: 'cn', date: '04.01' },
          { location: '山东 . 滨州', flag: 'cn', date: '03.01' },
          { location: '北京 . 北京首都国际机场', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2005',
        details: [
          { location: '北京', flag: 'cn', date: '12.01' }
        ]
      }
  ];

  function padZero(num) {
    return num < 10 ? '0' + num : '' + num;
  }

  function renderYearItem(item) {
    var html = '<div class="year-row" data-year="' + item.year + '">';
    html += '<span class="expand-icon">▼</span>';
    html += '<span class="year">' + item.year + '</span>';
    html += '<span class="city">' + item.details.length + '</span>';
    html += '</div>';
    html += '<div class="race-details">';
    html += '<div class="year-city-header race-detail-header"><div>序号</div><div>地点</div><div>日期</div></div>';
    
    for (var i = 0; i < item.details.length; i++) {
      var d = item.details[i];
      html += '<div class="race-row">';
      html += '<span class="round">' + padZero(i + 1) + '</span>';
      html += '<span class="location">' + d.location + '<img src="https://flagcdn.com/w80/' + d.flag + '.png" alt="" loading="lazy"></span>';
      html += '<span class="date">' + d.date + '</span>';
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  function renderSectionText() {
    var container = document.getElementById('section-text');
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < sectionTextData.length; i++) {
      var item = sectionTextData[i];
      if (item.highlight) {
        html += '<span class="text-line" data-index="' + i + '"><span class="highlight-bg"></span>' + item.text + '</span>';
      } else {
        html += '<span class="text-line" data-index="' + i + '">' + item.text + '</span>';
      }
      if (i < sectionTextData.length - 1) {
        html += '<br>';
      }
    }
    container.innerHTML = html;
  }

  function animateSectionText() {
    var lines = document.querySelectorAll('.section-text .text-line');
    
    for (var i = 0; i < lines.length; i++) {
      lines[i].classList.remove('visible');
    }
    
    var highlightBg = document.querySelector('.highlight-bg');
    if (highlightBg) {
      highlightBg.style.transition = 'none';
      highlightBg.style.width = '0%';
    }
    
    var lineIndex = 0;
    
    function showNextLine() {
      if (lineIndex < lines.length) {
        lines[lineIndex].classList.add('visible');
        lineIndex++;
        setTimeout(showNextLine, 1000);
      } else {
        animateHighlight();
        setTimeout(animateSectionText, 3000);
      }
    }
    
    setTimeout(showNextLine, 500);
  }

  var showMore = false;
  var yearsFirstHalf = yearCityData.slice(0, 3);
  var yearsSecondHalf = yearCityData.slice(3);

  function render() {
    renderSectionText();
    animateSectionText();
    renderYearCityList();
  }

  function renderYearCityList() {
    var container = document.getElementById('years-list');
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < yearsFirstHalf.length; i++) {
      html += renderYearItem(yearsFirstHalf[i]);
    }
    
    if (!showMore && yearsSecondHalf.length > 0) {
      html += '<div class="show-more-btn" id="show-more-btn">更多</div>';
    }
    
    if (showMore) {
      for (var j = 0; j < yearsSecondHalf.length; j++) {
        html += renderYearItem(yearsSecondHalf[j]);
      }
    }
    
    container.innerHTML = html;
    bindEvents();
  }

  function animateHighlight() {
    var highlightBg = document.querySelector('.highlight-bg');
    if (!highlightBg) return;
    
    highlightBg.style.transition = 'width 3s ease';
    highlightBg.style.width = '100%';
  }

  var eventsBound = false;

  function bindEvents() {
    if (eventsBound) return;
    eventsBound = true;
    
    var yearsList = document.getElementById('years-list');
    if (!yearsList) return;
    
    yearsList.addEventListener('click', function(e) {
      var showMoreBtn = e.target.closest('#show-more-btn');
      if (showMoreBtn) {
        e.stopPropagation();
        showMore = true;
        renderYearCityList();
        return;
      }
      
      var row = e.target.closest('.year-row');
      if (row) {
        var isActive = row.classList.contains('active');
        var allRows = yearsList.querySelectorAll('.year-row');
        for (var i = 0; i < allRows.length; i++) {
          allRows[i].classList.remove('active');
        }
        if (!isActive) {
          row.classList.add('active');
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
</script>

<div class="language-switch-link">
  <a href="/yearcity_en/">
    <span style="font-size: 14px;">🌐</span>
    <span>English</span>
    <span style="font-size: 10px;">→</span>
  </a>
</div>
