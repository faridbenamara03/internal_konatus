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
      completed-steps="15"
      total-steps="100"
      diameter="40"
      circle-width="4"
      start-color="#FFACDA"
      stop-color="#FFACDA"
      circle-color="#D92163"
      style
    />
  </div>
</template>

<script>
import { ProgressCircle } from 'vue-progress-circle'

export default {
  components: {
    ProgressCircle
  }
}
</script>
