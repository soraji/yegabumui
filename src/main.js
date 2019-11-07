//이 프로젝트의 청사진같은 전체적인 윤곽을 볼 수 있는곳이므로 최대한 분리해서 코드 짤것
import Vue from 'vue'
import App from './App.vue'
import {store} from './store/index.js';
    

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
