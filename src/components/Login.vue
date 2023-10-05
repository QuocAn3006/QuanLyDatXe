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
      <div class="flex items-start gap-4 text-center text-sm font-medium">
        <div
          class="flex h-8 w-44 cursor-pointer items-center gap-3 rounded-2xl bg-white p-2 text-black"
        >
          <font-awesome-icon :icon="['fas', 'circle-user']" />
          Đăng nhập/Đăng ký
        </div>
      </div>
    </div>
  </header>
  <div class="relative pt-[360px] flex flex-col justify-center items-center">
    <div class="layout card-login flex">
      <div class="relative hidden flex-auto flex-col items-start sm:flex">
        <div class="absolute left-10 top-8">
          <div class="relative min-h-[77px] min-w-[366px]">
            <span
              style="
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: absolute;
                inset: 0px;
              "
            >
              <span class="text-2xl font-bold text-[#0d623e]">BUSLINES</span>
              <span class="text-xl font-semibold text-[#ef5222]">
                CÙNG BẠN TRÊN MỌI NẺO ĐƯỜNG</span
              >
            </span>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 top-14 right-0">
          <div class="relative aspect-[3/2] w-full max-w-[600px]">
            <span
              style="
                box-sizing: border-box;
                display: block;
                overflow: hidden;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                position: absolute;
                inset: 0px;
              "
            >
              <img
                src="https://storage.googleapis.com/futa-busline-cms-dev/TVC_00aa29ba5b/TVC_00aa29ba5b.svg"
                alt=""
                class="transition-all duration-200 relative aspect-[3/2] w-full max-w-[600px]"
                style="
                  position: absolute;
                  inset: 0px;
                  box-sizing: border-box;
                  padding: 0px;
                  border: none;
                  margin: auto;
                  display: block;
                  width: 0px;
                  height: 0px;
                  min-width: 100%;
                  max-width: 100%;
                  min-height: 100%;
                  max-height: 100%;
                  object-fit: cover;
                "
              />
            </span>
          </div>
        </div>
      </div>
      <div class="mt-8 flex w-full flex-col items-center sm:w-[480px]">
        <div class="text-2xl font-medium">Đăng nhập tài khoản</div>

        <form @submit.prevent="handleLogin">
          <!--Username input-->
          <div
            class="relative mt-10"
            data-te-input-wrapper-init
          >
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6]"
              id="exampleFormControlInput1"
              placeholder="Email"
              v-model="email"
            />
            <p class="text-red-500 mt-2">{{ errors.password }}</p>
          </div>

          <!--Password input-->
          <div
            class="relative mb-4 mt-4"
            data-te-input-wrapper-init
          >
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6]"
              id="exampleFormControlInput11"
              placeholder="Password"
              v-model="password"
            />
            <p class="text-red-500 mt-2">{{ errors.password }}</p>
          </div>

          <!--Submit button-->
          <div class="mb-4 pb-1 pt-1 text-center">
            <button
              class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              v-if="!isPending"
              data-te-ripple-init
              data-te-ripple-color="light"
              style="
                background: linear-gradient(
                  to right,
                  #ee7724,
                  #d8363a,
                  #dd3675,
                  #b44593
                );
              "
            >
              Log in
            </button>

            <button
              class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-gray-600"
              type="submit"
              v-else
              data-te-ripple-init
              data-te-ripple-color="light"
              style="
                background: linear-gradient(
                  to right,
                  #ee7724,
                  #d8363a,
                  #dd3675,
                  #b44593
                );
              "
            >
              Loading...
            </button>
          </div>
          <div
            class="flex items-center justify-center border-danger border-2 rounded py-2 mb-4 cursor-pointer hover:bg-gray-100"
            @click="handleLoginWithGoogle()"
          >
            <span class="pr-4"> Login with Google Account</span>
            <img
              src="../../src/assets/img/google.png"
              alt=""
              class="w-5 h-5"
            />
          </div>
          <div
            class="text-left text-red-500 my-2"
            v-if="error"
          >
            <span>{{ error }}</span>
          </div>

          <!--Register button-->
          <div class="flex items-center justify-between pb-6">
            <p class="mb-0 mr-2">Don't have an account?</p>
            <button
              type="button"
              class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="router.push('/register')"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {
  NCard,
  NTabs,
  NTabPane,
  NForm,
  NFormItemRow,
  NInput,
  NButton
} from "naive-ui";
import { ref, computed } from "vue";

import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { useLogin } from "../composables/useLogin";
import { useSignInWithGoogle } from "../composables/useLoginWithGoogle";

import { useUser } from "../composables/useUser";
import { doc, getDoc } from "firebase/firestore";
import { projectFileStore } from "../configs/firebase";
import Header from "../components/Header.vue";
const route = useRoute();
const meta = computed(() => route.meta);
const email = ref("");
const password = ref("");
const errors = ref({});
const router = useRouter();
const { error, login, isPending } = useLogin();
const { signInWithGoogle, isLogin } = useSignInWithGoogle();

const handleLogin = async () => {
  await login(email.value, password.value);
  if (!!error) {
    // router.push("/");
    const docRef = doc(projectFileStore, "user", "admin");
    const docSnap = await getDoc(docRef);
    const admin = docSnap.data();
    const { getUser } = useUser();
    const { user } = getUser();
    if (user.value.uid == admin.isAdmin) {
      router.push("/admin");
    } else {
      router.push("/");
    }
    console.log(admin);
  }
};

const handleLoginWithGoogle = async () => {
  await signInWithGoogle();
  if (!!isLogin) {
    const docRef = doc(projectFileStore, "user", "admin");
    const docSnap = await getDoc(docRef);
    const admin = docSnap.data();
    const { getUser } = useUser();
    const { user } = getUser();
    if (user.value.uid == admin.isAdmin) {
      router.push("/admin");
    } else {
      router.push("/");
    }
  }
};
</script>

<style scoped>
.card-login {
  position: absolute;
  top: -110px;
  height: 471px;
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(239, 82, 34, 0.6);
  background: #fff;
  outline: 6px solid rgba(170, 46, 8, 0.063);
}

.input-login-form {
  border-radius: 6px !important;
  height: 44px !important;
  border: 1px solid rgba(239, 82, 34, 0.3) !important;
  background: rgba(239, 82, 34, 0.05);
}

.header {
  background-image: url("https://futabus.vn/images/banners/home_banner.png");
  background-size: cover;
  min-height: 180px;
}
</style>
