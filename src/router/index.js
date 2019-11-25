import Vue from 'vue';
import Router from 'vue-router';
import hello from '../view/hello';

Vue.use(Router); // 启用router插件

// 以下是路由配置
let router = new Router({
  mode: 'history',
  base: '/PC-plaint-1125/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: hello,
    },
  ],
});

export default router;
