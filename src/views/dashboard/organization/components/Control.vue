<<<<<<< HEAD
<template>
  <div
    style="width:100%;overflow: auto;"
    :class="{ 'has-chart': isChartView }"
  >
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
=======
<template>
  <div
    style="width:100%;overflow: auto;"
    :class="{ 'has-chart': isChartView }"
  >
    <template v-if="isChartView && !isManageView">
      <CustomBarChart />
    </template>
    <div v-if="!isChartView && !isManageView">
      <TableComponent />
    </div>
    <div v-if="isManageView">
      <test
        :unit-id="unitId"
      />
    </div>
  </div>
</template>
<script>
import TableComponent from './sub-component/table.vue'
import CustomBarChart from './sub-component/customBarChart.vue'
import test from './sub-component/test2.vue'

export default {
  components: {
    TableComponent,
    CustomBarChart,
    test
  },
  props: {
    isChartView: {
      type: Boolean,
      default: false,
    },
    isManageView: {
      type: Boolean,
      default: false,
    },
    unitId: {
      type: Number,
      default: 1,
    }
  },
  watch: {
    isChartView(newVal) {
      console.log('isChartView changed to:', newVal)
    },
    isManageView(newVal) {
      console.log('isManageView changed to:', newVal)
    }
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
