<template>
  <div :style="'position:absolute;left:' + offSet + 'px;width:' + gWidth + 'px'">
    <div v-if="exist !== undefined" class="progress-container-cst" style="height:100%">
      <div class="cld">
        <div v-if="!isSub" style="margin-bottom:8px;color:white;font-size:12px"> {{ title }} </div>
        <div class="d-flex">
          <div :style="'height:' + this.progressHeight + ';width:' + width10 + 'px;'" />
          <div class="bar1" :style="'height:' + this.progressHeight + ';width:' + width11 + 'px;'" />
          <div class="bar1-1" :style="'height:' + this.progressHeight + ';width:' + width12 + 'px;'"></div>
        </div>
        <div class="d-flex" >
          <div :style="'height:' + this.progressHeight + ';width:' + width20 + 'px;'" />
          <div v-if="!isUN(s2Date)" class="bar2" :style="'height:' + this.progressHeight + ';width:' + width21 + 'px;'" />
          <div v-if="!isUN(s2Date)" class="bar2-1" :style="'height:' + this.progressHeight + ';width:' + width22 + 'px;'"></div>
        </div>
        <div class="d-flex">
          <div :style="'height:' + this.progressHeight + ';width:' + width30 + 'px;'" />
          <div v-if="!isUN(s3Date)" class="bar3" :style="'height:' + this.progressHeight + ';width:' + width31 + 'px;'" />
          <div v-if="!isUN(s3Date)" class="bar3-1" :style="'height:' + this.progressHeight + ';width:' + width32 + 'px;'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@core/scss/base/components/variables-dark";
.progress-container-cst {
  padding: 4px;
  display: flex;
  background-color: $theme-dark-card-bg;
  border-radius: 5px;
}
.cld {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
.bar1 {
  background-color:#D46D6D50;
  border-radius: 2px;
  margin-bottom: 2px;
}
.bar1-1 {
  background-color:#D46D6D;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  margin-bottom: 2px;
}
.bar2 {
  background-color:#5E944550;
  border-radius: 2px;
  margin-bottom: 2px;
}
.bar2-1 {
  background-color:#5E9445;
  border-radius: 2px;
  margin-bottom: 2px;
}
.bar3 {
  background-color:#3A7A9E50;
  border-radius: 2px;
  margin-bottom: 2px;
}
.bar3-1 {
  background-color:#3A7A9E;
  border-radius: 2px;
  margin-bottom: 2px;
}
</style>
<script>
import moment from "moment"
import { isEmpty } from "@/views/utils"

export default {
  props: {
    value: {
      type: Number,
      default: () => 0,
    },

    sDate: {
      type: String,
      default: () => ''
    },
    eDate: {
      type: String,
      default: () => ''
    },
    s1Date: {
      type: String,
      default: () => ''
    },
    e1Date: {
      type: String,
      default: () => ''
    },
    s2Date: {
      type: String,
      default: () => ''
    },
    e2Date: {
      type: String,
      default: () => ''
    },
    s3Date: {
      type: String,
      default: () => ''
    },
    e3Date: {
      type: String,
      default: () => ''
    },

    title: {
      type: String,
      default: () => ''
    },
    isSub: {
      type: Boolean,
      default: () => true
    },
    offsetBase: {
      type: Number,
    },
    exist: {}
  },
  methods: {
    getLength(startDate, endDate) {
      const date1 = new Date(startDate)
      const date2 = new Date(endDate)
      const differenceInTime = date2.getTime() - date1.getTime()
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)
      let ret = differenceInDays * 30 > 0 ? differenceInDays * 30 : 0
      if (this.offsetBase === 75) ret /= 5
      return ret
    },
    isUN(data) {
      return isEmpty(data)
    }
  },
  computed: {
    offSet() {
      const w = this.getLength(moment(moment()).subtract(this.offsetBase, "days").format('YYYY.MM.DD'), this.sDate) + 10
      return w
    },
    gWidth() {
      const w = this.getLength(this.sDate, this.eDate)
      return w
    },
    width10() {
      return this.getLength(this.sDate, this.s1Date)
    },
    width11() {
      return this.getLength(this.s1Date, moment().format('YYYY.MM.DD')) - 5
    },
    width12() {
      return this.getLength(moment().format('YYYY.MM.DD'), this.e1Date) - 2
    },
    width20() {
      return this.getLength(this.sDate, this.s2Date)
    },
    width21() {
      return this.getLength(this.s2Date, moment().format('YYYY.MM.DD')) - 5
    },
    width22() {
      return this.getLength(moment().format('YYYY.MM.DD'), this.e2Date) - 2
    },
    width30() {
      return this.getLength(this.sDate, this.s3Date)
    },
    width31() {
      return this.getLength(this.s3Date, moment().format('YYYY.MM.DD')) - 5
    },
    width32() {
      return this.getLength(moment().format('YYYY.MM.DD'), this.e3Date) - 2
    },
    // valueF() {
    //   return this.value < 0 ? 3 : this.value
    // },
    // valueD() {
    //   return this.value < 0 ? 0 : this.value
    // },
    bgClr() {
      return this.value < 0 ? '#D46D6D' : '#D46D6D50'
    }
  },
  data() {
    return {
      progressHeight: this.isSub ? '9px' : '13px'
    }
  }
}
</script>
