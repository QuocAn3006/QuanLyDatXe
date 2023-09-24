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
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavAdmin from "./NavAdmin.vue";

import { getAuth } from "firebase/auth";
</script>
