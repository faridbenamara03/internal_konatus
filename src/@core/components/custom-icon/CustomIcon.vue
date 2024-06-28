<<<<<<< HEAD
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
import HexahedronIcon from './icons/Hexahedron.vue'

const icons = {
  root: RootIcon,
  program: ProgramIcon,
  hexahedron: HexahedronIcon,
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
=======
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
import HexahedronIcon from './icons/Hexahedron.vue'

const icons = {
  root: RootIcon,
  program: ProgramIcon,
  hexahedron: HexahedronIcon,
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
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
