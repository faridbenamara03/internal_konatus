<template>
  <div class="d-flex position-relative">
    <div
      v-for="(width, index) in widths"
      :key="index"
    >
      <div class="d-flex">
        <b-icon
          style="padding-bottom:2px"
          icon="diamond-fill"
          :variant="typeArr[type]"
        />
        <div :style="`width:${width}px`">
          <b-progress
            value="100%"
            max="100"
            :variant="typeArr[type]"
          />
        </div>
        <b-icon
          icon="triangle-fill"
          class="rotate-icon"
          :variant="typeArr[type]"
        />
      </div>
    </div>
    <!-- <div class="d-flex">
      <b-icon
        style="padding-bottom:2px"
        icon="diamond-fill"
        :variant="typeArr[type]"
      />
      <div :style="`width:${width1}px`">
        <b-progress
          value="100%"
          max="100"
          :variant="typeArr[type]"
        />
      </div>
      <b-icon
        icon="triangle-fill"
        class="rotate-icon"
        :variant="typeArr[type]"
      />
    </div>
    <div class="d-flex">
      <b-icon
        style="padding-bottom:2px"
        icon="diamond-fill"
        :variant="typeArr[type]"
      />
      <div :style="`width:${width2}px`">
        <b-progress
          value="100%"
          max="100"
          :variant="typeArr[type]"
        />
      </div>
      <b-icon
        icon="triangle-fill"
        class="rotate-icon"
        :variant="typeArr[type]"
      />
    </div>
    <div class="d-flex">
      <b-icon
        style="padding-bottom:2px"
        icon="diamond-fill"
        :variant="typeArr[type]"
      />
      <div :style="`width:${width3}px`">
        <b-progress
          value="100%"
          max="100"
          :variant="typeArr[type]"
        />
      </div>
      <b-icon
        icon="triangle-fill"
        class="rotate-icon"
        :variant="typeArr[type]"
      />
    </div> -->
    <div :style="`background-color:#0008;width:${width4}px;height:14px;position:absolute;left:0px;top:-1px`" />
  </div>
</template>

<script>
import { BProgress } from 'bootstrap-vue'

export default {
  components: {
    BProgress,
  },
  props: {
    type: {
      type: Number,
      default: () => 0
    },
    widths: {
      type: Array,
      default: () => []
    },
    width1: {
      type: Number,
      default: () => 0,
    },
    width2: {
      type: Number,
      default: () => 0,
    },
    width3: {
      type: Number,
      default: () => 0,
    },
    width4: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      typeArr: ['danger', 'success', 'info'],
      colorArr: ['#ea5455', '#28c76f', '#00cfe8']
    }
  }
}
</script>

<style>

</style>
