<template>
  <div>Logout</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLogout } from "../composables/useLogout";

const { error, logOut } = useLogout();
const router = useRouter();
const onLogout = async () => {
  await logOut();
  if (!error.value) router.push("/login");
};

onMounted(() => {
  onLogout();
});
</script>
