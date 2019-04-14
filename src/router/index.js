import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: 'systemInfo',
          name: 'systemInfo',
          meta: { activeName: 'systemInfo' },
          component: () => import('@/views/SystemInfo/index.vue')
        },
        // {
        //   path: 'logs',
        //   name: 'logs',
        //   meta: { activeName: 'logs' },
        //   component: () => import('@/views/runLogs/RunLogs.vue')
        // },
        // {
        //   path: 'configs',
        //   name: 'configs',
        //   meta: { activeName: 'configs' },
        //   component: () => import('@/views/configFiles/ConfigFiles.vue')
        // }
      ]
    },
   
  ]
});
