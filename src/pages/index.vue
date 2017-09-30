<template>
  <div class="index">
    <div class="container">
      <div class="nav-left">
        <div class="nav-wrap nav-pro">
          <h3 class="nav-title">全部产品</h3>
          <template v-for="product in productsList">
            <h4 class="nav-small-title">{{ product.title }}</h4>
            <ul class="nav-items">
              <li class="nav-item" v-for="item in product.list"><a :href="item.url">{{ item.name }}</a><span v-if="item.hot" class="hot">HOT</span> </li>
            </ul>
          </template>
        </div>
        <div class="nav-wrap nav-news">
          <h3 class="nav-title">最新消息</h3>
          <ul class="nav-items">
            <li class="nav-item" v-for="news in latestNews"><a :href="news.url">{{news.name}}</a><span v-if="news.hot" class="hot">HOT</span> </li>
          </ul>
        </div>
      </div>
      <div class="content-right">
          <div class="slider-wrap"></div>
          <ul class="product-list-wrap">
            <li class="pro-list-item"　v-for="contentItem in contentList">
              <div class="img-box">
                <img :src="contentItem.img">
              </div>
              <h4 class="pro-title">{{ contentItem.title }}</h4>
              <p class="pro-dis">{{ contentItem.dis }}</p>
              <a :href="contentItem.moreUrl" class="pro-btn pro-look-more">查看详情</a>
              <a :href="contentItem.buyUrl" class="pro-btn pro-buy-btn">立即购买</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        productsList:{
          pc:{
            title:'pc产品',
            list:[{
              name: '数据统计',
              url: 'http://www.baidu.com'
            },
              {
                name: '数据分析',
                url: 'http://www.baidu.com',
                hot: true
              },
              {
                name: '数据预测',
                url: 'http://www.baidu.com'
              },
              {
                name: '数据发布',
                url: 'http://www.baidu.com'
              }]
          },
          app:{
            title: '应用类',
            list: [{
              name: '数据统计',
              url: 'http://www.baidu.com',
              hot: true
            },
              {
                name: '数据分析',
                url: 'http://www.baidu.com'
              },
              {
                name: '数据预测',
                url: 'http://www.baidu.com'
              },
              {
                name: '数据发布',
                url: 'http://www.baidu.com'
              }]
          }
        },
        latestNews:[{
          name: '数据统计',
          url: 'http://www.baidu.com'
        },
          {
            name: '数据分析',
            url: 'http://www.baidu.com',
            hot: true
          },
          {
            name: '数据预测',
            url: 'http://www.baidu.com'
          },
          {
            name: '广告发布',
            url: 'http://www.baidu.com'
          }],
        contentList:[{
          img: require('../assets/images/pro-img.jpg'),
          title: '品牌营销',
          dis: '品牌营销是一种提供给大众的免费产品',
          moreUrl: 'http://www.baidu.com',
          buyUrl: 'http://www.baidu.com'
        },
          {
            img: require('../assets/images/pro-img.jpg'),
            title: '使命必达',
            dis: '使命必达使命必达使命必达使命必达使命必达使命必达',
            moreUrl: 'http://www.baidu.com',
            buyUrl: 'http://www.baidu.com'
          },
          {
            img: require('../assets/images/pro-img.jpg'),
            title: '开放产品',
            dis: '开放产品是一种提供给大众的免费产品',
            moreUrl: 'http://www.baidu.com',
            buyUrl: 'http://www.baidu.com'
          },
          {
            img: require('../assets/images/pro-img.jpg'),
            title: '勇攀高峰',
            dis: '开放产品是一种提供给大众的免费产品开放产品是一种提供给大众的免费产品开放产品是一种提供给大众的免费产品',
            moreUrl: 'http://www.baidu.com',
            buyUrl: 'http://www.baidu.com'
          }]
      }
    },
    created:function () {
      this.$http.get('/api/productsList')
        .then(function (data) {
          console.log(data)
        },function (err) {
          console.log(err)
        })
    },
    mounted:function () {
      this.navTab()
          .calculatedWidth();
    },
    methods:{
      calculatedWidth:function () {
        var $rightDom = $('.content-right'),
          $leftDom = $('.nav-left'),
          $indexDom = $('.index '),
          $rightWidth = Math.floor($indexDom.innerWidth()*(.9))-$leftDom.outerWidth();
        $rightDom.css('width', $rightWidth);
        return this;
      },
      navTab:function () {
        var $navDom = $('.nav-small-title');
        $navDom.on('click',function () {
          $(this).next('.nav-items').slideToggle();
        })
        return this;
      }
    }

  }
</script>
<style scoped>
  .index{
    width: 100%;
    padding: 20px 0;
    background: #E8E8E8;
    overflow: hidden;
  }
  .nav-left{
    width: 200px;
    float: left;
    padding-right: 15px;
  }
  .nav-wrap{
    background: #fff;
    -webkit-box-shadow: 0 0 10px #888888;
    box-shadow: 0 0 10px #888888;
    margin-bottom: 10px;
  }
  .nav-wrap .nav-title{
    line-height: 36px;
    font-size: 15px;
    background: #41b883;
    color: #fff;
    padding: 0 10px;
  }
  .nav-small-title{
    padding: 0 10px;
    line-height: 38px;
    font-weight: bold;
    border-top: 1px dashed #ddd;
    margin-top: 5px;
    cursor: pointer;
  }
  .nav-small-title:nth-of-type(1){
    border-top: none;
    margin-top: 0;
  }
  .nav-items{
    padding: 0 10px;
  }
  .nav-items .nav-item{
    line-height: 30px;
  }
  .hot{
    background: #ff0000;
    color: #fff;
    font-size: 10px;
    margin-left: 10px;
    border-radius: 5px;
    transform:scale(.7,.5);
    -webkit-transform:scale(.7,.5);
    display: inline-block;
    padding: 0 5px;
  }
  .content-right{
    float: right;
    padding: 0 50px 30px 50px;
    box-sizing: border-box;
  }
  .pro-list-item{
    width: 420px;
    min-height: 150px;
    float: left;
    background: #fff;
    margin-bottom: 30px;
    position: relative;
    padding: 15px 15px 15px  150px;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 10px #888888;
    box-shadow: 0 0 10px #888888;
    border-radius: 10px;

  }
  .img-box{
    width: 120px;
    height: 120px;
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    background: #0074D9;
  }
  .img-box img{
    max-width: 100%;
  }
  .pro-list-item:nth-child(2n+2){
    float: right;
  }
  .pro-title{
    line-height: 38px;
    font-weight: bold;
    font-size: 16px;
  }
  .pro-dis{
    height: 41px;
    line-height: 21px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .pro-btn{
    display: inline-block;
    padding: 5px 8px;
    background: rgba(63,179,127,.7);
    margin-right: 10px;
    color: #fff;
    font-size: 12px;
  }
  .pro-btn:hover{
    color: #fff;
    background: rgba(63,179,127,1);
  }
  .slider-wrap{
    width: 100%;
    height: 300px;
    background: #41b883;
    margin-bottom: 40px;
  }
</style>
