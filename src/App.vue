<script setup>
import { NMessageProvider } from "naive-ui";
</script>

<template>
  <n-message-provider>
    <div>
      <router-view />
    </div>
  </n-message-provider>
</template>
