<template>
  <div class="layout">
    <div class="header">
      <div class="container">
        <a href="#" class="logo-img">
          <img src="../assets/images/logo.png">
        </a>
        <div class="logo-text">
          <a href="#" @click="openDialog('isShowLoginDialog')">登陆</a>
          <a href="#" @click="openDialog('isShowRegDialog')">注册</a>
          <a href="#" @click="openDialog('isShowAboutDialog')">关于</a>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">@ 2016 pengshasha-vue</div>
    <my-dialog :isShowDialog="isShowLoginDialog" @on-close="closeDialog('isShowLoginDialog')">
      <login-form></login-form>
    </my-dialog>
    <my-dialog :isShowDialog="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <p>注册</p>
    </my-dialog>
    <my-dialog :isShowDialog="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>关于</p>
    </my-dialog>
  </div>
</template>
<script>
  import myDialog from './dialog'
  import loginForm from './login_form'
  export default {
    data() {
      return {
        isShowLoginDialog: false,
        isShowRegDialog: false,
        isShowAboutDialog: false
      }
    },
    components:{
      myDialog,
      loginForm
    },
    methods:{
      openDialog: function (item) {
        this[item] = true
      },
      closeDialog: function (item) {
        this[item] = false
      }
    }
  }
</script>
<style scoped>
  .header{
    width: 100%;
    height: 50px;
    background: #d8d6d6;
    color: #fff;
    overflow: hidden;
    padding: 10px 0;
  }
  .logo-img{
    display: inline-block;
    float: left;
  }
  .logo-img img{
    height: 50px;
    width: auto;
  }
  .logo-text{
    float: right;
  }
  .logo-text a{
    display: inline-block;
    line-height: 50px;
    padding: 0 20px;
    position: relative;
  }
  .logo-text a:after{
    content: '|';
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
  }
  .logo-text a:hover:after{
   color: #000;
  }
  .logo-text a:last-child:after{
    content: '';
  }
  .footer{
    width: 100%;
    line-height: 50px;
    background: #d8d6d6;
    text-align: center;
  }
</style>
