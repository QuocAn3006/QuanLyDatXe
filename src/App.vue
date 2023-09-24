<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { NMessageProvider } from "naive-ui";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const meta = computed(() => route.meta);
</script>

<template>
  <n-message-provider>
    <div>
      <Header v-if="!meta.isShowHeader" />
      <router-view />
      <Footer v-if="!meta.isShowHeader" />
    </div>
  </n-message-provider>
</template>
