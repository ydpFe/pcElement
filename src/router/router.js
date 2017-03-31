"use strict";
import Vue      from 'vue';
import Router   from 'vue-router';
//异步组件
const form = r => require.ensure([], () => r(require('../page/form/form.vue')), 'form');
const tableShow = r => require.ensure([], () => r(require('../page/tableShow/tableShow.vue')), 'tableShow');
const others = r => require.ensure([], () => r(require('../page/others/others.vue')), 'others');
const tab = r => require.ensure([], () => r(require('../page/tab/tab.vue')), 'tab');
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", component: form, name:'form' , meta: {title: "表单组件"}},
    { path: "/others", component: others, name:'others' , meta: {title: "其他组件"}},
	  { path: "/table", component: tableShow, name:'table' , meta: {title: "表格"}},
    { path: "/tab", component: tab, name:'tab' , meta: {title: "tab"}},
  ]
})