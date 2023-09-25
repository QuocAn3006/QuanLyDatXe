<template>
  <nav-admin />
  <div class="ml-64">
    <div class="px-3 py-4 text-lg">
      <div class="mb-4 flex justify-end">
        <div
          class="bg-cyan-500 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-cyan-600 mr-4"
          @click="showModalAdd = true"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          <span class="px-1"></span>
          <span> Add</span>
        </div>

        <div
          class="bg-amber-400 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-amber-600 mr-4"
          @click="showModalUpdate = true"
        >
          <font-awesome-icon :icon="['fas', 'pen']" />
          <span class="px-1"></span>

          <span> Update</span>
        </div>

        <div
          class="bg-red-600 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-red-800"
          @click="showModalDelete = true"
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
              <td class="px-28 uppercase font-semibold">Nơi đi</td>
              <td class="px-28 uppercase font-semibold">Nơi đến</td>
              <td class="px-28 uppercase font-semibold">Thời gian</td>
            </tr>
            <tr
              v-for="item in base.data"
              :key="item"
            >
              <td class="px-28">{{ item.id }}</td>
              <td class="px-28">{{ item.from }}</td>
              <td class="px-28">{{ item.to }}</td>
              <td class="px-28">{{ item.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <n-modal v-model:show="showModalAdd">
    <div class="w-[600px] bg-white p-4">
      <form action="">
        <h1 class="text-lg uppercase font-semibold mb-3">
          Nhập thông tin chuyến xe cần thêm
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-5">
            <label for="">ID</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="id"
            />
          </div>

          <div class="flex justify-between items-center mb-5">
            <label for="">Nơi đi</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="from"
            />
          </div>

          <div class="flex justify-between items-center mb-5">
            <label for="">Nơi đến</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="to"
            />
          </div>

          <div class="flex justify-between items-center mb-5">
            <label for="">Thời gian</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="startTime"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <div
            class="bg-cyan-500 w-15 h-5 flex items-center p-4 cursor-pointer hover:bg-cyan-600 mr-4"
            @click="handleAddNewTicket()"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
            <span class="px-1"></span>
            <span> Add</span>
          </div>
        </div>
      </form>
    </div>
  </n-modal>

  <n-modal v-model:show="showModalUpdate">
    <div class="w-[600px] bg-white p-4">
      <form action="">
        <h1 class="text-lg uppercase font-semibold mb-3">
          Nhập ID chuyến xe cần sửa
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-5">
            <label for="">ID</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="updateId"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <div
            class="bg-amber-400 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-amber-600 mr-4"
            @click="openModalUpdate()"
          >
            <font-awesome-icon :icon="['fas', 'pen']" />
            <span class="px-1"></span>

            <span> Update</span>
          </div>
        </div>
      </form>
    </div>
  </n-modal>

  <n-modal v-model:show="ModalUpdate">
    <div class="w-[600px] bg-white p-4">
      <form action="">
        <h1 class="text-lg uppercase font-semibold mb-3">
          Sửa thông tin chuyến xe cần tìm
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-5">
            <label for="">Nơi đi</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="from"
            />
          </div>

          <div class="flex justify-between items-center mb-5">
            <label for="">Nơi đến</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="to"
            />
          </div>

          <div class="flex justify-between items-center mb-5">
            <label for="">Thời gian</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="startTime"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <div
            class="bg-amber-400 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-amber-600 mr-4"
            @click="handleUpdateTicket()"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
            <span class="px-1"></span>
            <span> update</span>
          </div>
        </div>
      </form>
    </div>
  </n-modal>

  <n-modal v-model:show="showModalDelete">
    <div class="w-[600px] bg-white p-4">
      <form action="">
        <h1 class="text-lg uppercase font-semibold mb-3">
          Nhập ID chuyến xe cần xóa
        </h1>
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-5">
            <label for="">ID</label>
            <input
              type="text"
              class="peer block min-h-[auto] w-[80%] rounded border-[1px] bg-transparent px-3 py-[0.32rem] leading-[1.6] ml-2"
              v-model="deleteId"
            />
          </div>
        </div>

        <div class="flex justify-end">
          <div
            class="bg-amber-400 w-22 h-5 flex items-center p-4 cursor-pointer hover:bg-amber-600 mr-4"
            @click="handleDeleteItem(deleteId)"
          >
            <font-awesome-icon :icon="['fas', 'pen']" />
            <span class="px-1"></span>

            <span> Delete</span>
          </div>
        </div>
      </form>
    </div>
  </n-modal>
</template>

<script setup>
import NavAdmin from "./NavAdmin.vue";
import { projectFileStore } from "../../configs/firebase";
import { NModal, useMessage } from "naive-ui";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
  deleteDoc,
  where,
  query,
  collectionGroup,
  getDocs
} from "firebase/firestore";
import { onMounted, ref } from "vue";
const message = useMessage();
const base = ref([]);
const id = ref("");
const from = ref("");
const to = ref("");
const startTime = ref("");
const updateId = ref("");
const deleteId = ref("");

const showModalAdd = ref(false);
const showModalUpdate = ref(false);
const ModalUpdate = ref(false);
const showModalDelete = ref(false);
const docRef = doc(projectFileStore, "ticket", "DN_SG");
const fetchData = async () => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    base.value = docSnap.data();
  }
};

// Add new ticket
const handleAddNewTicket = async () => {
  const existingTicket = base.value.data.find(item => item.id === id.value);
  if (existingTicket) {
    message.warning("Trùng lặp ID");
  } else {
    await addNewTicket();
    message.success("Thêm vé thành công");
  }
};
const addNewTicket = async () => {
  const ticketRef = doc(projectFileStore, "ticket", "DN_SG");
  try {
    await updateDoc(ticketRef, {
      data: arrayUnion({
        id: id.value,
        from: from.value,
        to: to.value,
        time: startTime.value
      })
    });
  } catch (error) {
    console.log(error);
  } finally {
    showModalAdd.value = false;
  }
};

// Update
const openModalUpdate = () => {
  const existingTicket = base.value.data.find(
    item => item.id === updateId.value
  );
  if (existingTicket) {
    ModalUpdate.value = true;
  } else {
    message.warning("Không tồn tại ID");
  }
};
const handleUpdateTicket = async () => {
  const existingTicket = base.value.data.find(
    item => item.id === updateId.value
  );
  if (existingTicket) {
    ModalUpdate.value = true;
    await updateTicket(existingTicket);
    message.success("Cập nhật thông tin thành công");
  } else {
    message.warning("Không tồn tại ID");
  }
};

const updateTicket = async ticket => {
  const ticketRef = doc(projectFileStore, "ticket", "DN_SG");
  try {
    await updateDoc(ticketRef, {
      data: base.value.data.map(item => {
        if (item.id === ticket.id) {
          return {
            id: ticket.id,
            from: from.value,
            to: to.value,
            time: startTime.value
          };
        }
        return item;
      })
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật vé:", error);
  } finally {
    ModalUpdate.value = false;
    showModalUpdate.value = false;
  }
};

// delete

const handleDeleteItem = async itemId => {
  try {
    const docRef = doc(projectFileStore, "ticket", "DN_SG");
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const updatedData = data.data.filter(item => item.id !== itemId);

      await updateDoc(docRef, { data: updatedData });
      message.success("Xóa thành công");
    } else {
      console.log("Tài liệu không tồn tại");
    }
  } catch (error) {
    console.error("Lỗi khi xóa đối tượng:", error);
  } finally {
    showModalDelete.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
