"use strict";
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './vuex/store'
Vue.use(VueResource)
Vue.use(ElementUI)
router.afterEach(to =>{document.title = to.meta.title})

const app = new Vue({
	store,
	router,
  	render: h => h(App)
}).$mount('#app');

