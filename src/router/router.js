"use strict";
import Vue      from 'vue'
import Router   from 'vue-router'

const typeWriterPage = r => require.ensure([], () => r(require('../page/typeWriterPage.vue')), 'typeWriterPage')
const dropDownMenu = r => require.ensure([], () => r(require('../component/dropDownMenu.vue')), 'dropDownMenu')
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", component: typeWriterPage, name:'typeWriterPage' , meta: {title: "打字机效果"}}
	// { path: "*", component: error, name:'error' , meta: {title: "404"}}
  ]
})