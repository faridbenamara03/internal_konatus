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
