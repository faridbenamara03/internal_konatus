<template>
  <div style="width:100%;" :class="{ 'has-chart': isChartView }">
    <!-- <app-echart-stacked-area v-if="isChartView" :option-data="option" :header-visible="false"
      style="width:100%;height:calc(100vh - 400px)" /> -->
    <template v-if="isChartView">
      <CustomBarChart />
    </template>
    <div v-if="!isChartView">
      <TableComponent />
    </div>
  </div>
</template>

<script>
import TableComponent from './sub-component/table.vue'
import CustomBarChart from './sub-component/customBarChart.vue'

export default {
  components: {
    TableComponent,
    CustomBarChart
  },
  props: {
    isChartView: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
