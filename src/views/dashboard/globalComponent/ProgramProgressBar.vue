<template>
  <div class="d-flex position-relative">
    <div
      v-if="isstartmark === true"
      :style="`width:12px;height:15px;border-top-left-radius:10px;background:${colorArr[type]}`"
    />
    <div
      v-if="width1 > 0"
      :style="`width:${width1}px;height:12px;background:${colorArr[type]};`"
    />
    <div
      v-if="isendmark === true"
      :style="`width:12px;height:15px;border-top-right-radius:10px;background:${colorArr[type]}`"
    />
    <!-- <div
      v-if="width2 > 0"
      :style="`width:${width2 < 12 ? width2 : 12}px;height:15px;border-top-left-radius:10px;background:#0008;position:absolute;left:0px`"
    />
    <div
      v-if="width2 > 12"
      :style="`background-color:#0008;width:${width2 - 12}px;height:12px;position:absolute;left:12px;`"
    /> -->
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: () => 0
    },
    width1: {
      type: Number,
      default: () => 0
    },
    isstartmark: {
      type: Boolean,
      default: () => false
    },
    isendmark: {
      type: Boolean,
      default: () => false
    }
    // width2: {
    //   type: Number,
    //   default: () => 0
    // }
  },
  data() {
    return {
      colorArr: ['#ea5455', '#28c76f', '#00cfe8'],
      windowHeight: window.innerHeight
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
    }
  }
}
</script>

<style>

</style>
