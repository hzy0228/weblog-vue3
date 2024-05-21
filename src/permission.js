import router from "@/router/index";
import { getToken } from "@/composables/auth";
import { showMessage } from "@/composables/util";

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log("==> 全局路由前置守卫");

  next();
});

// 全局路由后置守卫
router.afterEach((to, from) => {});
