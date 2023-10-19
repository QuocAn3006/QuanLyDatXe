<template>
  <nav-admin />
  <div class="ml-72 mt-28 flex items-center justify-around">
    <div class="relative w-[400px] h-[400px]">
      <canvas ref="chartCanvas1"></canvas>
    </div>

    <div class="relative w-[400px] h-[400px]">
      <canvas ref="chartCanvas2"></canvas>
    </div>
  </div>
</template>

<script setup>
import NavAdmin from "../Admin/NavAdmin.vue";
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
const chartCanvas1 = ref(null);
const chartCanvas2 = ref(null);
let chart1;
let chart2;

onMounted(() => {
  const ctx1 = chartCanvas1.value.getContext("2d");
  const ctx2 = chartCanvas2.value.getContext("2d");

  chart1 = new Chart(ctx1, config1);
  chart2 = new Chart(ctx2, config2);

  return chart1, chart2;
});
const data1 = {
  labels: ["Tháng 9", "Tháng 8", "Tháng 10"],
  datasets: [
    {
      label: "Thống kê theo tháng",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"
      ],
      data: [72, 17, 11],
      hoverOffset: 4
    }
  ]
};

const data2 = {
  labels: ["Quý 1", "Quý 2", "Quý 3"],
  datasets: [
    {
      label: "Thống kê theo năm",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)"
      ],
      data: [5, 10, 85],
      hoverOffset: 4
    }
  ]
};

const config1 = {
  type: "pie",
  data: data1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Thống Kê Theo Tháng"
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            let value = context.dataset.data[context.dataIndex];
            return label + ": " + value + "%";
          }
        }
      }
    },
    scales: {}
  }
};

const config2 = {
  type: "pie",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Thống Kê Theo Năm"
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            let value = context.dataset.data[context.dataIndex];
            return label + ": " + value + "%";
          }
        }
      }
    },
    scales: {}
  }
};
</script>
