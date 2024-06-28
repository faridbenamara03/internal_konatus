<<<<<<< HEAD
<template>
  <div style="position:relative">
    <div class="rounded-circle" style="background-color:#1A2239;position:absolute;width:35px;height:35px;top:2px;left:2px">
      <feather-icon icon="CalendarIcon" size="18" style="position:absolute;left:9px;top:8px" />
    </div>
    <progress-circle :completed-steps="15" :total-steps="100" :diameter="40" :circle-width=4 :start-color="startColor"
      stop-color="#FFACDA" :circle-color="circleColor"/>
  </div>
</template>

<script>
import { ProgressCircle } from 'vue-progress-circle'

export default {
  props: {
    startColor: {
      type: String,
      default: () => "#FFACDA",
    },
    circleColor: {
      type: String,
      default: () => "#D92163",
    },
  },
  components: {
    ProgressCircle
  }
}
</script>
=======
<template>
  <div style="position:relative">
    <div
      class="rounded-circle"
      style="background-color:#1A2239;position:absolute;width:35px;height:35px;top:2px;left:2px"
    >
      <feather-icon
        icon="CalendarIcon"
        size="18"
        style="position:absolute;left:9px;top:8px"
      />
    </div>
    <progress-circle
      :completed-steps="15"
      :total-steps="100"
      :diameter="40"
      :circle-width="4"
      :start-color="startColor"
      stop-color="#FFACDA"
      :circle-color="circleColor"
    />
  </div>
</template>

<script>
import { ProgressCircle } from 'vue-progress-circle'

export default {
  components: {
    ProgressCircle
  },
  props: {
    startColor: {
      type: String,
      default: () => "#FFACDA",
    },
    circleColor: {
      type: String,
      default: () => "#D92163",
    },
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
