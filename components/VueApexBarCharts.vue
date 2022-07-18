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
    colors: ['#1A73E8', '#B32824', 'rgb(0, 255, 34)']
  },
  xaxis: {
    categories: [
      "Criadas",
      "Completas",
      "Deletadas",
    ],
  },
  title: { text: "Gráfico 1", align: "center" },
};

export default {
  components: { apexchart: VueApexCharts },

  data() {
    return {
      step: 1,
      chartOptions: { ...chartOptions },
      chartData: [],
    };
  },

  created() {
    this.chartData = [{
      data: [
        this.$store.state.dashboard.tasks.length,
        this.$store.state.dashboard.tasksCompleteds.length,
        this.$store.state.dashboard.tasksDeleteds,
      ] 
    }];
  },
};
</script>
<style>
.container-apex-bar {
  margin-left: 60px;
}
</style>
