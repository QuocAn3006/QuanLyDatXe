<template>
  <header class="header h-[120px] mx-auto text-[13px] w-full">
    <div class="sm:content sm:layout hidden h-20 sm:flex justify-around pt-4">
      <router-link
        to="/"
        class="relative w-60 h-60"
      >
        <img
          srcset="../assets/img/logo.svg"
          alt=""
          style="
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            max-width: 100%;
            top: -222px;
          "
        />
      </router-link>

      <div
        class="w-44 h-8 bg-white rounded-2xl p-2 flex items-center ml-1"
        v-if="!user"
        @click="router.push('/login')"
      >
        <font-awesome-icon
          :icon="['far', 'user']"
          class="ml-1"
        />
        <span class="ml-2">Đăng nhập/Đăng ký</span>
      </div>

      <div
        v-else
        class="font-bold text-xl text-white flex"
      >
        <span>{{ user.displayName }}</span>
        <div
          class="ml-4 cursor-pointer"
          @click="logout"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Home from "../components/Home.vue";
import { useUser } from "../composables/useUser";
import { useRouter } from "vue-router";
import { signOut } from "firebase/auth";
import { projectAuth } from "../configs/firebase";
const { getUser } = useUser();
const { user } = getUser();

const router = useRouter();

const logout = () =>
  signOut(projectAuth)
    .then(() => {
      router.push("/login");
    })
    .catch(err => console.log(err));
</script>

<style scoped>
.header {
  background-image: url("https://futabus.vn/images/banners/home_banner.png");
  background-size: cover;
  min-height: 180px;
}
</style>
