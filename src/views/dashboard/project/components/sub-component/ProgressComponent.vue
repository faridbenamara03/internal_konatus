<template>
  <div class="progress-container-cst" style="height:100%">
    <div class="cld">
      <div class="d-flex">
        <div class="bar1" :style="`height:10px;width:${wData[index]}px;`" />
        <div class="bar1-1" :style="`height:10px;width:${500 - wData[index]}px;`" />
      </div>
      <div class="d-flex">
        <div class="bar2" :style="`height:10px;width:${wData[index]}px`" />
        <div class="bar2-1" :style="`height:10px;width:${500 - wData[index]}px`"></div>
      </div>
      <div class="d-flex">
        <div class="bar3" :style="`height:10px;width:${wData[index]}px`" />
        <div class="bar3-1" :style="`height:10px;width:${500 - wData[index]}px`"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
  background-color:#D46D6D50;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-bottom: 2px;
}
.bar1-1 {
  background-color:#ea5455;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-bottom: 2px;
}
.bar2 {
  background-color:#5E944550;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-bottom: 2px;
}
.bar2-1 {
  background-color:#28c76f;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin-bottom: 2px;
}
.bar3 {
  background-color:#3A7A9E50;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-bottom: 2px;
}
.bar3-1 {
  background-color:#00cfe8;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
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
    index: {
      type: Number,
    }
  },
  computed: {
  },
  data() {
    return {
      wData: [320, 220, 209, 360, 230, 280, 400]
    }
  }
}
</script>
