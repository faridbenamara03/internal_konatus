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
              v-for="(t1, i1) in skillsetArr"
              :key="i1"
              class="tool-tip"
              :style="`height:${chartData[i][i1].engaged / yAxisData[0] * 260}px;cursor:pointer;width:100%;background:${genBgColor(chartData[i][i1].engaged, chartData[i][i1].extCap)}${selectedSkillset !== null && selectedSkillset !== chartData[i][i1].skillset ? '44' : 'ff'};
                              border-top:2px solid #fff;border-right:2px solid #fff;border-left:2px solid #fff;`"
              @click="onSubClick(chartData[i][i1].skillset)"
            >
              <div class="tool-tiptext">{{ chartData[i][i1].skillset }} ({{ chartData[i][i1].engaged }} /
                {{ chartData[i][i1].extCap }})</div>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between">
          <div
            v-for="(t, i) in xAxisData"
            :key="i"
            :style="`width:${100 / xAxisData.length * 0.8}%;text-align:center;border-radius:4px;margin-top:4px;background:${t === 'w2' ? '#7c1615' : null}`"
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
          style="width: calc(100% - 250px);"
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
          style="width: calc(100% - 250px);"
        >
          <div
            v-for="(item, i1) in labelData"
            :key="i1"
            class="sub-main"
            style="padding-top:5px; padding-bottom: 5px;font-size:13px;min-width:130px;"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div
        v-for="(skillset, i2) in skillsetArr"
        :key="i2"
        class="containerSelf"
        style="font-size: 13px; font-weight: bold;"
      >
        <div
          class="pt-1 pb-1 rounded-left pl-1 pr-1"
          style="margin: 0.5px; background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 250px;"
        >
          <div>
            {{ skillset }}
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
            class="sub-main pt-1 pb-1"
            :style="`margin:0.5px;background-color:${genBgColor(weeklyEngagedData[k][i2], extCapData[i2])};white-space:nowrap;min-width:130px`"
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
          <b style="font-size: 16px; color: #A6E4FF">{{ totalLabel }}</b>
        </div>
        <div
          class="containerSelf p-0"
          style="width: calc(100% - 250px)"
        >
          <div
            v-for="(item1, index) in xAxisData"
            :key="index"
            class="sub-main"
            :style="`padding-top:5px;padding-bottom: 5px;font-weight: bold;white-space:nowrap;min-width:130px;`"
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
      skillsetArr: ['PHP Back-end', 'JavaScript', 'Python', 'Test'],
      extCapData: [65, 40, 52, 50],
      weelyQuotedData: [5, 7, 2, 0, 10, 15, 25, 25, 33],
      weeklyEstimatedData: [
        [70.84, 31.25, 15.9, 45.01],
        [50.56, 37.32, 10.14, 70.98],
        [37.04, 42.39, 42.25, 47.32],
        [26.9, 22.11, 30.42, 74.36],
        [62.39, 4, 42.25, 54.08],
        [74.22, 21.42, 30.42, 27.04],
        [28.59, 37.32, 23.66, 45.63],
        [48, 25.49, 11.83, 35.49],
        [42, 10, 17, 32]
      ],
      weeklyEngagedData: [
        [65, 15, 17, 49],
        [45, 30, 14, 70],
        [40, 36, 38, 49],
        [26, 22.5, 33, 70],
        [50, 22.5, 40, 50],
        [70, 10, 33, 35],
        [30, 40, 25, 40],
        [48, 25, 15, 35],
        [42, 10, 17, 32]
      ],
      capacity: 169,
      totalLabelData: ['Real Est./Capacity', 'Engaged/Capacity', 'Engaged+Quote/Capacity'],
      selectedSkillset: null,
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
      // const skillsetG = this.shuffleArray(this.skillsetArr)
      for (let i = 0; i < this.xAxisData.length; i += 1) {
        const pdt = []
        for (let j = 0; j < this.skillsetArr.length; j += 1) {
          pdt.push(
            {
              estimated: this.weeklyEstimatedData[i][j],
              engaged: this.weeklyEngagedData[i][j],
              extCap: this.extCapData[j],
              skillset: this.skillsetArr[j]
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
    onSubClick(skillsetName) {
      if (skillsetName === this.selectedSkillset) {
        this.selectedSkillset = null
      } else {
        this.selectedSkillset = skillsetName
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
