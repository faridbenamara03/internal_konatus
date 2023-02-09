<template>
  <div class="d-flex">
    <div :style="`width:12px;height:15px;border-top-left-radius:10px;background:${colorArr[type][color1]}`" />
    <div :style="`width:${width1}px;height:12px;background:${colorArr[type][color2]};`" />
    <div :style="`width:${width2}px;height:12px;background:${colorArr[type][color3]};`" />
    <div :style="`width:12px;height:15px;border-top-right-radius:10px;background:${colorArr[type][color4]}`" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number
    },
    color1: {
      type: Number,
      default: () => 0,
    },
    color2: {
      type: Number,
      default: () => 0,
    },
    color3: {
      type: Number,
      default: () => 0,
    },
    color4: {
      type: Number,
      default: () => 0,
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
      colorArr: [
        ['#D46D6D50', '#ea5455'],
        ['#5E944550', '#28c76f'],
        ['#3A7A9E50', '#00cfe8']
      ]
    }
  }
}
</script>

<style>

</style>
