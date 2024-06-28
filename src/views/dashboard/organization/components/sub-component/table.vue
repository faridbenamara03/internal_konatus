<<<<<<< HEAD
<template>
  <div class="p-2 w-100">
    <div class="containerSelf">
      <div style="width: 250px">
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 250px)">
        <template v-for="(item, index) in xAxisData">
          <div v-if="index === 1" :key="index" class="sub-main"
            style="border-radius: 5px; background-color: #7c1615; padding-top:5px; padding-bottom: 5px;min-width:130px;">
            <b style="font-size: 14px; color: white;">{{ item }}</b>
          </div>
          <div v-else :key="index" class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;min-width:130px;">
            <b style="font-size: 14px; color: white;">{{ item }}</b>
          </div>
        </template>
      </div>
    </div>
    <div class="containerSelf">
      <div style="width: 250px">
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 250px)">
        <div class="sub-main" v-for="(item, i1) in labelData" :key="i1" style="padding-top:5px; padding-bottom: 5px;min-width:130px;font-size:13px;">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="containerSelf" v-for="(team, i2) in teamArr" :key="i2"
      style="font-size: 16px; font-weight: bold;">
      <div class="pt-1 pb-1 rounded-left pl-1 pr-1"
        style="margin: 0.5px; background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 250px;font-size:13px;">
        <div>
          {{ team }}
        </div>
        <div>
          <feather-icon icon="ChevronUpIcon" />
        </div>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 250px)">
        <div v-b-modal.modal-no-backdrop class="sub-main pt-1 pb-1" v-for="(item_child, k) in xAxisData" :key="item_child"
          :style="`margin:0.5px;background-color:${genBgColor(weeklyEngagedData[k][i2], extCapData[i2])};cursor:pointer;min-width:130px;font-size:13px;`">
          {{ weeklyEstimatedData[k][i2] }} | {{ weeklyEngagedData[k][i2] }} | {{ extCapData[i2] }}
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <b style="font-size: 17px; color: #A6E4FF">TOTALS</b>
    </div>
    <div class="containerSelf" v-for="(totalLabel, jndex) in totalLabelData" :key="jndex">
      <div style="width: 250px">
        <b style="font-size: 13px; color: #A6E4FF">{{ totalLabel }}</b>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 250px)">
        <div class="sub-main" v-for="(item1, index) in xAxisData" :key="index"
          :style="`padding-top:5px;padding-bottom: 5px;font-weight: bold;min-width:130px;font-size:13px;`">
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
      xAxisData: ['W1', 'W2', 'W3', 'W4', 'W5'],
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
  }
}
</script>
=======
<template>
  <div class="p-2 w-100">
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
      xAxisData: ['W1', 'W2', 'W3', 'W4', 'W5'],
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
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
