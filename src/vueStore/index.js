/**
 * Created by Administrator on 2017/10/24.
 */
export default {
  state: {
    userName:'',
    password: '',
    isLogin: false
  },
  mutations: {
    saveUserName:function (state, payload) {
      state.userName = payload['userName']
      state.isLogin = payload['isLogin']
      console.log(payload)
    }
  }
}
