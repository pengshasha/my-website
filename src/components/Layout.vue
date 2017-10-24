<template>
  <div class="layout">
    <div class="header">
      <div class="container">
        <a href="#" class="logo-img">
          <img src="../assets/images/logo.png">
        </a>
        <div class="logo-text">
          <a href="#" v-show="!isLogin" @click="openDialog('isShowLoginDialog')">登陆</a>
          <a href="#" v-show="isLogin" :class="{loginName:isLogin}">{{userName}}</a>
          <a href="#" @click="openDialog('isShowRegDialog')">注册</a>
          <a href="#" @click="openDialog('isShowAboutDialog')">退出</a>
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
      <login-form @on-close-login="closeDialog('isShowLoginDialog',$event)"></login-form>
    </my-dialog>
    <my-dialog :isShowDialog="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <register @on-close-reg="closeDialog('isShowRegDialog')"></register>
    </my-dialog>
    <my-dialog :isShowDialog="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <logout :isLoginStatus="isLogin" @logout="closeDialog('isShowAboutDialog',$event)"></logout>
    </my-dialog>
  </div>
</template>
<script>
  import myDialog from './dialog'
  import loginForm from './login_form'
  import logout from './logout'
  import register from './register'
  export default {
    data() {
      return {
        isShowLoginDialog: false,
        isShowRegDialog: false,
        isShowAboutDialog: false,
        userName:'',
        isLogin: false
      }
    },
    components:{
      myDialog,
      loginForm,
      logout,
      register
    },
    methods:{
      openDialog: function (item) {
        this[item] = true
      },
      closeDialog: function (message,item) {
        if(item && item != '' && item!= 'logout'&& item!= 'reset') {
          this.isLogin = true
          this.userName = item
        }
        if(item === 'logout' && this.isLogin) {
          this.isLogin = false
          this.userName = ''
        }
        this[message] = false
      }
    }
  }
</script>
<style>
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
  .loginName{
    color: red;
  }
  .loginName:after{
    color: #000;
  }
  .btn-group{
    padding: 20px 0;
    text-align: center;
    padding-left: 15%;
  }
  .btn-group .btn{
    width: 80px;
    height:30px;
    margin-right: 15px;
    cursor: pointer;
    color: rgba(0,0,0,1);
    background: #fff;
    border: 1px solid rgba(0,0,0,1);
    border-radius: 8px;
    outline: none;
    transition: border-color ease-in-out .15s, background ease-in-out .15s;
  }
  .btn-group .btn:hover{
    background: rgba(0,0,0,.8);
    color: #fff;
    border:  1px solid rgba(0,0,0,1);
  }
  .errorText{
    font-size: 10px;
    color: red;
    line-height: 1em;
    padding-left: 170px;
    text-align: left;
  }
</style>
