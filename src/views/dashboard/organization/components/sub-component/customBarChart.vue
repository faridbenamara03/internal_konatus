<template>
  <div class="p-2">
    <div class="d-flex">
      <div
        style="width:40px;padding-bottom:20px;"
        class="d-flex flex-column justify-content-between"
      >
        <div
          v-for="(t, i) in yAxisData"
          :key="i"
          style="text-align:end;padding-right:5px"
        >
          {{ t }}
        </div>
      </div>
      <div style="width:calc(100% - 40px);">
        <div
          style="display:flex;justify-content:space-between; border-left: 1px solid white; border-bottom: 1px solid white;"
        >
          <div
            v-for="(t, i) in xAxisData"
            :key="i"
            class="d-flex flex-column justify-content-end"
            :style="`width:${100 / xAxisData.length * 0.8}%;`"
          >
            <div
              v-for="(t1, i1) in teamArr"
              :key="i1"
              class="tool-tip"
              :style="`height:${chartData[i][i1].engaged / yAxisData[0] * 260}px;cursor:pointer;width:100%;background:${genBgColor(chartData[i][i1].engaged, chartData[i][i1].extCap)}${selectedTeam !== null && selectedTeam !== chartData[i][i1].team ? '44' : 'ff'};
                                                                            border-top:2px solid #fff;border-right:2px solid #fff;border-left:2px solid #fff;`"
              @click="onSubClick(chartData[i][i1].team)"
            >
              <div class="tool-tiptext">{{ chartData[i][i1].team }} ({{ chartData[i][i1].engaged }} /
                {{ chartData[i][i1].extCap }})</div>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between">
          <div
            v-for="(t, i) in xAxisData"
            :key="i"
            :style="`width:${100 / xAxisData.length * 0.8}%;text-align:center;border-radius:4px;margin-top:4px;background:${t === 'w2' ? '#7c1615' : null};`"
          >
            <b>{{ t }}</b>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 w-100">
      <div class="containerSelf">
        <div style="width: 250px" />
        <div
          class="containerSelf p-0"
          style="width: calc(100% - 250px)"
        >
          <template v-for="(item, index) in xAxisData">
            <div
              v-if="index === 1"
              :key="index"
              class="sub-main"
              style="border-radius: 5px; background-color: #7c1615; padding-top:5px; padding-bottom: 5px;min-width:130px;"
            >
              <b style="font-size: 14px; color: white;">{{ item }}</b>
            </div>
            <div
              v-else
              :key="index"
              class="sub-main"
              style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;min-width:130px;"
            >
              <b style="font-size: 14px; color: white;">{{ item }}</b>
            </div>
          </template>
        </div>
      </div>
      <div class="containerSelf">
        <div style="width: 250px" />
        <div
          class="containerSelf p-0"
          style="width: calc(100% - 250px)"
        >
          <div
            v-for="(item, i1) in labelData"
            :key="i1"
            class="sub-main"
            style="padding-top:5px; padding-bottom: 5px;min-width:130px;font-size:13px;"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div
        v-for="(team, i2) in teamArr"
        :key="i2"
        class="containerSelf"
        style="font-size: 16px; font-weight: bold;"
      >
        <div
          class="pt-1 pb-1 rounded-left pl-1 pr-1"
          style="margin: 0.5px; background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 250px;font-size:13px;"
        >
          <div>
            {{ team }}
          </div>
          <div>
            <feather-icon icon="ChevronUpIcon" />
          </div>
        </div>
        <div
          class="containerSelf p-0"
          style="width: calc(100% - 250px)"
        >
          <div
            v-for="(item_child, k) in xAxisData"
            :key="item_child"
            v-b-modal.modal-no-backdrop
            class="sub-main pt-1 pb-1"
            :style="`margin:0.5px;background-color:${genBgColor(weeklyEngagedData[k][i2], extCapData[i2])};cursor:pointer;min-width:130px;font-size:13px;`"
          >
            {{ weeklyEstimatedData[k][i2] }} | {{ weeklyEngagedData[k][i2] }} | {{ extCapData[i2] }}
          </div>
        </div>
      </div>
      <div class="containerSelf m-2">
        <b style="font-size: 17px; color: #A6E4FF">TOTALS</b>
      </div>
      <div
        v-for="(totalLabel, jndex) in totalLabelData"
        :key="jndex"
        class="containerSelf"
      >
        <div style="width: 250px">
          <b style="font-size: 13px; color: #A6E4FF">{{ totalLabel }}</b>
        </div>
        <div
          class="containerSelf p-0"
          style="width: calc(100% - 250px)"
        >
          <div
            v-for="(item1, index) in xAxisData"
            :key="index"
            class="sub-main"
            :style="`padding-top:5px;padding-bottom: 5px;font-weight: bold;min-width:130px;font-size:13px;`"
          >
            {{ parseInt(weeklyTotalData[jndex][index] * 100, 10) / 100 }} / {{ capacity }}
            (<span :style="`color:${genFontColor(weeklyTotalData[jndex][index], capacity)}`">{{
              parseInt(weeklyTotalData[jndex][index] * 100 / capacity, 10) }}%</span>)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}

.tool-tip {
  position: relative;
}

.tool-tip .tool-tiptext {
  text-align: center;
  width: 200px;
  visibility: hidden;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  z-index: 99;
}

.tool-tip:hover .tool-tiptext {
  visibility: visible;
}
</style>

<script>
// import { BButton } from 'bootstrap-vue'

export default {
  components: {
    // BButton
  },
  props: {
  },
  data() {
    return {
      labelData: ['Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap'],
      teamArr: ['Team FP-A', 'Team FP-B', 'Team FP-C', 'Team FP-D'],
      extCapData: [175, 180, 195, 190],
      weelyQuotedData: [0, 0, 0, 0, 50, 75, 125, 45, 73],
      weeklyEstimatedData: [
        [169, 169, 180, 193],
        [169, 175, 190, 150],
        [158, 132, 150, 195],
        [168, 178, 195, 160],
        [135, 168, 162, 160],
        [152, 135, 160, 190],
        [178, 179, 195, 140],
        [160, 155, 146, 139],
        [160, 168, 165, 162]
      ],
      weeklyEngagedData: [
        [180, 169, 178, 196],
        [50, 175, 190, 150],
        [160, 130, 145, 185],
        [90, 96, 190, 155],
        [130, 170, 165, 88],
        [160, 145, 162, 191],
        [138, 89, 195, 150],
        [40, 156, 142, 139],
        [160, 178, 185, 162]
      ],
      capacity: 680,
      totalLabelData: ['Real Est./Capacity', 'Engaged/Capacity', 'Engaged+Quote/Capacity'],
      colorsArr: ['#0641ff', '#ffffff00', '#cd7700', '#a11414'],
      selectedTeam: null,
    }
  },
  computed: {
    weeklyTotalData() {
      const engPlusQData = []
      this.weeklyTotalEngaged.forEach((t, i) => {
        engPlusQData.push(t + this.weelyQuotedData[i])
      })
      return [this.weeklyTotalEstimated, this.weeklyTotalEngaged, engPlusQData]
    },
    weeklyTotalEstimated() {
      const dt = []
      this.weeklyEstimatedData.forEach(t => {
        let sm = 0
        t.forEach(t1 => {
          sm += t1
        })
        dt.push(sm)
      })
      return dt
    },
    weeklyTotalEngaged() {
      const dt = []
      this.weeklyEngagedData.forEach(t => {
        let sm = 0
        t.forEach(t1 => {
          sm += t1
        })
        dt.push(sm)
      })
      return dt
    },
    yAxisData() {
      let max = -9999
      this.chartData.forEach(t => {
        let tv = 0
        t.forEach(t1 => {
          tv += parseInt(t1.engaged, 10)
        })
        if (tv > max) max = tv
      })
      return [max, parseInt(0.75 * max, 10), parseInt(0.5 * max, 10), parseInt(0.25 * max, 10), 0]
    },
    thisWeekNum() {
      const today = new Date()
      const weekNumber = this.getWeekNumber(today)
      return weekNumber
    },
    xAxisData() {
      return ['w1', 'w2', 'w3', 'w4', 'w5']
      // return this.$store.state.globalState.customChartXLabel
    },
    chartData() {
      const dt = []
      for (let i = 0; i < this.xAxisData.length; i += 1) {
        const pdt = []
        for (let j = 0; j < this.teamArr.length; j += 1) {
          pdt.push(
            {
              estimated: this.weeklyEstimatedData[i][j],
              engaged: this.weeklyEngagedData[i][j],
              extCap: this.extCapData[j],
              team: this.teamArr[j]
            }
          )
        }
        dt.push(pdt)
      }
      return dt
    },
  },
  methods: {
    shuffleArray(param) {
      const array = [...param]
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    onSubClick(teamName) {
      if (teamName === this.selectedTeam) {
        this.selectedTeam = null
      } else {
        this.selectedTeam = teamName
      }
    },
    getWeekNumber(date) {
      const year = date.getFullYear()
      const firstDayOfYear = new Date(year, 0, 1)
      const days = Math.round((date - firstDayOfYear) / (1000 * 60 * 60 * 24))
      const weekNumber = Math.ceil((days + firstDayOfYear.getDay() + 1) / 7)
      return weekNumber
    },
    genBgColor(engaged, capacity) {
      let color = '#343434'
      if (engaged <= 0.6 * capacity) color = '#02283a'
      else if (engaged <= capacity && engaged >= 0.9 * capacity) color = '#744600'
      else if (engaged > capacity) color = '#560b0a'
      return color
    },
    genFontColor(engaged, capacity) {
      let color = null
      if (engaged <= 0.6 * capacity) color = '#02283a'
      else if (engaged <= capacity && engaged >= 0.9 * capacity) color = '#744600'
      else if (engaged > capacity) color = '#560b0a'
      return color
    }
  },
}
</script>
