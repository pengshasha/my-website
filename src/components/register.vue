<template>
  <div class="register">
    <form>
      <div class="row-line user-line">
        <label>用户名：</label>
        <input type="text" id="userText" v-model="regUser" placeholder="请输入用户名" v-validate="'required|min:3|max:15'" :class="{'input': true, 'is-danger': errors.has('email') }" name="reg-user">
        <p v-show="errors.has('reg-user')" class="errorText">{{ errors.first('reg-user')}}</p>
      </div>
      <div class="row-line password-line">
        <label>密码：</label>
        <input type="text" v-model="regPassword" placeholder="请输入密码" v-validate="'required|min:6'" name="reg-password">
        <p v-show="errors.has('reg-password')" class="errorText">{{ errors.first('reg-password')}}</p>
      </div>
      <div class="row-line password-line">
        <label>确认密码：</label>
        <input type="text" v-model="regPassword2" placeholder="请再次输入密码" v-validate="'required|min:6'" name="reg-password2">
        <p v-show="errors.has('reg-password2')" class="errorText">{{ errors.first('reg-password2')}}</p>
      </div>
      <div class="btn-group">
        <input type="button" class="btn" value="注册">
        <button type="reset" class="btn">取消</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        regUser:'',
        regPassword:'',
        regPassword2:''
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
