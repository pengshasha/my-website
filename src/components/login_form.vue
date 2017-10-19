<template>
  <div class="login-form">
    <form>
      <div class="row-line user-line">
        <label>用户名：</label>
        <input type="text" v-model="user" placeholder="请输入用户名">
      </div>
      <div class="row-line password-line">
        <label>密码：</label>
        <input type="text" v-model="password" placeholder="请输入密码">
      </div>
      <div class="btn-group">
        <button @click="submitData">登陆</button>
        <button type="reset" @click="resetData">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        'user': '',
        'password': ''
      }
    },
    methods:{
      submitData: function () {
        console.log(this.user+'---'+this.password)
      },
      resetData: function () {
        this.user = ''
        this.password = ''
      }
    }

  }
</script>
<style scoped>
  .row-line{
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
  .row-line label{
    width: 15%;
    display: inline-block;
    font-size: 15px;
  }
  .row-line input{
    width: 200px;
    height: 26px;
    padding: 0 5px;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color ease-in-out .3s, box-shadow ease-in-out .3s;
    border-radius: 8px;
  }
  .row-line input:hover,input:focus{
    border-color: #000;
    box-shadow: 0 0 7px 0px rgba(0,0,0,.5);
  }
  .btn-group{
    padding: 20px 0;
    text-align: center;
    padding-left: 15%;
  }
  .btn-group button{
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
  .btn-group button:hover{
    background: rgba(0,0,0,.8);
    color: #fff;
    border:  1px solid rgba(0,0,0,1);
  }
</style>
