<<<<<<< HEAD
<template>
  <b-card title="Mobile Comparison">
    <vue-apex-charts
      type="radar"
      height="400"
      :options="apexChatData.radarChart.chartOptions"
      :series="apexChatData.radarChart.series"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    BCard,
    VueApexCharts,
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
=======
<template>
  <b-card title="Mobile Comparison">
    <vue-apex-charts
      type="radar"
      height="400"
      :options="apexChatData.radarChart.chartOptions"
      :series="apexChatData.radarChart.series"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    BCard,
    VueApexCharts,
  },
  data() {
    return {
      apexChatData,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
