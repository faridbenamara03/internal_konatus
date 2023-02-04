<template>
  <div class="d-flex" style="margin-bottom:2px">
    <div :style="`width:9px;height:12px;border-top-left-radius:10px;background:${color}`" />
    <div :style="`width:${width}px;height:9px;background:${color};`" />
    <div :style="`width:9px;height:12px;border-top-right-radius:10px;background:${color}`" />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => '',
    },
    width: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>

<style>

</style>
