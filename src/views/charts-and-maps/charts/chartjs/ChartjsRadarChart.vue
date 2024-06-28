<<<<<<< HEAD
<template>
  <b-card title="Radar Chart">
    <chartjs-component-radar-chart
      :height="355"
      :data="chartjsData.radarChart.data"
      :options="chartjsData.radarChart.options"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import ChartjsComponentRadarChart from './charts-components/ChartjsComponentRadarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentRadarChart,
    BCard,
  },
  data() {
    return {
      chartjsData,
    }
  },
}
</script>
=======
<template>
  <b-card title="Radar Chart">
    <chartjs-component-radar-chart
      :height="355"
      :data="chartjsData.radarChart.data"
      :options="chartjsData.radarChart.options"
    />
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import ChartjsComponentRadarChart from './charts-components/ChartjsComponentRadarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentRadarChart,
    BCard,
  },
  data() {
    return {
      chartjsData,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
