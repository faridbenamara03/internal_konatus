<template>
  <div class="d-flex position-relative">
    <div :style="`width:12px;height:15px;border-top-left-radius:10px;background:${colorArr[type]}`" />
    <div :style="`width:${width1}px;height:12px;background:${colorArr[type]};`" />
    <div :style="`width:12px;height:15px;border-top-right-radius:10px;background:${colorArr[type]}`" />
    <div :style="`background-color:#0008;width:${width2}px;height:15px;position:absolute;left:0px;border-top-left-radius:10px;`" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number
    },
    width1: {
      type: Number,
      default: () => 0,
    },
    width2: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      colorArr: ['#ea5455', '#28c76f', '#00cfe8']
    }
  }
}
</script>

<style>

</style>
