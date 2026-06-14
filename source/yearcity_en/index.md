---
title: Traveler
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
        <div>Year</div>
        <div>City</div>
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
  max-height: 10000px;
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
    { text: 'To be honest,', highlight: false },
    { text: 'The faint clarity forces us to grow.', highlight: false },
    { text: 'A touch of blue,', highlight: false },
    { text: 'Footsteps on the road, never stopping.', highlight: true }
  ];

   var yearCityData = [
      {
        year: '2026',
        details: [
          { location: 'Guangxi . Nanning . Li Ronghao Concert', flag: 'cn', date: '05.01' },
          { location: 'Guangxi . Nanning . Jolin Cai Concert', flag: 'cn', date: '05.01' },
          { location: 'Guangxi . Nanning . Jay Chou Concert', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Qingyuan', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Qingyuan . Li Ronghao Concert', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Qingyuan . Qingyuan Station', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Qingyuan . Qingcheng Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang . Wu Bai Concert', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang . Nanchang Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang . Nanchang West Station', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2025',
        details: [
          { location: 'Guangxi . Nanning . Steve Chou Concert', flag: 'cn', date: '11.01' },
          { location: 'Guangxi . Nanning . G.E.M. Concert', flag: 'cn', date: '11.01' },
          { location: 'Guangxi . Liuzhou', flag: 'cn', date: '06.01' },
          { location: 'Guangxi . Liujiang', flag: 'cn', date: '06.01' },
          { location: 'Guangxi . Liuzhou . Liuzhou Station', flag: 'cn', date: '06.01' },
          { location: 'Guangxi . Liuzhou . Liuzhou Bus Terminal', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Shenzhen', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Shenzhen . Stefanie Sun Concert', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Shenzhen . Shenzhen Station', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Shenzhen . Shenzhen North Station', flag: 'cn', date: '05.01' }
        ]
      },
      {
        year: '2024',
        details: [
          { location: 'Guangdong . Foshan', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Foshan . Richie Jen Concert', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Foshan . Foshan West Station', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Foshan . Foshan Station', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Jiangmen', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Jiangmen . Jiangmen Station', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Jiangmen . Jiangmen East Station', flag: 'cn', date: '06.01' }
        ]
      },
       {
        year: '2023',
        details: [
          { location: 'Jiangsu . Wuxi', flag: 'cn', date: '10.01' },
          { location: 'Jiangsu . Wuxi . Wuxi Station', flag: 'cn', date: '10.01' },
          { location: 'Jiangsu . Wuxi . Wuxi East Station', flag: 'cn', date: '10.01' }
        ]
      },
      {
        year: '2022',
        details: [
          { location: 'Zhejiang . Huzhou', flag: 'cn', date: '02.01' },
          { location: 'Zhejiang . Huzhou . Huzhou Station', flag: 'cn', date: '02.01' }
        ]
      },
      {
        year: '2021',
        details: [
          { location: 'Fujian . Fuzhou', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou Changle International Airport', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou . Fuzhou Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou . Fuzhou South Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou . North Fuzhou Bus Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou . South Fuzhou Bus Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou . West Passenger Transport Station', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2020',
        details: [
          { location: 'Zhejiang . Ningbo', flag: 'cn', date: '12.01' },
          { location: 'Zhejiang . Ningbo . Ningbo Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Jinjiang', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Jinjiang . Jinjiang Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Jinjiang . Jinjiang Bus Station', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2019',
        details: [
          { location: 'Guangxi . Nanning', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Yongjiang River', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Nanning Wuxu International Airport', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Nanning . Nanning Station', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Nanning . Nanning East Station', flag: 'cn', date: '08.01' },
          { location: 'Shanxi . Jinzhong', flag: 'cn', date: '03.01' },
          { location: 'Shanxi . Pingyao Ancient City', flag: 'cn', date: '03.01' },
          { location: 'Shanxi . Pingyao . Pingyao Ancient City Station', flag: 'cn', date: '03.01' },
          { location: 'Shanxi . Jinzhong . Jinzhong Station', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2018',
        details: [
           { location: 'Shanxi . Taiyuan', flag: 'cn', date: '12.01' },
           { location: 'Shanxi . Taiyuan Wusu International Airport', flag: 'cn', date: '12.01' },
           { location: 'Shanxi . Taiyuan . Taiyuan Station', flag: 'cn', date: '12.01' },
           { location: 'Shanxi . Taiyuan . Taiyuan South Station', flag: 'cn', date: '12.01' },
           { location: 'Shanxi . Taiyuan . Taiyuan Bus Station', flag: 'cn', date: '12.01' },
           { location: 'Anhui . Hefei', flag: 'cn', date: '01.01' },
           { location: 'Anhui . Hefei Xinqiao International Airport', flag: 'cn', date: '01.01' },
           { location: 'Anhui . Hefei . Hefei Station', flag: 'cn', date: '01.01' },
           { location: 'Anhui . Hefei . Hefei South Station', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2017',
        details: [
          { location: 'Taiwan . Taipei', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . New Taipei', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taoyuan', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taoyuan . Taoyuan Bus Terminal', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taichung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taichung . High Speed Rail Taichung Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taichung . Taichung Bus Terminal', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Tainan', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Tainan . High Speed Rail Tainan Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kaohsiung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kaohsiung . Kaohsiung Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kaohsiung . Kaohsiung Bus Terminal', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Pingtung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Pingtung . Pingtung Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kenting', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kenting . Fangliao Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taitung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taitung . Taitung Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Hualien', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Hualien . Hualien Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Hualien . Hualien Bus Terminal', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taipei Taoyuan International Airport', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taipei . Taipei Main Station', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taipei . Taipei Bus Terminal', flag: 'cn', date: '09.01' },
          { location: 'Inner Mongolia . Hohhot', flag: 'cn', date: '08.01' },
          { location: 'Inner Mongolia . Hohhot . Hohhot Station', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Yinchuan', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Yinchuan . Yinchuan Station', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Zhongwei', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Zhongwei . Zhongwei Station', flag: 'cn', date: '08.01' }
        ]
      },
      {
        year: '2016',
        details: [
          { location: 'Beijing . Gubei Water Town', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Simatai Great Wall', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Bird\'s Nest . Eason Chan Concert', flag: 'cn', date: '10.01' },
          { location: 'Shaanxi . Xi\'an', flag: 'cn', date: '09.01' },
          { location: 'Shaanxi . Xi\'an . Mayday Concert', flag: 'cn', date: '09.01' },
          { location: 'Shaanxi . Xi\'an . Xi\'an Station', flag: 'cn', date: '09.01' },
          { location: 'Hebei . Zhangjiakou', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Grassland Sky Road', flag: 'cn', date: '08.01' },
          { location: 'Beijing . Yanqing', flag: 'cn', date: '08.01' },
          { location: 'Thailand . Bangkok', flag: 'th', date: '01.01' },
          { location: 'Thailand . Pattaya', flag: 'th', date: '01.01'},
          { location: 'Thailand . Suvarnabhumi International Airport', flag: 'th', date: '01.01' }
        ]
      },
      {
        year: '2015',
        details: [
          { location: 'Fujian . Quanzhou', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Shishi', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou Jinjiang Airport', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou . Quanzhou Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou . Quanzhou East Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou . Quanzhou Central Bus Station', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou . Quanzhou Bus Station', flag: 'cn', date: '12.01' },
          { location: 'Qinghai . Xining', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Chaka Salt Lake', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Qinghai Lake', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Menyuan', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Menyuan Station', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Xining . Xining Station', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Lhasa', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Nyingchi', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Tanggula Pass', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Basum Tso', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Shannan', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Lamu La Tso', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Yarlung Tsangpo River', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Yamdrok Lake', flag: 'cn', date: '07.01' },
          { location: 'Xizang . Lhasa . Lhasa Station', flag: 'cn', date: '07.01' },
          { location: 'South Korea . Seoul', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Jeju Island', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Incheon International Airport', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Jeju International Airport', flag: 'kr', date: '04.01' }
        ]
      },
      {
        year: '2014',
        details: [
          { location: 'Zhejiang . Jiaxing', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Xitang', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Jiaxing . Jiaxing Station', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Jiaxing . Jiaxing South Station', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Jiaxing . Jiaxing Central Bus Station', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Xitang . Jiashan Station', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Xitang . Jiashan South Station', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Xitang . Xitang Bus Station', flag: 'cn', date: '07.01' },
          { location: 'Macao', flag: 'mo', date: '06.01' },
          { location: 'Macao . Border Gate Terminal', flag: 'mo', date: '06.01' },
          { location: 'Hunan . Changsha', flag: 'cn', date: '03.01' },
          { location: 'Hunan . Zhangjiajie', flag: 'cn', date: '03.01' },
          { location: 'Hunan . Fenghuang Ancient Town', flag: 'cn', date: '03.01' },
          { location: 'Hunan . Changsha . Changsha Station', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2013',
        details: [
          { location: 'Sichuan . Chengdu', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Chengdu Shuangliu International Airport', flag: 'cn', date: '10.01' }, 
          { location: 'Sichuan . Chengdu . Chengdu Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Chengdu . Chengdu East Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Chengdu . Chadianzi Bus Terminal', flag: 'cn', date: '10.01' },
          { location: 'Henan . Dengfeng', flag: 'cn', date: '10.01' },
          { location: 'Henan . Shaolin Temple', flag: 'cn', date: '10.01' },
          { location: 'Henan . Dengfeng . Zhengzhou Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Dengfeng . Zhengzhou East Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Dengfeng . Dengfeng Bus Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Luoyang', flag: 'cn', date: '10.01' },
          { location: 'Henan . Luoyang . Luoyang Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Luoyang . Luoyang Bus Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Mianyang', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Mianyang . Mianyang Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Mianyang . Mianyang Bus Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Jiangyou', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Jiangyou . Jiangyou Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Jiangyou . Jiangyou North Station', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Aba', flag: 'cn', date: '08.01' },
          { location: 'Sichuan . Jiuzhaigou', flag: 'cn', date: '08.01' },
          { location: 'Sichuan . Wenchuan', flag: 'cn', date: '08.01' },
          { location: 'Tianjin', flag: 'cn', date: '05.01' },
          { location: 'Tianjin . Tianjin Binhai International Airport', flag: 'cn', date: '05.01' },
          { location: 'Tianjin . Tianjin . Tianjin Station', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Guangzhou', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Guangzhou Baiyun International Airport', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Guangzhou . Guangzhou Station', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Guangzhou . Guangzhou South Station', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Guangzhou . Guangzhou East Station', flag: 'cn', date: '04.01' },
          { location: 'Zhejiang . Shaoxing', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Shaoxing . Shaoxing Station', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Shaoxing . Shaoxing North Station', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou Xiaoshan International Airport', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou . Hangzhou Station', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou . Hangzhou East Station', flag: 'cn', date: '03.01' },
          { location: 'Hainan . Haikou', flag: 'cn', date: '03.01' },
          { location: 'Hainan . Haikou Meilan International Airport', flag: 'cn', date: '03.01' },
          { location: 'Jiangsu . Suzhou', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Suzhou . Suzhou Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Suzhou . Suzhou North Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Kunshan', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Kunshan . Kunshan Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Kunshan . Kunshan South Station', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Kunshan . Kunshan Bus Terminal', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Tongli', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Zhouzhuang', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Luzhi', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Jinxi', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2012',
        details: [
          { location: 'Henan . Kaifeng', flag: 'cn', date: '10.01' },
          { location: 'Henan . Kaifeng . Kaifeng Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Kaifeng . Kaifeng North Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang . Xuchang Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang . Xuchang East Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang . Xuchang Bus Station', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang . Xuchang East Bus Station', flag: 'cn', date: '10.01' },
          { location: 'Shanxi . Xinzhou', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Wutai Mountain', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Datong', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Heng Mountain', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Hanging Temple', flag: 'cn', date: '09.01' },
          { location: 'Fujian . Xiamen', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Gulangyu', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen Gaoqi International Airport', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen . Xiamen Station', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen . Xiamen North Station', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen . Wucun Bus Station', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen . Fanghu Passenger Transport Center', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Tangshan', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Tangshan . Tangshan Station', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Tangshan . Tangshan North Station', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Shijiazhuang', flag: 'cn', date: '07.01' },
          { location: 'Hebei . Shijiazhuang Zhengding International Airport', flag: 'cn', date: '07.01' },
          { location: 'Hebei . Shijiazhuang . Shijiazhuang Station', flag: 'cn', date: '07.01' },
          { location: 'Liaoning . Shenyang', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Shenyang . Shenyang Station', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Shenyang . Shenyang North Station', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Benxi', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Benxi . Benxi Station', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Benxi . Benxi Long-Distance Bus Station', flag: 'cn', date: '04.01' }
        ]
      },
      {
        year: '2011',
        details: [
          { location: 'Shandong . Jinan', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Qingdao', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Qingdao . Qingdao Station', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Qingdao . Qingdao North Station', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Jinan Yaoqiang International Airport', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Jinan . Jinan Station', flag: 'cn', date: '11.01' },
          { location: 'Henan . Zhengzhou', flag: 'cn', date: '07.01' },
          { location: 'Henan . Zhengzhou . Zhengzhou Station', flag: 'cn', date: '07.01' },
          { location: 'Henan . Zhengzhou . Zhengzhou East Station', flag: 'cn', date: '07.01' },
          { location: 'Shanghai', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Pudong International Airport', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Hongqiao International Airport', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Station', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Hongqiao Station', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai South Station', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Long-Distance Bus General Terminal', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai South Long-Distance Bus Station', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Zhuhai', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai Sanzao International Airport', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai . Zhuhai Station', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai . Zhuhai North Station', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai . Zhuhai Long-Distance Bus Station', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai . Zhuhai Gongbei Bus Station', flag: 'cn', date: '01.01' },
          { location: 'Guangxi . Guilin', flag: 'cn', date: '01.01' },
          { location: 'Guangxi . Guilin Liangjiang International Airport', flag: 'cn', date: '01.01' },
          { location: 'Guangxi . Guilin . Guilin Station', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2010',
        details: [
          { location: 'Xinjiang . Altay', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Burqin', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Kanas', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Hemu Village', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Karamay', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Urho', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Urumqi', flag: 'cn', date: '08.01' },
          { location: 'Xinjiang . Urumqi Diwopu International Airport', flag: 'cn', date: '08.01' },
          { location: 'Xinjiang . Urumqi . Urumqi Station', flag: 'cn', date: '08.01' },
          { location: 'Beijing . Changping', flag: 'cn', date: '07.01' },
          { location: 'Chongqing', flag: 'cn', date: '06.01' },
          { location: 'Chongqing . Chongqing Jiangbei International Airport', flag: 'cn', date: '06.01' },
          { location: 'Jiangsu . Nanjing', flag: 'cn', date: '05.01' },
          { location: 'Jiangsu . Nanjing . Nanjing Station', flag: 'cn', date: '05.01' },
          { location: 'Jiangsu . Nanjing . Nanjing South Station', flag: 'cn', date: '05.01' },
          { location: 'Jiangsu . Nanjing . Nanjing Bus Terminal', flag: 'cn', date: '05.01' },
          { location: 'Hebei . Baoding', flag: 'cn', date: '04.01' },
          { location: 'Shandong . Binzhou', flag: 'cn', date: '03.01' },
          { location: 'Shandong . Binzhou . Binzhou Station', flag: 'cn', date: '03.01' },
          { location: 'Beijing . Beijing Capital International Airport', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2005',
        details: [
          { location: 'Beijing', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Tiananmen', flag: 'cn', date: '12.01' },
          { location: 'Beijing . The Palace Museum', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Beijing Station', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Beijing South Station', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Beijing West Station', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Yongdingmen Long-Distance Bus Station', flag: 'cn', date: '12.01' },
          { location: 'Beijing . Sihui Long-Distance Bus Station', flag: 'cn', date: '12.01' }
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
    html += '<div class="year-city-header race-detail-header"><div>No.</div><div>Location</div><div>Date</div></div>';
    
    for (var i = 0; i < item.details.length; i++) {
      var d = item.details[i];
      html += '<div class="race-row">';
      html += '<span class="round">' + padZero(i + 1) + '</span>';
      html += '<span class="location">' + d.location + '<img src="/images/flag/' + d.flag + '.png" alt=""></span>';
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

  function render() {
    renderSectionText();
    animateSectionText();
    renderYearCityList();
  }

  function renderYearCityList() {
    var container = document.getElementById('years-list');
    if (!container) return;
    
    var html = '';
    for (var i = 0; i < yearCityData.length; i++) {
      html += renderYearItem(yearCityData[i]);
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
  <a href="/yearcity/">
    <span style="font-size: 10px;">←</span>
    <span>中文</span>
    <span style="font-size: 14px;">🌐</span>
  </a>
</div>
