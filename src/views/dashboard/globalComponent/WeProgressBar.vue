<<<<<<< HEAD
<template>
  <div class="d-flex position-relative">
    <div
      v-if="width1 > 0"
      :style="`width:${width1}px;height:12px;background:${colorArr[type]};`"
    />
    <!-- <div
      v-if="width3 > 0 && width3 > width2"
      :style="`width:${width3 - width2}px;height:12px;background:#0008;position:absolute;left:0px`"
    /> -->
    <!-- <div
      v-if="isstartmark === true && width2 > 0"
      :style="`width:12px;height:15px;border-top-left-radius:10px;background:#0008;position:absolute;left:0px`"
    >
      <div
        :style="`width:${width2}px;height:12px;background:#0008;position:absolute;left:12px`"
      />
    </div>
    <div
      v-else-if="isstartmark === false && width2 > 0"
      :style="`width:${width2}px;height:12px;background:#0008;position:absolute;left:0px`"
    />
    <div
      v-if="isendmark === true && isstartmark === true && width2 > 0"
      :style="`width:12px;height:15px;border-top-right-radius:10px;background:#0008;position:absolute;left:${width2 + 12}px`"
    />
    <div
      v-if="isendmark === true && isstartmark === false && width2 > 0"
      :style="`width:12px;height:15px;border-top-right-radius:10px;background:#0008;position:absolute;left:${width2}px`"
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
    width2: {
      type: Number,
      default: () => 0
    },
    width3: {
      type: Number,
      default: () => 0
    },
    width4: {
      type: Number,
      default: () => 0
    }
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
=======
<template>
  <div class="d-flex position-relative">
    <div
      v-if="width1 > 0"
      :style="`width:${width1}px;height:12px;background:${colorArr[type]};`"
    />
    <!-- <div
      v-if="width3 > 0 && width3 > width2"
      :style="`width:${width3 - width2}px;height:12px;background:#0008;position:absolute;left:0px`"
    /> -->
    <!-- <div
      v-if="isstartmark === true && width2 > 0"
      :style="`width:12px;height:15px;border-top-left-radius:10px;background:#0008;position:absolute;left:0px`"
    >
      <div
        :style="`width:${width2}px;height:12px;background:#0008;position:absolute;left:12px`"
      />
    </div>
    <div
      v-else-if="isstartmark === false && width2 > 0"
      :style="`width:${width2}px;height:12px;background:#0008;position:absolute;left:0px`"
    />
    <div
      v-if="isendmark === true && isstartmark === true && width2 > 0"
      :style="`width:12px;height:15px;border-top-right-radius:10px;background:#0008;position:absolute;left:${width2 + 12}px`"
    />
    <div
      v-if="isendmark === true && isstartmark === false && width2 > 0"
      :style="`width:12px;height:15px;border-top-right-radius:10px;background:#0008;position:absolute;left:${width2}px`"
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
    width2: {
      type: Number,
      default: () => 0
    },
    width3: {
      type: Number,
      default: () => 0
    },
    width4: {
      type: Number,
      default: () => 0
    }
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
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
