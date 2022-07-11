<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    style="height: 1em; width: 1em;"
  />
</template>

<script>
import RootIcon from './icons/RootIcon.vue'
import ProgramIcon from './icons/ProgramIcon.vue'

const icons = {
  root: RootIcon,
  program: ProgramIcon,
}

export default {
  name: 'CustomIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name]
    },
  },
}
</script>
