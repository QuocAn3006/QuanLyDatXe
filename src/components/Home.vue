<template>
  <div class="w-full">
    <!-- search -->
    <section class="layout relative flex flex-col mt-20">
      <div class="home-search absolute z-30">
        <div class="search-form m-2 font-medium sm:m-auto xl:w-[1128px]">
          <div class="grid grid-cols-1 pt-4 pb-4 sm:grid-cols-2 sm:gap-4">
            <div class="relative flex justify-center sm:gap-4">
              <div class="flex-1">
                <label for="">Điểm đi</label>
                <n-popover
                  :overlap="overlap"
                  placement="bottom-start"
                  trigger="click"
                >
                  <template #trigger>
                    <div
                      class="input-search item-start mt-1 flex w-full cursor-pointer font-medium sm:items-center undefined text-base sm:text-lg"
                    >
                      <div class="max-w-[140px] truncate sm:max-w-[220px]">
                        {{ selectedProvince1 || "Chọn điểm đi" }}
                      </div>
                    </div>
                  </template>
                  <div class="flex w-screen flex-col sm:w-[400px]">
                    <label for="">Điểm đi</label>
                    <div class="w-full py-2 lg:w-auto">
                      <!-- <div class="flex px-4">
                        <span
                          class="ant-input-affix-wrapper input-search w-full placeholder:text-[14px] placeholder:text-[#A2ABB3]"
                        >
                          <input
                            type="text"
                            class="input-block"
                            placeholder="Chọn điểm đi"
                            v-model="provinceSearch1"
                          />
                        </span>
                      </div> -->
                      <div
                        class="min-w-[300px] border-[#F7F7F7] pt-4 mt-2 max-h-[300px] overflow-y-auto border-b-4 sm:max-h-[250px]"
                      >
                        <span class="pl-4 text-base font-medium uppercase"
                          >TỈNH/THÀNH PHỐ</span
                        >
                        <div
                          class=""
                          v-for="province in filterProvinces"
                          :key="province.name"
                          @click="selectProvince1(province)"
                        >
                          <div
                            class="flex cursor-pointer border-b border-neutral-200 px-4 py-3 hover:bg-[#FEF6F3]"
                          >
                            {{ province.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </n-popover>
              </div>
              <div
                class="switch-location bottom-4 h-6 w-6 sm:bottom-3 sm:h-8 sm:w-8 text-[#ef5222]"
              >
                <font-awesome-icon
                  :icon="['fas', 'circle-arrow-right']"
                  size="2xs"
                  class="bottom-4 h-6 w-6 sm:bottom-3 sm:h-8 sm:w-8"
                />
              </div>

              <div class="flex-1 text-right sm:text-left">
                <label for="">Điểm đến</label>
                <n-popover
                  :overlap="overlap"
                  placement="bottom-start"
                  trigger="click"
                >
                  <template #trigger>
                    <div
                      class="input-search item-start mt-1 flex w-full cursor-pointer font-medium sm:items-center undefined text-base sm:text-lg"
                    >
                      <div class="max-w-[140px] truncate sm:max-w-[220px]">
                        {{ selectedProvince2 || "Chọn điểm đến" }}
                      </div>
                    </div>
                  </template>
                  <div class="flex w-screen flex-col sm:w-[400px]">
                    <label for="">Điểm đến</label>
                    <div class="w-full py-2 lg:w-auto">
                      <!-- <div class="flex px-4">
                        <span
                          class="ant-input-affix-wrapper input-search w-full placeholder:text-[14px] placeholder:text-[#A2ABB3]"
                        >
                          <input
                            type="text"
                            class="input-block"
                            placeholder="Chọn điểm đi"
                            v-model="provinceSearch2"
                          />
                        </span>
                      </div> -->
                      <div
                        class="min-w-[300px] border-[#F7F7F7] pt-4 mt-2 max-h-[300px] overflow-y-auto border-b-4 sm:max-h-[250px]"
                      >
                        <span class="pl-4 text-base font-medium uppercase"
                          >TỈNH/THÀNH PHỐ</span
                        >
                        <div
                          class=""
                          v-for="province in filterProvinces"
                          :key="province.name"
                          @click="selectProvince2(province)"
                        >
                          <div
                            class="flex cursor-pointer border-b border-neutral-200 px-4 py-3 hover:bg-[#FEF6F3]"
                          >
                            {{ province.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </n-popover>
              </div>
            </div>
            <div class="flex">
              <div class="mr-4 flex flex-1 flex-col">
                <label for="">Ngày đi</label>
                <div
                  class="input-search item-start mt-1 flex w-full cursor-pointer font-medium sm:items-center undefined text-base sm:text-lg"
                >
                  <input
                    type="date"
                    id="datePick"
                    class="w-full outline-none"
                    v-bind:min="dateInPast"
                    value=""
                  />
                </div>
              </div>
              <div class="flex flex-1 flex-col false">
                <label for="">Số vé</label>
                <div
                  class="input-search item-start mt-1 flex w-full cursor-pointer font-medium sm:items-center undefined text-base sm:text-lg"
                >
                  <select
                    name=""
                    id=""
                    class="w-full h-full outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative flex w-full justify-center"
            @click="handleFindTicket"
          >
            <button
              class="absolute z-10 h-12 rounded-full bg-orange-500 px-20 text-base text-white transition duration-200"
            >
              Tìm chuyến xe
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- search result -->
    <section class="layout pb-8 sm:block">
      <div class="flex flex-col sm:flex-row sm:gap-6 sm:pt-28 pb-36">
        <div class="hidden sm:block">
          <div
            class="flex w-[360px] min-w-[360px] flex-col bg-[#F8F9F9] stroke-[#EBEDEE] text-[15px] font-medium sm:rounded-xl"
          >
            <div class="flex justify-between p-4">
              <span class="text-base uppercase">Bộ lọc tìm kiếm</span>
              <div class="flex cursor-pointer gap-2 text-[#E12424]">Bỏ Lọc</div>
            </div>

            <div class="p-4">
              <span>Giờ đi</span>
              <div>
                <n-checkbox> Sáng sớm 00:00 - 06:00 </n-checkbox>
                <n-checkbox> Buổi sáng 06:00 - 12:00 </n-checkbox>
                <n-checkbox> Buổi chiều 12:00 - 18:00 </n-checkbox>
                <n-checkbox> Buổi chiều 12:00 - 18:00 </n-checkbox>
              </div>
            </div>
            <div class="divide"></div>
            <div class="p-4">
              <span>Loại xe</span>
              <div class="mt-4 flex flex-wrap gap-2">
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Ghế
                </div>
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Giường
                </div>
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  linmousine
                </div>
              </div>
            </div>
            <div class="divide"></div>
            <div class="p-4">
              <span>Hàng ghế</span>
              <div class="mt-4 flex flex-wrap gap-2">
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Hàng đầu
                </div>
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Hàng giữa
                </div>
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Hàng cuối
                </div>
              </div>
            </div>
            <div class="divide"></div>
            <div class="p-4">
              <span>Tầng</span>
              <div class="mt-4 flex flex-wrap gap-2">
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Tầng trên
                </div>
                <div
                  class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]"
                >
                  Tầng dưới
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col">
          <div class="hidden text-xl font-medium sm:block">
            <div>Thông tin tìm kiếm</div>
          </div>

          <div>
            <div
              class="no-scrollbar max-h-[84vh] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6"
              v-for="tick in ticketsResult"
              :key="tick.id"
            >
              <div
                v-if="!isPending"
                class="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6"
              >
                <div class="flex items-center justify-between gap-8">
                  <span>
                    {{ tick.time.getHours() }}:{{
                      tick.time.getMinutes()
                    }}</span
                  >
                  <div class="flex w-full items-center">
                    <img
                      src="	https://futabus.vn/images/icons/pickup.svg
"
                      alt=""
                    />
                    <span class="flex-1 border-b-2 border-dotted"></span>
                    <span class="text-center leading-4">
                      14 giờ
                      <br />
                      <span class="text-[13px]">(Asian/Ho Chi Minh)</span>
                    </span>
                    <span class="flex-1 border-b-2 border-dotted"></span>
                    <img
                      src="	https://futabus.vn/images/icons/station.svg"
                      alt=""
                    />
                  </div>
                  <span>{{ hourAdd(tick.time, 14) }}</span>
                </div>
                <div class="mt-3 flex justify-between text-[13px] font-normal">
                  <div class="flex-1">
                    <span class="text-[15px] font-medium"
                      >Bến Xe Trung Tâm {{ tick.from }}</span
                    >
                  </div>
                  <div class="flex-1 text-right">
                    <span class="text-[15px] font-medium"
                      >Bến Xe Trung Tâm {{ tick.to }}</span
                    >
                  </div>
                </div>
                <div class="divide my-3 sm:my-4"></div>
                <div class="flex items-center justify-between">
                  <div class="text-gray flex items-center gap-2 text-sm">
                    <span class="text-[#ef5222]">340.000đ</span>
                    <div
                      class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"
                    ></div>
                    <span>Giường</span>
                  </div>
                  <div
                    type="button"
                    class="text-[#ef5222] h-[32px] text-sm cursor-pointer rounded-[32px] button-default px-[20px] flex items-center justify-center"
                    @click="navigateTo(tick)"
                  >
                    Chọn chuyến
                  </div>
                </div>
              </div>
              <div v-else>Hiện không có chuyến này</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { NPopover, NCheckbox } from "naive-ui";
import { onMounted, ref } from "vue";
import axios from "axios";

import { projectFileStore } from "../configs/firebase";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { useRouter } from "vue-router";
const overlap = ref(false);

const datePicker = ref("");
const dateInPast = ref("");
const today = new Date().toISOString().split("T")[0];
dateInPast.value = today;
const filterProvinces = ref([]);
const tickets = ref([]);
const ticketsResult = ref([]);
const isPending = ref(false);
const selectedProvince1 = ref(null);
const selectedProvince2 = ref(null);
const ProvincesApi = "https://vn-public-apis.fpo.vn/provinces";
const router = useRouter();

axios.get(`${ProvincesApi}/getAll?limit=-1`).then(res => {
  filterProvinces.value = res.data.data.data;
});

const selectProvince1 = item => {
  selectedProvince1.value = item.name;
};

const selectProvince2 = item => {
  selectedProvince2.value = item.name;
};

const fetchTicket = async () => {
  const querry = await getDocs(collection(projectFileStore, "ticket"));

  querry.forEach(item => {
    tickets.value.push(item.data());
  });
};

const hourAdd = (date, hour) => {
  const add = hour * 60 * 60 * 1000;
  date.setTime(date.getTime() + add);
  return `${date.getHours()}:${date.getMinutes()}`;
};

const handleFindTicket = () => {
  const valueDate = document.querySelector("#datePick");
  datePicker.value = valueDate.value;
  const dateConvert = new Date(datePicker.value);

  tickets.value.map(item => {
    for (let i = 0; i < item.data.length; i++) {
      const dateData = new Date(item.data[i].time);

      if (
        selectedProvince1.value == item.data[i].from &&
        selectedProvince2.value == item.data[i].to &&
        dateConvert.toDateString() == dateData.toDateString()
      ) {
        ticketsResult.value.push({
          from: item.data[i].from,
          to: item.data[i].to,
          time: dateData
        });
      } else {
        console.log("Không có chuyến này");
      }
    }
  });
};

const navigateTo = tick => {
  router.push({
    path: "/seat-book",
    query: {
      fromProvince: tick.from,
      toProvince: tick.to,
      time: tick.time
    }
  });
};

onMounted(() => {
  fetchTicket();
});
</script>

<style scoped>
.home-search {
  top: -175px;
  left: 0;
  right: 0;
}

.search-form {
  min-width: 360px;
  max-width: 1128px;
  background: #fff;
  border: 1px solid rgba(239, 82, 34, 6);
  border-radius: 1rem;
  padding: 1.5rem;
  outline: 8px solid rgba(170, 46, 8, 0.1);
}

.switch-location {
  position: absolute;
  z-index: 10;
  cursor: pointer;
  -o-object-fit: contain;
  object-fit: contain;
  transition: 0.3s;
  transform: rotate(0deg);
}

.input-search {
  border: 1px solid #dde2e8;
  padding: 12px 20px;
  border-radius: 8px;
  height: 67px;
}

.input-block {
  padding: 0;
  border: none;
  outline: none;
}
</style>
