<template>
  <div class="logout">
    <div v-show="isLoginStatus">
      <p>确定要退出登陆状态吗？</p>
      <div class="btn-group">
        <input type="button" class="btn" value="确定" @click="logout('logout')">
        <input type="button" class="btn" value="取消" @click="logout('reset')">
      </div>
    </div>
    <p v-show="!isLoginStatus">系统检测，你还未登陆！</p>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        sign: true
      }
    },
    props:['isLoginStatus'],
    methods:{
      logout:function (item) {
        this.$emit('logout',item)
      }
    }

  }
</script>
<style scoped>
  p{
    text-align: center;
    line-height: 50px;
  }
  .btn-group{
    padding-left: 0;
  }
</style>
