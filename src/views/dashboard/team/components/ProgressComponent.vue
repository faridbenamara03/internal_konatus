<template>
  <div v-if="exist !== undefined" class="progress-container-cst" style="height:100%">
    <div class="cld">
      <div v-if="!isSub" style="margin-bottom:8px;color:white;font-size:12px;margin-left:6px;"> {{ title }} </div>
      <div class="bar1" :style="'height:' + this.progressHeight + ';width:' + valueF + 'px;background-color:' + bgClr + ';'" />
      <!-- <div class="d-flex">
        <div class="bar2" :style="'height:' + this.progressHeight + ';width:' + valueD + 'px;'" />
        <div class="bar2-1" :style="'height:' + this.progressHeight + ';width:calc(100% - ' + valueD + 'px)'"></div>
      </div>
      <div class="d-flex">
        <div class="bar3" :style="'height:' + this.progressHeight + ';width:' + valueD + 'px;'" />
        <div class="bar3-1" :style="'height:' + this.progressHeight + ';width:calc(100% - ' + valueD + 'px)'"></div>
      </div> -->
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
  height: 75px;
}
.bar1 {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
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

export default {
  props: {
    value: {
      type: Number,
      default: () => 0,
    },
    title: {
      type: String,
      default: () => ''
    },
    isSub: {
      type: Boolean,
      default: () => true
    },
    exist: {}
  },
  computed: {
    valueF() {
      return this.value < 0 ? 3 : this.value
    },
    valueD() {
      return this.value < 0 ? 0 : this.value
    },
    bgClr() {
      return this.value < 0 ? '#D46D6D' : '#D46D6D50'
    }
  },
  data() {
    console.log(this.value)
    return {
      progressHeight: this.isSub ? '8px' : '12px'
    }
  }
}
</script>
