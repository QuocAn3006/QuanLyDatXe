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

      <div class="mt-12 flex flex-col items-center">
        <table class="mx-auto border">
          <tbody class="">
            <tr class="">
              <th class="px-20 uppercase font-semibold">Họ Tên</th>
              <th class="px-20 uppercase font-semibold">Email</th>
              <th class="px-20 uppercase font-semibold">Số điện thoại</th>
              <th class="px-20 uppercase font-semibold">Số ghế</th>
              <th class="px-20 uppercase font-semibold">Tổng tiền</th>
            </tr>

            <tr
              v-for="item in order"
              :key="item"
              class=""
            >
              <td class="px-20">{{ item.fullName }}</td>
              <td class="px-20">{{ item.email }}</td>
              <td class="px-20">{{ item.phoneNumber }}</td>
              <td class="px-20">
                {{ item.seats ? item.seats.seatLabel.join(", ") : "" }}
              </td>
              <td class="px-20">{{ item.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavAdmin from "./NavAdmin.vue";

import { projectFileStore } from "../../configs/firebase";
import { getDocs, collection } from "firebase/firestore";
import { onMounted, ref } from "vue";
const order = ref([]);
const seat = ref([]);
const fetchTicket = async () => {
  const querry = await getDocs(collection(projectFileStore, "orders"));

  querry.forEach(item => {
    order.value.push(item.data());
    seat.value.push(item.data().seats);
  });
};
console.log(order.value);
console.log(seat.value);
onMounted(() => {
  fetchTicket();
});
</script>
