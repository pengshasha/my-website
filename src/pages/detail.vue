<template>
  <div class="detail">
    <div class="container">
      <div class="nav-left">
        <div class="nav-wrap nav-pro">
          <ul class="nav-items">
            <li class="nav-item" v-for="item in detailList">
              <router-link :to="{path: item.detailUrl, query: {name: item.name}}"  >{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        detailList:[]
      }
    },
    created:function () {
      this.getDetailData()　//数据从另外一个端口获取，使用代理服务器
    },
    mounted:function () {
    },
    methods:{
      getDetailData:function () {
        var _this = this
          _this.$http.get('/api/detailList').then(function (data) {
            if(data && data.status === 200) {
              _this.detailList = data.body
              console.log(_this.detailList)
            }else {
              console.error('获取数据失败！')
            }
          })
      }
    }

  }
</script>
<style scoped>
  .detail{
    width: 100%;
    padding: 20px 0;
    background: #E8E8E8;
    overflow: hidden;
  }
  .detail .container{
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
  .nav-items .nav-item{
    line-height: 30px;
  }
  .nav-items .nav-item a{
    padding: 0 10px;
    display: block;
    transition: color 0.15s ease-in-out,background 0.15s ease-in-out;
  }
  .nav-items .nav-item a.router-link-active{
    background: #41b883;
    color: #fff;
  }
  .nav-items .nav-item:hover a{
    background: #41b883;
    color: #fff;
  }
  .content-right{
    min-height: 500px;
    padding-left: 220px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
</style>

