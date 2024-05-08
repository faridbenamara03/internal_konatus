<template>
  <div class="d-flex position-relative">
    <div
      v-for="(width, index) in widths"
      :key="index"
    >
      <div
        v-if="width > 0"
        class="d-flex"
        :style="`padding-left:${paddings[index] - 24 * index > 0 ? paddings[index] - 24 * index : 0}px`"
      >
        <b-icon
          v-if="isstartmark[index] === true"
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
          v-if="isendmark[index] === true"
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
    <div
      v-if="width4 > 0"
      :style="`background-color:#0008;width:${width4}px;height:14px;position:absolute;left:0px;top:-1px`"
    />
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
    paddings: {
      type: Array,
      default: () => []
    },
    widths: {
      type: Array,
      default: () => []
    },
    isstartmark: {
      type: Array,
      default: () => []
    },
    isendmark: {
      type: Array,
      default: () => []
    }
    // width1: {
    //   type: Number,
    //   default: () => 0,
    // },
    // width2: {
    //   type: Number,
    //   default: () => 0,
    // },
    // width3: {
    //   type: Number,
    //   default: () => 0,
    // },
    // width4: {
    //   type: Number,
    //   default: () => 0,
    // },
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
