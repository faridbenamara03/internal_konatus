<template>
  <div class="p-2">
    <div style="margin-left:40px;font-size:20px;margin-bottom:10px;margin-top:10px"><b>Skillset load per team</b></div>
    <div class="d-flex">
      <div style="width:40px;padding-bottom:20px;" class="d-flex flex-column justify-content-between">
        <div v-for="(t, i) in yAxisData_1" :key="i" style="text-align:end;padding-right:5px">
          {{ t }}
        </div>
      </div>
      <div style="width:calc(100% - 40px);">
        <div
          style="display:flex;justify-content:space-between; border-left: 1px solid white; border-bottom: 1px solid white;">
          <div v-for="(t, i) in xAxisData" :key="i" class="d-flex flex-column justify-content-end"
            :style="`width:${100 / xAxisData.length * 0.8}%;`">
            <div v-for="(t1, i1) in skillsetArr" class="tool-tip" @click="onSubClick_1(chartData_1[i][i1].team)"
              :style="`height:${chartData_1[i][i1].value}px;cursor:pointer;width:100%;background:${colorsArr_1[chartData_1[i][i1].loaded]}${selectedSkillset !== null && selectedSkillset !== chartData_1[i][i1].team ? '44' : 'ff'};border:1px solid #222`"
              :key="i1">
              <div class="tool-tiptext">{{ chartData_1[i][i1].team }}</div>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between">
          <div v-for="(t, i) in xAxisData" :key="i"
            :style="`width:${100 / xAxisData.length * 0.8}%;text-align:center;border-radius:4px;margin-top:4px;background:${t === 'w2' ? '#ed143d' : null}`">
            {{ t }}
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 w-100">
      <div class="containerSelf">
        <div style="width: 300px">
        </div>
        <div class="containerSelf p-0" style="width: calc(100% - 300px)">
          <template v-for="(item, index) in data_source.xAxisData">
            <div v-if="index === 1" :key="index" class="sub-main"
              style="border-radius: 5px; background-color: crimson; padding-top:5px; padding-bottom: 5px;">
              <b style="font-size: 17px; color: white;">{{ item }}</b>
            </div>
            <div v-else :key="index" class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;">
              <b style="font-size: 17px; color: white;">{{ item }}</b>
            </div>
          </template>
        </div>
      </div>
      <div class="containerSelf">
        <div style="width: 300px">
        </div>
        <div class="containerSelf p-0" style="width: calc(100% - 300px)">
          <div class="sub-main" v-for="(item, i1) in data_source.xAxisData1" :key="i1"
            style="padding-top:5px; padding-bottom: 5px;">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="containerSelf" v-for="(item, i2) in data_source.series" :key="i2"
        style="font-size: 16px; font-weight: bold;">
        <div class="pt-1 pb-1 rounded-left pl-1 pr-1"
          style="margin: 0.5px; background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 300px">
          <div>
            {{ item.name }}
          </div>
          <div>
            <feather-icon icon="ChevronUpIcon" />
          </div>
        </div>
        <div class="containerSelf p-0" style="width: calc(100% - 300px)">
          <div class="sub-main pt-1 pb-1" v-for="item_child in item.data" :key="item_child"
            :style="'margin: 0.5px; background-color:' + item_child.bg + '; color:' + item_child.clr">
            {{ item_child.data }}
          </div>
        </div>
      </div>
      <div class="containerSelf m-2">
        <b style="font-size: 17px; color: #A6E4FF">TOTALS</b>
      </div>
      <div class="containerSelf" v-for="(item, index) in filteredTotalData" :key="index">
        <div style="width: 300px">
          <b style="font-size: 16px; color: #A6E4FF">{{ item.captain }}</b>
        </div>
        <div class="containerSelf p-0" style="width: calc(100% - 300px)">
          <div class="sub-main" v-for="(item1, index) in item.data" :key="index"
            style="padding-top:5px; padding-bottom: 5px;">
            <b :style='"font-size: 16px; color:" + item1.numcolor'>{{ item1.value }}</b>
            <b :style='"font-size: 16px; color:" + item1.pctcolor'>
              (
              {{ item1.percent }}
              <span v-if="item1.percent >= 0">%</span>
              )
            </b>
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
      data_source: {
        xAxisData: ['W1', 'W2', 'W3', 'W4', 'W5'],
        xAxisData1: ['Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap'],
        total_data: [
          {
            captain: 'Real Est./Capacity', data: ['144/160', '136/120', '0/160', '0/160', '0/160']
          },
          {
            captain: 'Engaged/Capacity', data: ['160/160', '120/160', '160/180', '160/180', '160/180']
          },
          {
            captain: 'Engaged+Quote/Capacity', data: ['4/16', '0/0', '80/80', '80/80', '80/80']
          },
        ],
        series: [
          {
            name: 'PHP Back-end',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#252D43', clr: '#FFF', data: '80 | 80 | 80' },
              { bg: '#252D43', clr: '#FF900C', data: '96 | 120 | 160' },
              { bg: '#252D43', clr: '#A6E4FF', data: '80 | 80 | 80' },
              { bg: '#6A0737', clr: '#D40E6E', data: '96 | 120 | 160' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FFACDA', data: '28/24' }
            ],
          },
          {
            name: 'Javascript',
            type: 'line',
            stack: 'Total',
            color: '#4f964d',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            color_type: 1,
            data: [
              { bg: 'bwarn', clr: '#FF900C', data: '96 | 120 | 160' },
              { bg: '#252D43', clr: '#FF900C', data: '96 | 160 | 160' },
              { bg: '#252D43', clr: '#A6E4FF', data: '80 | 80 | 80' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FF900C', data: '96 | 120 | 160' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FFACDA', data: '28/24' }
            ],
          },
          {
            name: 'Management',
            type: 'line',
            stack: 'Total',
            color: '#186b83',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#6A0737', clr: '#D40E6E', data: '40 | 44 | 48' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FF900C', data: '80 | 80 | 80' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FF900C', data: '96 | 120 | 160' },
              { bg: '#252D43', clr: '#A6E4FF', data: '0 | 80 | 80' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FFACDA', data: '28/24' }
            ],
          },
          {
            name: 'QA',
            type: 'line',
            stack: 'Total',
            showSymbol: false,
            color: '#554bb8',
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#6A0737', clr: '#D40E6E', data: '100 | 120 | 100' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FF900C', data: '80 | 80 | 80' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FF900C', data: '96 | 120 | 160' },
              { bg: '#252D43', clr: '#A6E4FF', data: '0 | 80 | 80' },
              { bg: 'rgba(209, 90, 119, 0.4)', clr: '#FFACDA', data: '28/24' }
            ],
          },
        ],
      },
      skillsetG1: this.shuffleArray(['PHP Back-end', 'Javascript', 'Management', 'QA']),
      skillsetG2: this.shuffleArray(['PHP Back-end', 'Javascript', 'Management', 'QA']),
      skillsetG3: this.shuffleArray(['PHP Back-end', 'Javascript', 'Management', 'QA']),
      skillsetG4: this.shuffleArray(['PHP Back-end', 'Javascript', 'Management', 'QA']),
      colorsArr_1: ['#677499', '#4c73e5', '#d15a77', '#6a0737'],
      skillsetArr: ['PHP Back-end', 'Javascript', 'Management', 'QA'],
      selectedSkillset: null,
    }
  },
  computed: {
    yAxisData_1() {
      let max = -9999
      this.chartData_1.forEach(t => {
        let tv = 0
        t.forEach(t1 => {
          tv += parseInt(t1.value, 10)
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
    filteredTotalData() {
      return this.data_source.total_data.map(t => {
        const valueArr = t.data.map(t1 => {
          let pctcolor = '#138B49'
          let numcolor = 'white'
          const vvle = t1.split('/')[0] / t1.split('/')[1]
          if (vvle > 0.5 && vvle <= 0.9) pctcolor = '#F5A623'
          else if (vvle <= 0.5) pctcolor = '#BD2020'
          const percent = parseInt(vvle * 100, 10)
          if (parseInt(t1.split('/')[0], 10) === 0) {
            pctcolor = 'gray'
            numcolor = 'gray'
          }
          return {
            value: t1, percent, pctcolor, numcolor
          }
        })
        return { captain: t.captain, data: valueArr }
      })
    },
    xAxisData() {
      return ['w1', 'w2', 'w3', 'w4', 'w5']
      // return this.$store.state.globalState.customChartXLabel
    },
    chartData_1() {
      const dt = []
      const teamG = this.shuffleArray(['PHP Back-end', 'Javascript', 'Management', 'QA'])
      for (let i = 0; i < this.xAxisData.length; i += 1) {
        const pdt = []
        for (let j = 0; j < this.skillsetArr.length; j += 1) {
          pdt.push(
            {
              value: parseInt(Math.random() * 80 + 40, 10),
              loaded: parseInt(Math.random() * 4, 10),
              team: teamG[j],
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
    onSubClick_1(skillsetName) {
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
    }
  },
}
</script>
