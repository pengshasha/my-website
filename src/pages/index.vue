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
          <div>
            <template>
              <swiper :options="swiperOption" class="slider-wrap">
                <swiper-slide v-for="slide in banners">
                  <img :src="slide">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </template>
          </div>
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
  require('swiper/dist/css/swiper.css')
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default{
    data(){
      return {
        productsList:{},
        latestNews:[],
        contentList:[],
        banners: [require('../assets/images/pic1.jpg'),require('../assets/images/pic2.jpg'),require('../assets/images/pic3.jpg'),require('../assets/images/pic4.jpg')],
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : false,
          observeParents:true,
          loop:true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created:function () {
      this.getIndexData()　//数据从另外一个端口获取，使用代理服务器
    },
    mounted:function () {
      var _this = this
      _this.navTab()
    },
    methods:{
      //导航效果
      navTab:function () {
        var $leftWrap = $('.nav-left'),
            $navDom = $('.nav-small-title');
        $leftWrap.on('click', $navDom, function (e) {//动态数据需要用代理
          $(e.target).next('.nav-items').slideToggle();
        })
        return this;
      },
      //获取页面数据
      getIndexData:function () {
        var _this = this,
          reqUrl = {
            productsList: '/api/productsList',
            latestNews: '/api/latestNews',
            contentList: '/api/contentList'
          },
        tasks = [],
        reqUrlLength = Object.keys(reqUrl).length;
        for(var i = 0; i < reqUrlLength; i++) {
          tasks[i] = $.Deferred();
        }
        for(var j in reqUrl) {
          var index = 0
          _this.$http.get(reqUrl[j]).then(function (data) {
            if(data && data.status === 200) {
              tasks[index].resolve(data.body)
            }else {
              tasks[index].reject('数据获取失败')
            }
            index++
          })
        }
        $.when.apply(null, tasks).then(function (productsData, newsData, contentData) {
          if(productsData && newsData && contentData) {
            Array.isArray(contentData) && contentData.forEach(function (item, index) {
               if(item && item['img']) {
                 console.log(item['img'])
                 //require()引入一个变量加上一个字符串就会报warning，但可以正确引入图片。只引入变量，则报错，且无法引入图片。
                 item['img'] = require('../assets/images/'+ item['img'] )
               }
            })
            _this.productsList = productsData
            _this.latestNews = newsData
            _this.contentList = contentData
          } else {
            console.error('获取数据失败！')
          }
        },function (err) {
          console.error(err)
        })
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
  .index .container{
    position: relative;
  }
  .nav-left{
    position: absolute;
    width: 200px;
    top:0;
    left: 0;
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
    padding-left: 220px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  .product-list-wrap{
    width: 100%;
    overflow: hidden;
    padding: 20px 40px;
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
    margin-bottom: 40px;
  }
  .slider-wrap img{
    width: 100%;
  }
</style>
