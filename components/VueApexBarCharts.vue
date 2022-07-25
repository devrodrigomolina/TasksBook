<template>
  <div class="container-apex-bar">
    <div class="col-lg-12">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="chartData"
        ref="chartData"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export const chartOptions = {
  chart: {
    type: "bar",
  },
  fill: {
    colors: ["#1A73E8", "#B32824", "rgb(0, 255, 34)"],
  },
  xaxis: {
    categories: ["Ativas", "Completas", "Deletadas"],
  },
  title: { text: "Gráfico 1", align: "center" },
};

export default {
  components: { apexchart: VueApexCharts },
  props: ["infos"],
  data() {
    return {
      step: 1,
      chartOptions: { ...chartOptions },
      chartData: [],
    };
  },
  mounted() {
    this.chartData = [
      {
        data: [
          this.tasksChart,
          this.tasksCompletedsChart,
          this.tasksDeletedsChart,
        ],
      },
    ];
  },
  computed: {
    tasksChart() {
      return this.infos.tasks.length;
    },
    tasksCompletedsChart() {
      return this.infos.tasksCompleteds.length;
    },
    tasksDeletedsChart() {
      return this.infos.tasksDeleteds;
    },
  },
  watch: {
    tasksChart() {
      this.chartData = [
        {
          data: [
            this.tasksChart,
            this.tasksCompletedsChart,
            this.tasksDeletedsChart,
          ],
        },
      ];
    },
  },
};
</script>
<style></style>
