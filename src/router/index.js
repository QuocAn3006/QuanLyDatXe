import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../configs/firebase";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Logout from "../components/Logout.vue";
import Register from "../components/Register.vue";
import Admin from "../components/Admin/Admin.vue";
import SeatBook from "../components/SeatBook.vue";
import TicketManage from "../components/Admin/Ticketmanage.vue";
import UserManage from "../components/Admin/Usermanage.vue";
import OrderMange from "../components/Admin/Ordermanage.vue";

import Chart from "../components/Admin/Chart.vue";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next("/login");
  else next();
};

const routes = [
  {
    path: "/",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/logout",
    component: Logout
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      isShowHeader: true
    }
  },
  {
    path: "/seat-book",
    component: SeatBook
  },
  {
    path: "/manage-ticket",
    component: TicketManage,
    meta: {
      isShowHeader: true
    }
  },
  {
    path: "/manage-user",
    component: UserManage,
    meta: {
      isShowHeader: true
    }
  },
  {
    path: "/manage-order",
    component: OrderMange,
    meta: {
      isShowHeader: true
    }
  },
  {
    path: "/chart",
    component: Chart,
    meta: {
      isShowHeader: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
