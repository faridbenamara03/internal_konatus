<template>
  <div class="p-2">
    <div class="d-flex">
      <div style="width:40px;padding-bottom:20px;" class="d-flex flex-column justify-content-between">
        <div v-for="(t, i) in yAxisData" :key="i" style="text-align:end;padding-right:5px">
          {{ t }}
        </div>
      </div>
      <div style="width:calc(100% - 40px);">
        <div
          style="display:flex;justify-content:space-between; border-left: 1px solid white; border-bottom: 1px solid white;">
          <div v-for="(t, i) in xAxisData" :key="i" class="d-flex flex-column justify-content-end"
            :style="`width:${100 / xAxisData.length * 0.8}%;`">
            <div v-for="(t1, i1) in teamArr" b-tooltip.hover :title="`${chartData[i][i1].team}`"
              @click="onSubClick(chartData[i][i1].team)"
              :style="`height:${chartData[i][i1].value}px;width:100%;background:${colorsArr[chartData[i][i1].loaded]}${selectedTeam !== null && selectedTeam !== chartData[i][i1].team ? '44' : 'ff'};border:1px solid #222`"
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
import {
  BTooltip
} from 'bootstrap-vue'

export default {
  components: {
    // BTooltip
  },
  props: {
  },
  data() {
    return {
      teamG1: this.shuffleArray(['Team A', 'Team B', 'Team C', 'Team D']),
      teamG2: this.shuffleArray(['Team A', 'Team B', 'Team C', 'Team D']),
      teamG3: this.shuffleArray(['Team A', 'Team B', 'Team C', 'Team D']),
      teamG4: this.shuffleArray(['Team A', 'Team B', 'Team C', 'Team D']),
      colorsArr: ['#b7b7b7', '#003f5c', '#bd7100', '#7c1615'],
      yAxisData: [1500, 1000, 500, 0],
      teamArr: ['Team A', 'Team B', 'Team C', 'Team D'],
      selectedTeam: null
    }
  },
  computed: {
    xAxisData() {
      return this.$store.state.globalState.customChartXLabel
    },
    chartData() {
      const dt = []
      const teamG = this.shuffleArray(['Team A', 'Team B', 'Team C', 'Team D'])
      for (let i = 0; i < this.xAxisData.length; i += 1) {
        const pdt = []
        for (let j = 0; j < this.teamArr.length; j += 1) {
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
    }
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
    }
  },
  directives: {
    'b-tooltip': BTooltip
  }
}
</script>
