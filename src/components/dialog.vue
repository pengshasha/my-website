<template>
  <div class="dialog-wrap" v-if="isShowDialog">
    <div class="dialog-mask" @click="closeDialog"></div>
    <div class="dialog-content">
      <div class="dialog-close"><span @click="closeDialog">╳</span></div>
      <div class="dialog-text">
        <slot>内容</slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      isShowDialog: {
        type: Boolean,
        default: false
      }
    },
    methods:{
      closeDialog: function () {
        this.$emit('on-close')
      }
    }

  }
</script>
<style scoped>
  .dialog-wrap{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
  }
  .dialog-wrap .dialog-mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.25);
  }
  .dialog-wrap .dialog-content{
    width: 500px;
    min-height: 100px;
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -250px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 5px 4px rgba(204, 206, 221, 0.54);
  }
  .dialog-wrap .dialog-close{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding: 0 20px;
    background: rgba(0,0,0,.9);
    color: #fff;
    font-size: 20px;
    box-sizing: border-box;
  }
  .dialog-wrap .dialog-close span{
    cursor: pointer;
  }
  .dialog-wrap .dialog-text{
    padding: 10px 15px;
  }
</style>
