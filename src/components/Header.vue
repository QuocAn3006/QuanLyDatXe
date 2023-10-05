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
      <div class="flex justify-center gap-4 text-center text-sm font-medium">
        <div
          v-if="!user"
          class="flex h-8 w-44 cursor-pointer items-center gap-3 rounded-2xl bg-white p-2 text-black"
        >
          <font-awesome-icon :icon="['fas', 'circle-user']" />
          Đăng nhập/Đăng ký
        </div>

        <div
          v-else
          class="text-white text-xl"
        >
          {{ user.displayName }}
          <font-awesome-icon
            :icon="['fas', 'right-from-bracket']"
            class="ml-2 cursor-pointer"
            @click="router.push('/logout')"
          />
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
import { onMounted } from "vue";

const { getUser } = useUser();
const { user } = getUser();

const router = useRouter();
</script>

<style scoped>
.header {
  background-image: url("https://futabus.vn/images/banners/home_banner.png");
  background-size: cover;
  min-height: 180px;
}
</style>
