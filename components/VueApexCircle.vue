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
    width: 600
  },  
  fill: {
    colors: ['#1A73E8', '#B32824', 'rgb(0, 255, 34)']
  },
  labels: ['Criadas', 'Completas', 'Deletadas'],
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
  props: ['infos'],
  mounted() {
      this.series.splice(0, this.series.length, this.series.push(
        this.infos.tasks.length,
        this.infos.tasksCompleteds.length,
        this.infos.tasksDeleteds
      ))
  },
  watch: {
    infos() {
      this.series.splice(0, this.series.length, this.series.push(
        this.infos.tasks.length,
        this.infos.tasksCompleteds.length,
        this.infos.tasksDeleteds
      ))
     
    }
  },
};
</script>
<style>
.container-apex {
  margin-top: 100px;
}
</style>
