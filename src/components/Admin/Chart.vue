<template>
  <nav-admin />
  <div class="ml-72">
    <canvas
      style="
        display: block;
        box-sizing: border-box;
        height: 400px;
        width: 800px;
      "
      ref="chartCanvas"
      width="800"
      height="400"
    ></canvas>
  </div>
</template>

<script setup>
import NavAdmin from "../Admin/NavAdmin.vue";
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
const chartCanvas = ref(null);
let chart;

onMounted(() => {
  const ctx = chartCanvas.value.getContext("2d");
  chart = new Chart(ctx, config);
  return chart;
});
const data = {
  labels: [
    "22/09/2023",
    "23/09/2023",
    "25/09/2023",
    "26/09/2023",
    "28/09/2023",
    "30/09/2023"
  ],
  datasets: [
    {
      label: "Thống kê số lượng vé đặt theo ngày",
      data: [10, 30, 20, 15, 25, 18],
      borderColor: "red",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      pointStyle: "circle",
      pointRadius: 10,
      pointHoverRadius: 15
    }
  ]
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Point Style: false"
      }
    }
  }
};

const actions = [
  {
    name: "pointStyle: circle (default)",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "circle";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: cross",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "cross";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: crossRot",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "crossRot";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: dash",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "dash";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: line",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "line";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: rect",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "rect";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: rectRounded",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "rectRounded";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: rectRot",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "rectRot";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: star",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "star";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: triangle",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = "triangle";
      });
      chart.update();
    }
  },
  {
    name: "pointStyle: false",
    handler: chart => {
      chart.data.datasets.forEach(dataset => {
        dataset.pointStyle = false;
      });
      chart.update();
    }
  }
];
</script>
