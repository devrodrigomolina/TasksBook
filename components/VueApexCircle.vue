<template>
  <div class="container-apex">
    <div class="col-lg-12">
      <apexchart
        type="donut"
        height="350"
        :options="chartOptions"
        :series="series"
        ref="chartData"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export const chartOptions = {
  chart: {
    type: "donut",
    height: 600,
    width: 600,
  },
  fill: {
    colors: ["#1350a0c0", "#29A19C", "#b3292483"],
  },
  labels: ["Criadas","Completas", "Deletadas" ],
  title: { text: "Gráfico 2", align: "center" },
};

export default {
  components: { apexchart: VueApexCharts },

  data() {
    return {
      step: 1,
      chartOptions: { ...chartOptions },
      series: [],
    };
  },
  props: ["infos"],
  mounted() {
    this.series = [
      this.tasksChart,
      this.tasksCompletedsChart,
      this.tasksDeletedsChart,
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
      this.series = [
        this.tasksChart,
        this.tasksCompletedsChart,
        this.tasksDeletedsChart,
      ];
    },
  },
};
</script>
<style>
.container-apex {
  margin-top: 100px;
}
</style>
