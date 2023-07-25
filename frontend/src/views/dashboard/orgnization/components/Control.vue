<template>
  <div style="width:100%;overflow: auto;" :class="{ 'has-chart': isChartView }">
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
