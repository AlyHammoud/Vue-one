import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros";
import AppCalendar from "./pages/AppCalendar";
import AppHome from "./pages/AppHome";
import MarkDown from "./pages/MarkDown";
import AppSlider from "./pages/AppSlider";
import AppCalculator from "./pages/AppCalculator";
import ReuseableModal from "./pages/ReuseableModal";
import AppChat from "./pages/AppChat";
import UserCrud from "./pages/UserCrud";
import store from "./store/index";

const routes = [
  {
    path: "/",
    component: AppHome,
  },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: AppCalendar },
  { path: "/markdown", component: MarkDown },
  { path: "/slider", component: AppSlider },
  {
    path: "/calculator",
    component: AppCalculator,
    meta: { middleware: "auth" },
  },
  {
    path: "/reuseable",
    component: ReuseableModal,
    meta: { middleware: "auth" },
  },
  {
    path: "/chat",
    component: AppChat,
    meta: { middleware: "auth" },
  },
  {
    path: "/usercrud",
    component: UserCrud,
    meta: { middleware: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _,next) => {
  if (to.meta.middleware) {
    //auth
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
      console.log(middleware.default());
    }else{
      next()
    }
  } else {
    next();
  }
})
export default router;
