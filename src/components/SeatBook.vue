<template>
  <div>
    <Header v-if="!meta.isShowHeader" />

    <div class="layout pb-8 sm:block">
      <div class="flex w-full flex-col gap-6 bg-white pt-0 sm:flex-row sm:pt-8">
        <div class="flex flex-col">
          <div class="flex w-full flex-col rounded-xl border">
            <div class="flex justify-between">
              <div class="flex-1">
                <div
                  class="min-w-sm mx-auto flex w-[100%] max-w-2xl flex-col px-3 py-1 sm:mx-0 sm:w-auto sm:px-6"
                >
                  <div
                    class="flex max-w-xs items-start justify-between pt-5 text-xl font-medium text-black"
                  >
                    <p class="flex flex-col">Chọn ghế</p>
                    <div class="cursor-pointer text-sm text-blue-400 underline">
                      Thông tin xe
                    </div>
                  </div>

                  <div
                    class="my-4 flex justify-center items-center text-center font-medium gap-6"
                  >
                    <div class="flex">
                      <span class="text-sm"></span>
                      <table>
                        <tbody>
                          <tr
                            class="flex items-center justify-between gap-1"
                            v-for="(x, indexR) in row"
                            :key="indexR"
                          >
                            <td
                              class="relative mt-1 flex justify-center text-center cursor-pointer"
                              v-for="(y, indexC) in cols"
                              :key="indexC"
                            >
                              <img
                                :src="getSeatImage(indexC, indexR)"
                                alt=""
                                width="32"
                                class="seat"
                                v-if="!isAisle(indexC, indexR)"
                                @click="onSeatSelected(indexC, indexR)"
                              />

                              <span
                                class="absolute text-[10px] text-[#A2ABB3] false"
                                v-if="!isAisle(indexC, indexR)"
                              >
                                {{ getSeatLabel(indexC, indexR) }}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      class="ml-4 mt-5 flex flex-col gap-4 text-[13px] font-normal"
                    >
                      <span class="mr-8 flex items-center">
                        <div
                          class="mr-2 h-4 w-4 rounded bg-[#D5D9DD] border-[#C0C6CC]"
                        ></div>
                        Đã bán
                      </span>

                      <span class="mr-8 flex items-center">
                        <div
                          class="mr-2 h-4 w-4 rounded bg-[#DEF3FF] border-[#96C5E7]"
                        ></div>
                        Còn trống
                      </span>

                      <span class="flex items-center">
                        <div
                          class="mr-2 h-4 w-4 rounded bg-[#FDEDE8] border-[#F8BEAB]"
                        ></div>
                        Đang chọn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="divide py-[2px]"></div>

            <div
              class="flex w-full flex-col gap-6 px-6 py-4 text-[15px] sm:flex-row"
            >
              <div class="flex flex-1 flex-col">
                <p class="text-xl font-medium text-black">
                  Thông tin khách hàng
                </p>
                <form
                  action=""
                  class="mt-6"
                  @submit.prevent="onSubmit()"
                >
                  <div class="flex w-full flex-col">
                    <div class="flex flex-col mb-6">
                      <label for="">Họ và tên</label>

                      <div class="min-h-[32px] flex items-center max-w-full">
                        <span
                          class="border border-solid rounded-lg border-[#dde2e8] h-11 p-2 mt-1 w-full"
                        >
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Họ và tên"
                            class="outline-none ml-2"
                            v-model="inputHoten"
                          />
                        </span>
                      </div>
                      <p class="text-red-500">{{ errors.hoTen }}</p>
                    </div>

                    <div class="flex flex-col mb-6">
                      <label for="">Số điện thoại</label>

                      <div class="min-h-[32px] flex items-center max-w-full">
                        <span
                          class="border border-solid rounded-lg border-[#dde2e8] h-11 p-2 mt-1 w-full"
                        >
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Số Điện Thoại"
                            class="outline-none ml-2"
                            v-model="inputSDT"
                          />
                        </span>
                      </div>
                      <p class="text-red-500">{{ errors.soDT }}</p>
                    </div>

                    <div class="flex flex-col mb-6">
                      <label for="">Email</label>

                      <div class="min-h-[32px] flex items-center max-w-full">
                        <span
                          class="border border-solid rounded-lg border-[#dde2e8] h-11 p-2 mt-1 w-full"
                        >
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Email"
                            class="outline-none ml-2"
                            v-model="inputEmail"
                          />
                        </span>
                      </div>
                      <p class="text-red-500">{{ errors.email }}</p>
                    </div>
                  </div>
                </form>
              </div>

              <div
                class="content-editor flex h-full flex-1 flex-col text-justify text-sm"
              >
                <p class="mb-6 text-center text-base font-medium text-orange">
                  ĐIỀU KHOẢN VÀ LƯU Ý
                </p>
                <div>
                  <p>
                    (*)
                    <span style="color: rgb(0, 0, 0)">
                      Quý khách vui lòng có mặt tại bến xuất phát của xe trước
                      ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã
                      thanh toán vé thành công có chứa mã vé được gửi từ hệ
                      thống FUTA BUS LINE.
                    </span>
                    Vui lòng liên hệ Trung tâm tổng đài
                    <a
                      href=""
                      class="text-[#ef5222]"
                      >1900 6067</a
                    >
                    để được hỗ trợ.
                  </p>

                  <p style="text-align: justify">
                    (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ
                    Tổng đài trung chuyển
                    <a
                      href=""
                      class="text-[#ef5222]"
                      >1900 6067</a
                    >
                    trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những
                    điểm xe trung chuyển không thể tới được.
                  </p>
                </div>
              </div>
            </div>

            <div class="divide py-[2px]"></div>

            <div class="flex items-center p-6">
              <div class="flex flex-auto items-center justify-end">
                <button
                  class="text-[#ef5222] h-[32px] text-sm cursor-pointer rounded-[32px] border border-solid border-[#c0c6cc] px-[20px] flex items-center justify-center mr-2"
                >
                  Hủy
                </button>
                <button
                  class="text-white h-[32px] text-sm cursor-pointer rounded-[32px] bg-[#f2754e] px-[20px] flex items-center justify-center"
                  @click="onSubmit()"
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto flex min-w-[345px] flex-col gap-6">
          <div
            class="w-full rounded-xl border border-[#DDE2E8] px-4 py-3 text-[15px]"
          >
            <p class="icon-orange flex gap-4 text-xl font-medium text-black">
              Thông tin lượt đi
            </p>

            <div class="mt-4 flex justify-between">
              <span class="text-gray w-20">Tuyến xe</span>
              <span class="text-right text-black"
                >{{ route.query.fromProvince }} ->
                {{ route.query.toProvince }}</span
              >
            </div>

            <div class="mt-1 flex items-center justify-between">
              <span class="text-gray w-28">Thời gian</span>
              <span class="text-[#00613D]"
                >{{ date.getHours() }}:{{ date.getMinutes() }}
                {{ date.getDate() }}-{{ date.getMonth() + 1 }}-{{
                  date.getFullYear()
                }}</span
              >
            </div>

            <div class="mt-1 flex items-center justify-between">
              <span class="text-gray w-28">Số lượng ghế</span>
              <span class="text-[#00613D]">{{ getSelectedSeatCount() }}</span>
            </div>

            <div class="mt-1 flex items-center justify-between">
              <span class="text-gray w-28">Số ghế</span>
              <div
                v-for="seatLabel in getSelectedSeatLabel()"
                :key="seatLabel"
              >
                <span class="text-[#00613D] seatDetail">{{ seatLabel }}</span>
              </div>
            </div>

            <div class="mt-1 flex items-center justify-between">
              <span class="text-gray w-28">Tổng tiền lượt đi</span>
              <span class="text-[#00613D]">{{ totalTicket() }} đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer v-if="!meta.isShowHeader" />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useMessage } from "naive-ui";
import { useUser } from "../composables/useUser";
import useCollection from "../composables/useCollection";
import { doc } from "firebase/firestore";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const selectedSeat = ref([]);
const seatPayment = ref([]);
const row = 6;
const cols = 5;
const inputHoten = ref("");
const inputEmail = ref("");
const inputSDT = ref("");
const seatInfo = ref({});
const route = useRoute();
const meta = computed(() => route.meta);
const date = new Date(route.query.time);
const seatComplete = ref(false);
const message = useMessage();

const success = () => {
  message.success("Đặt vé thành công");
};
const isAisle = (c, r) => {
  if (c == 1) {
    if (r >= 0 && r <= 4) {
      return true;
    }
    return false;
  }

  if (c == 3) {
    if (r >= 0 && r <= 4) {
      return true;
    }
    return false;
  }
};

const isSeatSelected = (c, r) => {
  return (
    selectedSeat.value.filter(seat => seat.column === c && seat.row === r)
      .length > 0
  );
};

const isSeatPayment = (c, r) => {
  return (
    seatPayment.value.filter(seat => seat.column === c && seat.row === r)
      .length > 0
  );
};
const getSeatImage = (c, r) => {
  if (isSeatSelected(c, r)) {
    return "https://futabus.vn/images/icons/seat_selecting.svg";
  }
  if (isSeatPayment(c, r)) {
    return "https://futabus.vn/images/icons/seat_disabled.svg";
  }

  return "https://futabus.vn/images/icons/seat_active.svg";
};

const getSeatLabel = (c, r) => {
  const rowLabel = String.fromCharCode(65 + r); // Chuyển đổi chỉ số dòng thành chữ cái (A, B, C, ...)
  const seatNumber = c + 1; // Chỉ số ghế bắt đầu từ 1
  if (!isAisle(c, r)) {
    return `${rowLabel}${seatNumber.toString().padStart(2, "0")}`; // Kết hợp chữ cái dòng và số ghế
  }
};

const getSelectedSeatLabel = () => {
  return selectedSeat.value.map(seat => getSeatLabel(seat.column, seat.row));
};

const getSelectedSeatCount = () => {
  return selectedSeat.value.length;
};

const totalTicket = () => {
  return (selectedSeat.value.length * 340000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const onSeatSelected = (c, r) => {
  if (seatComplete.value) {
    return;
  }
  if (isSeatSelected(c, r)) {
    selectedSeat.value = selectedSeat.value.filter(
      seat => !(seat.column === c && seat.row === r)
    );
  } else if (selectedSeat.value.length < 5) {
    selectedSeat.value.push({ column: c, row: r, status: "selected" });
  } else {
    message.error("Không được chọn quá 5 ghế");
  }

  seatInfo.value = {
    seatLabel: getSelectedSeatLabel()
  };
};

const { getUser } = useUser();
const { error, addRecord } = useCollection("orders");
const { user } = getUser();
const errors = ref({});
const formValid = () => {
  errors.value = {};
  if (!inputHoten.value) {
    errors.value.hoTen = "Vui lòng nhập đầy đủ họ tên";
  }

  if (!inputSDT.value) {
    errors.value.soDT = "Vui lòng nhập đầy số điện thoại";
  }

  if (!inputEmail.value) {
    errors.value.email = "Vui lòng nhập đầy email";
  }
};
const onSubmit = async () => {
  formValid();

  if (Object.keys(errors.value).length === 0) {
    const order = {
      fullName: inputHoten.value,
      phoneNumber: inputSDT.value,
      email: inputEmail.value,
      seats: seatInfo.value,
      total: totalTicket()
    };
    await addRecord(order);
    if (selectedSeat.value.length > 0) {
      seatPayment.value = selectedSeat.value.map(seat => ({
        ...seat,
        status: "payment"
      }));
    }
    selectedSeat.value = [];

    seatPayment.value.forEach(seat => {
      const col = seat.column;
      const row = seat.row;
      if (isSeatPayment(col, row)) {
        getSeatImage(col, row);
      }
    });
    success();
    seatComplete.value = true;
  }
};
</script>
