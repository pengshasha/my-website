<template>
  <div class="index">
    <div class="container">
      <div class="nav-left">
        <div class="nav-wrap nav-pro">
          <h3 class="nav-title">全部产品</h3>
          <ul class="nav-items">
            <li class="nav-item"><a href="#">数据统计</a> </li>
            <li class="nav-item"><a href="#">数据分析</a> </li>
            <li class="nav-item"><a href="#">数据预测</a> </li>
            <li class="nav-item"><a href="#">数据发布</a> </li>
          </ul>
          <ul class="nav-items">
            <li class="nav-item"><a href="#">数据统计</a> </li>
            <li class="nav-item"><a href="#">数据分析</a> </li>
            <li class="nav-item"><a href="#">数据预测</a> </li>
            <li class="nav-item"><a href="#">数据发布</a> </li>
          </ul>
        </div>
        <div class="nav-wrap nav-news">
          <h3 class="nav-title">最新消息</h3>
          <ul class="nav-items">
            <li class="nav-item"><a href="#">数据统计</a> </li>
            <li class="nav-item"><a href="#">数据分析</a> </li>
            <li class="nav-item"><a href="#">数据预测</a> </li>
            <li class="nav-item"><a href="#">广告发布</a> </li>
          </ul>
        </div>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  .index{
    padding: 20px 0;
    background: #E8E8E8;
  }
  .nav-left{
    width: 200px;
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
  .nav-items{
    padding: 0 10px;
  }
  .nav-items .nav-item{
    line-height: 30px;
  }
</style>
