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
  props: ['infos'],
  data() {
    return {
      step: 1,
      chartOptions: { ...chartOptions },
      chartData: [],
    };
  },
  mounted() {
    this.chartData = [{
      data: [
        this.infos.tasks.length,
        this.infos.tasksCompleteds.length,
        this.infos.tasksDeleteds
      ] 
    }];
  },
  watch: {
    infos() {
      this.chartData = [{
        data: [
          this.infos.tasks.length,
          this.infos.tasksCompleteds.length,
          this.infos.tasksDeleteds
        ] 
      }];
    }
  },
};
</script>
<style>

</style>
