<template>
  <div class="m-2">
    <div class="containerSelf">
      <div style="width: 300px">
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <template v-for="(item, index) in data_source.xAxisData">
          <div v-if="index === 1" v-bind:key="index" class="sub-main"
            style="border-radius: 5px; background-color: crimson; padding-top:5px; padding-bottom: 5px;">
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
          <div v-else v-bind:key="index" class="sub-main"
            style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;">
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
        </template>
      </div>
    </div>
    <div class="containerSelf">
      <div style="width: 300px">
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <div class="sub-main" v-for="item in data_source.xAxisData1" v-bind:key="item"
          style="padding-top:5px; padding-bottom: 5px;">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="containerSelf" v-for="item in data_source.series" v-bind:key="item.name"
      style="font-size: 23px; font-weight: bold;">
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
        <div class="sub-main pt-1 pb-1" v-for="item_child in item.data" v-bind:key="item_child"
          :style="'margin: 0.5px; background-color:' + item_child.bg + '; color:' + item_child.clr">
          {{ item_child.data }}
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <b style="font-size: 20px; color: #A6E4FF">TOTALS</b>
    </div>
    <div class="containerSelf" v-for="(item, index) in filteredTotalData" v-bind:key="index">
      <div style="width: 300px">
        <b style="font-size: 18px; color: #A6E4FF">{{ item.captain }}</b>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <div class="sub-main" v-for="(item1, index) in item.data" v-bind:key="index"
          style="padding-top:5px; padding-bottom: 5px;">
          <b :style='"font-size: 18px; color:" + item1.numcolor'>{{ item1.value }}</b>
          <b :style='"font-size: 18px; color:" + item1.pctcolor'>
            (
              {{ item1.percent }}
              <span v-if="item1.percent >= 0">%</span>
            )
          </b>
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
</style>

<script>
export default {
  data() {
    return {
      data_source: {
        xAxisData: ['W1', 'W2', 'W3', 'W4', 'W5'],
        xAxisData1: ['Spent | Est Real | Av.cap', 'Spent | Est Real | Av.cap', 'Spent | Est Real | Av.cap', 'Spent | Est Real | Av.cap', 'Spent | Est Real | Av.cap'],
        total_data: [
          {
            captain: 'SPENT/CAPACITY', data: ['144/160', '136/120', '0/160', '0/160', '0/160']
          },
          {
            captain: 'CAPACITY/FORECAST', data: ['160/160', '120/160', '160/180', '160/180', '160/180']
          },
          {
            captain: 'QUE/UNASSIGNED', data: ['4/16', '0/0', '80/80', '80/80', '80/80']
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
    }
  },
  computed: {
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
        console.log({ captain: t.captain, data: valueArr })
        return { captain: t.captain, data: valueArr }
      })
    }
  }
}
</script>
