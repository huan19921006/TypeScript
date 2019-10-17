// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueBus from './vue-bus'

Vue.use(Vuex);
Vue.use(VueBus);
Vue.config.productionTip = false

//vueX 用法456
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count ++;
    }
  },
  actions: {
    increment ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment');
          resolve();
        }, 3000);
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
