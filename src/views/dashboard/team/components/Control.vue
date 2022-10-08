<template>
  <div style="width:100%;">
    <app-echart-stacked-area :option-data="option" :header-visible="false" style="width:100%;height:calc(100vh - 250px)" />
  </div>
</template>

<script>
import AppEchartStackedArea from '@core/components/charts/echart/AppEchartStackedArea.vue'

export default {
  components: {
    AppEchartStackedArea,
  },
  data() {
    return {
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
