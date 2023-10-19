<template>
  <div>
    <nav-admin />
    <div class="ml-72">
      <div class="mt-12">
        <div class="min-h-[77px] min-w-[300px]">
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

      <div class="">
        <div class="relative aspect-[3/2] w-full max-w-[500px]">
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

      <div class="absolute top-0 right-12 mt-32">
        <div class="flex items-center mb-10">
          <div class="flex items-center">
            <div>
              <img
                src="	https://storage.googleapis.com/futa-busline-cms-dev/Group_662c4422ba/Group_662c4422ba.svg"
                alt=""
              />
            </div>

            <div class="flex flex-col">
              <div class="flex flex-col">
                <div class="text-2xl font-semibold text-black sm:text-3xl ml-4">
                  Hơn 20 triệu
                  <span class="ml-1 text-base">Lượt khách</span>
                </div>

                <span class="text-[#637280] ml-4"
                  >FUTABUSLINE phục vụ hơn 20 triệu lượt khách bình quân 1 năm
                  trên toàn quốc</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center mb-10">
          <div class="flex items-center">
            <div>
              <img
                src="https://storage.googleapis.com/futa-busline-cms-dev/Store_55c0da8bd7/Store_55c0da8bd7.svg"
                alt=""
              />
            </div>

            <div class="flex flex-col">
              <div class="flex flex-col">
                <div class="text-2xl font-semibold text-black sm:text-3xl ml-4">
                  Hơn 350
                  <span class="ml-1 text-base">Phòng vé - Bưu cục</span>
                </div>

                <span class="text-[#637280] ml-4"
                  >FUTABUSLINE có hơn 350 phòng vé, trạm trung chuyển, bến
                  xe,... trên toàn hệ thống</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center">
            <div>
              <img
                src="	https://storage.googleapis.com/futa-busline-cms-dev/Group_2_75b5ed1dfd/Group_2_75b5ed1dfd.svg"
                alt=""
              />
            </div>

            <div class="flex flex-col">
              <div class="flex flex-col">
                <div class="text-2xl font-semibold text-black sm:text-3xl ml-4">
                  Hơn 1,000
                  <span class="ml-1 text-base">Chuyến xe</span>
                </div>

                <span class="text-[#637280] ml-4"
                  >FUTABUSLINE phục vụ hơn 1,000 chuyến xe đường dài và liên
                  tỉnh mỗi ngày</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import NavAdmin from "./NavAdmin.vue";
</script>
