<template>
  <div class="p-2 w-100">
    <div class="containerSelf">
      <div style="width: 300px">
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <template v-for="(item, index) in weekData">
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
        <div class="sub-main" v-for="(item, i1) in labelData" :key="i1" style="padding-top:5px; padding-bottom: 5px;">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="containerSelf" v-for="(skillset, i2) in skillsetArr" :key="i2"
      style="font-size: 16px; font-weight: bold;">
      <div class="pt-1 pb-1 rounded-left pl-1 pr-1"
        style="margin: 0.5px; background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 300px">
        <div>
          {{ skillset }}
        </div>
        <div>
          <feather-icon icon="ChevronUpIcon" />
        </div>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <div v-b-modal.modal-no-backdrop class="sub-main pt-1 pb-1" v-for="(item_child, k) in weekData" :key="item_child"
          :style="`margin:0.5px;background-color:${genBgColor(weeklyEngagedData[k][i2], extCapData[i2])};cursor:pointer;`">
          {{ weeklyEstimatedData[k][i2] }} | {{ weeklyEngagedData[k][i2] }} | {{ extCapData[i2] }}
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <b style="font-size: 17px; color: #A6E4FF">TOTALS</b>
    </div>
    <div class="containerSelf" v-for="(totalLabel, jndex) in totalLabelData" :key="jndex">
      <div style="width: 300px">
        <b style="font-size: 16px; color: #A6E4FF">{{ totalLabel }}</b>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <div class="sub-main" v-for="(item1, index) in weekData" :key="index"
          :style="`padding-top:5px;padding-bottom: 5px;font-weight: bold`">
          {{ parseInt(weeklyTotalData[jndex][index] * 100, 10) / 100 }} / {{ capacity }}
          (<span :style="`color:${genFontColor(weeklyTotalData[jndex][index], capacity)}`">{{
            parseInt(weeklyTotalData[jndex][index] * 100 / capacity, 10) }}%</span>)
        </div>
      </div>
    </div>
    <team-detail-modal />
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
import TeamDetailModal from '../../modals/teamDetailModal.vue'

export default {
  components: {
    TeamDetailModal,
  },
  data() {
    return {
      weekData: ['W1', 'W2', 'W3', 'W4', 'W5'],
      labelData: ['Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap', 'Real Est. | Engaged | Ext. cap'],
      skillsetArr: ['PHP Back-end', 'JavaScript', 'Python', 'Test'],
      extCapData: [65, 40, 52, 50],
      weelyQuotedData: [0, 0, 0, 0, 10, 15, 25, 25, 33],
      weeklyEstimatedData: [
        [70.84, 32.25, 16.9, 49.01],
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
        [70, 30, 20, 49],
        [50, 35, 14, 70],
        [40, 40, 40, 49],
        [26, 22.5, 33, 70],
        [50, 22.5, 40, 50],
        [70, 10, 33, 35],
        [30, 40, 25, 40],
        [48, 25, 15, 35],
        [42, 10, 17, 32]
      ],
      capacity: 169,
      totalLabelData: ['Real Est./Capacity', 'Engaged/Capacity', 'Engaged+Quote/Capacity'],
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
  },
  methods: {
    genBgColor(engaged, capacity) {
      let color = '#282828'
      if (engaged <= 0.6 * capacity) color = '#0641ff'
      else if (engaged <= capacity && engaged >= 0.9 * capacity) color = '#cd7700'
      else if (engaged > capacity) color = '#a11414'
      return color
    },
    genFontColor(engaged, capacity) {
      let color = null
      if (engaged <= 0.6 * capacity) color = '#0641ff'
      else if (engaged <= capacity && engaged >= 0.9 * capacity) color = '#cd7700'
      else if (engaged > capacity) color = '#a11414'
      return color
    }
  }
}
</script>
