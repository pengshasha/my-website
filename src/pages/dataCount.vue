<template>
<div class="dataCount">
  <div class="content-wrap top-content">
    <h3>{{ title }}</h3>
    <p class="dis">数据统计，是互联网传媒行业或其他操作流程的数据统计的统称，用于历史资料、科学实验、检验、统计等领域。以便精准快速的查找与分类。</p>
    <div class="dataItems">
      <div class="dataItem">
        <span class="title">购买数量：</span>
        <span>121</span>
      </div>
      <div class="dataItem">
        <span class="title">产品类型：</span>
        <span>A款</span>
      </div>
      <div class="dataItem">
        <span class="title">有效时间：</span>
        <span>12年</span>
      </div>
      <div class="dataItem">
        <span class="title">总价：</span>
        <span>$456</span>
      </div>
    </div>
    <span class="buyBtn">立即购买</span>
  </div>
  <div class="content-wrap down-content">
    <div class="section">
      <h3>产品说明</h3>
      <p class="dis">产品说明书在普及科学文化知识，扩大信息流量，在信息传播、复制、交流、利用、反馈等方面，作用十分重要，是因为它在社会生产过程中，实现了生产、交换、分配、消费四个环节中交换和消费两个环节的必然链接。</p>
    </div>
    <div class="section">
      <h3>用户形为指标</h3>
      <p class="dis">从流量分析软件可以清楚地看到，用户是通过搜索哪些关键词来到你的网站的，可以辅助你对关键词实际优化情况有大致的了解。
        另一个更重要的方面是，从这些关键词中可以扩展出很多可以增加的内容。这能帮助你发现你想不到的关键词，这样就可以适当地对自己内容发展方面的策略做一些调整。</p>
    </div>
    <div class="section">
      <h3>用户浏览网站的方式</h3>
      <p class="dis">此相关统计指标包括用户上网设备类型、用户浏览器的名称和版本、访问者电脑分辨率模式、用户所使用的操作系统名称和版本、用户所在地理区域分布状况等。</p>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        'title':''
      }
    },
    created:function () {
      this.getTitleList()
    },
    methods:{
      getTitleList: function () {
        var _this = this
        _this.title = this.$route.query.name || '数据统计'
//        _this.$http.get('/api/detailList').then(function (data) {
//          if(data && data.status === 200) {
//            _this.title = data.body[0]
//          }
//        })
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'getTitleList'
    },
  }
</script>
<style scoped>
  .dataCount{
    padding: 4px;
  }
  .content-wrap{
    padding: 15px 10px;
    background: #fff;
    box-shadow: 0 0 10px #888;
    border-radius: 10px;
    margin-bottom: 30px;
    overflow: hidden;
  }
  h3{
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
  }
  p.dis{
    padding: 8px 5px;
    line-height: 21px;
    background: #f7f2f6;
    margin: 10px 0;
  }
  .dataItems{
    padding: 8px 0;
  }
  .dataItems .dataItem{
    line-height: 30px;
    font-size: 14px;
  }
  .dataItems .dataItem span.title{
    width: 100px;
    display: inline-block;
  }
  .buyBtn{
    width: 150px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    background: #41b883;
    color: #fff;
    text-align: center;
    margin: 15px 100px;
    font-size: 16px;
    cursor: pointer;
    transition: box-shadow 0.15s ease-in-out;
  }
  .buyBtn:hover{
    box-shadow: 0 0 10px #888;
  }
  .section{
    margin-bottom: 20px;
  }
</style>
