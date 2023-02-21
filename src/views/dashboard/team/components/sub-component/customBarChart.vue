<template>
  <div class="p-2">
    <div class="d-flex">
      <div style="width:40px;padding-bottom:20px;" class="d-flex flex-column justify-content-between">
        <div v-for="(t, i) in yAxisData" :key="i">
          {{ t }}
        </div>
      </div>
      <div style="width:calc(100% - 40px);">
        <div
          style="display:flex;justify-content:space-between; border-left: 1px solid white; border-bottom: 1px solid white;">
          <div v-for="(t, i) in xAxisData" :key="i" class="d-flex flex-column justify-content-end"
            :style="`width:${100 / xAxisData.length * 0.8}%;`">
            <div v-for="(t1, i1) in arr" v-b-tooltip.hover :title="`${teamArr[parseInt(Math.random() * 4, 10)]}`"
              :style="`height:${parseInt(Math.random() * 80 + 40, 10)}px;width:100%;background:${colorsArr[parseInt(Math.random() * 4, 10)]};border:1px solid #222`"
              :key="i1" />
          </div>
        </div>
        <div style="display:flex;justify-content:space-between">
          <div v-for="(t, i) in xAxisData" :key="i" :style="`width:${100 / xAxisData.length * 0.8}%;text-align:center`">
            {{ t }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
// import {
//   BTooltip
// } from 'bootstrap-vue'

export default {
  components: {
    // BTooltip
  },
  props: {
  },
  computed: {
  },
  data() {
    return {
      colorsArr: ['#ebebeb', '#00c4ff', '#dbdf00', '#ff2f00'],
      arr: [1, 2, 3, 4, 5],
      xAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      yAxisData: [1500, 1000, 500, 0],
      teamArr: ['Paris Dev Team', 'Sofia Design Team', 'Paris App Team', 'Sofia Web Team']
    }
  },
}
</script>
