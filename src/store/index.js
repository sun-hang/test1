import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    isShowLeftMenu: false
  },
  mutations: {
    getUserInfo(state, payload) {
      state.userInfo = payload;
    },
    getIsShowLeftMenu(state, payload) {
      state.isShowLeftMenu = payload;
    }
  },
  actions: {
    // 模拟远程请求用户信息
    getUserInfo({ commit }, payload) {
      if (!payload) {
        payload = {
          name: "momo.xyz",//其他属性省略
          avatar:"../../assets/logo.png"
        }
      }
      setTimeout(() => {
        commit('getUserInfo', payload);
      }, 1000)
    }
  },
  modules: {
  }
})
