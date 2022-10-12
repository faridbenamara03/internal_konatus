<template>
  <div style="width:100%;" :class="{'has-chart': isChartView}">
    <app-echart-stacked-area v-if="!isChartView" :option-data="option" :header-visible="false"
      style="width:100%;height:calc(100vh - 250px)" />
    <div v-if="isChartView">
      <TableComponent />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .sub-main {
    flex: 1;
    text-align: center;
  }
</style>

<script>
import AppEchartStackedArea from '@core/components/charts/echart/AppEchartStackedArea.vue'
import TableComponent from './sub-component/table.vue'

export default {
  components: {
    AppEchartStackedArea,
    TableComponent
  },
  props: {
    isChartView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dark: true,
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      visible: false,
      option: {
        xAxisData: ['W1', 'W2', 'W3', 'W4', 'W5'],
        series: [
          {
            name: 'ENGAGED',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            data: [170, 170, 120, 90, 150],
          },
          {
            name: 'QUOTED',
            type: 'line',
            stack: 'Total',
            color: '#4f964d',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [180, 180, 130, 100, 160],
          },
          {
            name: 'ESTIMATED',
            type: 'line',
            stack: 'Total',
            color: '#186b83',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [160, 160, 110, 80, 140],
          },
          {
            name: 'REQUESTED NOT ENGAGED',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            color: '#554bb8',
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [150, 150, 100, 70, 130],
          },
        ],
      },
    }
  },
}
</script>
