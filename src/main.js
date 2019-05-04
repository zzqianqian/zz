// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import Blob from './excel/Blob.js'
// import Export2Excel from './excel/Export2Excel.js'
// import JsonExcel from 'vue-json-excel'
import Print from 'vue-print-nb'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
Vue.use(Print); //注册

// Vue.component('downloadExcel', JsonExcel)
console.log(process.env.BEST_URL)
Vue.component('downloadExcel', () => {
    System.import('vue-json-excel')
})
Vue.use(VueRouter);
Vue.use(iView);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
