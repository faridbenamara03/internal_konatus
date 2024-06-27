<<<<<<< HEAD
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
    <div v-if="isManageView && dataType == 'team'">
      <test :team-id="teamId" />
    </div>
    <div v-if="isManageView && dataType == 'job'">
      <testJob :team-id="teamId" />
    </div>
  </div>
</template>
<script>
import TableComponent from './sub-component/table.vue'
import CustomBarChart from './sub-component/customBarChart.vue'
import test from './sub-component/test.vue'
import testJob from './sub-component/testJob.vue'

export default {
  components: {
    TableComponent,
    CustomBarChart,
    test,
    testJob
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
    teamId: {
      type: Number,
      default: 1,
    },
    dataType: {
      type: String,
      default: "echoue"
    }
  },
  computed: {
    typerecup() {
      return this.$store.state.teamState.teamDemandData
    }
  },
  watch: {
    isChartView(newVal) {
      console.log('isChartView changed to:', newVal)
    },
    isManageView(newVal) {
      console.log('isManageView changed to:', newVal)
    }
  },
}
</script>
=======
<template>
  <div
    style="width:100%;"
    :class="{ 'has-chart': isChartView }"
  >
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
>>>>>>> f0631ccccfaa58e062e9d14e7658186752af59b8
