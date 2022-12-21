<template>
  <div style="width:100%;" class="m-1" >
    <div class="mb-3" style="position: relative">
      <div :style="`position:absolute;top:35px;left:${sWidth}px;width:${bndWidth}px;border-bottom:3px #D92163 solid;display: ${collapsed ? 'none' : 'block'}`">
        <progress-circle-inner-icon style="position:absolute;top:-19px;left:-36px"/>
        <b-icon icon="diamond-fill" style="position:absolute;top:-5px;right:-7px;color:#D92163;"/>
      </div>
      <div class="containerSelf mb-2">
        <div class="rounded-left"
          style="background-color: #252D43; border-left-width: 6px; border-left-color: #FF900C; border-left-style: solid; width: 350px">
          <div style="padding-top:5px; padding-bottom: 5px; display:flex; justify-content: space-between;background:#FFFFFF20" class="pr-1 pl-1">
            <div style="font-size: 18px; color: white;">
              {{ this.teamTitle }}
            </div>
            <div>
              <feather-icon :icon="collapsed ? 'ChevronDownIcon' : 'ChevronUpIcon'" size="16" style="cursor:pointer" v-on:click="onCollapse" />
            </div>
          </div>
          <div v-for="(item, index) in data_source.series" :key="index" :style="`display: ${collapsed ? 'none' : 'block'}`" class="pr-1 pl-1">
            <div class="d-flex" style="justify-content:space-between;padding:8px;height:45px">
              <div class="d-flex">
                <div style="margin-top:auto;margin-bottom:auto;">
                  <feather-icon icon="MenuIcon" class="mr-1" />
                  {{ item.name }}
                </div>
              </div>
              <div class="rounded-pill"
                style="background-color:#353963;border:#7367F0 1px solid;padding:3px;width:80px;text-align:center;">
                8 H/Ds
                <feather-icon icon="MoreHorizontalIcon" />
              </div>
            </div>
          </div>
        </div>
        <div style="width:calc(100% - 350px)">
          <div class="d-flex">
            <template v-for="(item, index) in reportingDates">
              <div v-if="isToday(item)" :key="index" class="sub-main" style="padding-top:5px; padding-bottom: 5px;">
                <div style="border-radius: 5px; background-color: crimson">
                  <span style="font-size: 18px; color: white;">{{ item.format('dd') }} {{ item.format("D") }}</span>
                </div>
              </div>
              <div v-else :key="index" class="sub-main"
                style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;">
                <span style="font-size: 18px; color: white;">
                  <span style="color:#283046">{{ item.format('dd') }}</span> {{ item.format("D") }}
                </span>
              </div>
            </template>
          </div>
          <template v-for="(item, index) in data_source.series" >
            <div :style="`display: ${collapsed ? 'none' : 'block'}`" v-bind:key="index">
              <div class="d-flex" style="height:45px" >
                <template v-for="(item1, jndex) in item.data">
                  <div v-bind:key="jndex" class="sub-main d-flex"
                    :style="`margin-right:0.5px;margin-left:0.5px;background:${item1.bg ? item1.bg : '#0F849E33'}`">
                    <div style="margin:auto;">
                      <span style="font-size: 18px; color: white;">
                        {{ item1.data }}
                      </span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="containerSelf mb-2">
        <div class="rounded-left pl-1 pr-1" style="width: 350px;color:aquamarine">
          TOTAL TEAM CAPACITY
        </div>
        <div style="width:calc(100% - 350px);font-weight:bold;" class="d-flex">
          <template v-for="(item, index) in data_source.teamCapacity">
            <div :key="index" class="sub-main" v-if="item === '100'" style="color:#138B49">
              {{ item }}%
            </div>
            <div :key="index" class="sub-main" v-if="item === '75'" style="color:#A6E4FF">
              {{ item }}%
            </div>
            <div :key="index" class="sub-main" v-if="item === '0'" style="color:#283046">
              {{ item }}%
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.day-s {

  &.active {
    background: #bd2020;
    border-radius: 2px;
    p {
      color: #fff !important;
    }
  }
}
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
import { BIcon } from 'bootstrap-vue'
import moment from "moment"
import ProgressCircleInnerIcon from './sub-component/progressCircleInnerIcon.vue'

export default {
  components: {
    ProgressCircleInnerIcon,
    BIcon
  },
  methods: {
    isToday(date) {
      return moment().isSame(date, "day")
    },
    setOffset() {
      const cwidth = document.getElementsByClassName('content-wrapper')[0].clientWidth
      this.sWidth = 350 + 17 + (cwidth - 28 - 350) / 3.5
      this.bndWidth = (cwidth * 5 - 28 * 5 - 350 * 5) / 7 - 16
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    }
  },
  created() {
    window.addEventListener("resize", this.setOffset)
  },
  mounted() {
    const startDate = moment(moment()).subtract(3, "days")
    const endDate = moment(moment()).add(4, "days")
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, "days").diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
    this.setOffset()
  },
  computed: {
    teamTitle() {
      return this.$store.state.globalState.demandTeamData.title
    },
  },
  data() {
    return {
      reportingDates: [],
      leftP: 15 * 30 + 8,
      lineStartDate: moment(moment()).subtract(3, "days").format('YYYY.MM.DD'),
      todate: moment().format('YYYY.MM.DD'),
      timelineWinWidth: 76 * 30 + 8 * 2,

      data_source: this.$store.state.teamState.teamControlData,
      sWidth: 0,
      bndWidth: 0,
      collapsed: false
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.setOffset)
  },
}
</script>
