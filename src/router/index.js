import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Admin from "../components/Admin.vue";
import SeatBook from "../components/SeatBook.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/seat-book",
    component: SeatBook
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
