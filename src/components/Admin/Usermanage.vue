<template>
  <nav-admin />
  <div class="ml-64">
    <div class="px-3 py-4">
      <div class="mb-4 flex justify-end">
        <div
          class="bg-cyan-500 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-cyan-600 mr-4"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          <span class="px-1"></span>
          <span> Add</span>
        </div>

        <div
          class="bg-amber-400 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-amber-600 mr-4"
        >
          <font-awesome-icon :icon="['fas', 'pen']" />
          <span class="px-1"></span>

          <span> Update</span>
        </div>

        <div
          class="bg-red-600 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-red-800"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
          <span class="px-1"></span>

          <span> Delete</span>
        </div>
      </div>

      <div class="mt-12 flex flex-col">
        <table class="mx-auto border">
          <tbody>
            <tr>
              <td class="px-28 uppercase font-semibold">ID</td>
              <td class="px-28 uppercase font-semibold">Email</td>
              <td class="px-28 uppercase font-semibold">Họ Tên</td>
            </tr>
            <tr
              v-for="user in userAccount"
              :key="user.uid"
            >
              <span>
                {{ user.email }}
                -
                {{ user.displayName }}
              </span>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavAdmin from "./NavAdmin.vue";
// import admin from "firebase-admin";
// import serviceAccount from "../../../serviceAccount.json";
// import { onMounted, ref } from "vue";

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const userAccount = ref([]);
// const getAllUser = async () => {
//   try {
//     const userRecords = await admin.auth().listUsers();
//     userAccount.value = userRecords.users.map(user => user.toJSON());
//   } catch (error) {
//     console.log(error);
//   }
// };

// onMounted(async () => {
//   await getAllUser();
// });
</script>
