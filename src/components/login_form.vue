<template>
  <div class="login-form">
    <form>
      <div class="row-line user-line">
        <label>用户名：</label>
        <input type="text" id="userText" v-model="user" placeholder="请输入用户名" v-validate="'required|min:3|max:15'" :class="{'input': true, 'is-danger': errors.has('email') }" name="user">
        <p v-show="errors.has('user')&&!loginMessageShow" class="errorText">{{ errors.first('user')}}</p>
      </div>
      <div class="row-line password-line">
        <label>密码：</label>
        <input type="text" v-model="password" placeholder="请输入密码" v-validate="'required|min:6'" name="password">
        <p v-show="errors.has('password')&&!loginMessageShow" class="errorText">{{ errors.first('password')}}</p>
        <p v-show="loginMessageShow" class="errorText">{{ loginMessage }}</p>
      </div>
      <div class="btn-group">
        <input type="button" class="btn" value="登陆" @click="submitData">
        <button type="reset" class="btn" @click="resetData">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
  import store from '../store'
  export default{
    data() {
      return {
        'user': '',
        'password': '',
        'loginMessage': '',
        'loginMessageShow': false
      }
    },
    methods:{
      submitData: function () {
        var _this = this
        this.$http.get('/api/getLoginData').then(function (data) {
          if(data && data.status === 200) {
            var loginData = data.body;
            if(loginData["userName"] && loginData["password"] && loginData["userName"] === this.user && loginData["password"] === this.password) {
              _this.$emit('on-close-login',this.user)
            } else {
              var storeName = store.getValue(this.user)
              if(!!storeName && storeName == this.password) {
                _this.$emit('on-close-login',this.user)
              } else {
                this.loginMessageShow = true
                this.loginMessage = '用户名或密码错误，请重新输入！'
                this.user = ''
                this.password = ''
              }
            }
          }
        }).catch(function (error) {
          if(error) {
            console.log(error)
            throw error;
          }
        })
      },
      resetData: function () {
        this.user = ''
        this.password = ''
      }
    },
    mounted:function () {
      $('#userText').focus()
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
    width: 18%;
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

</style>
