<<<<<<< HEAD
<template>
  <b-nav-item @click="skin = isDark ? 'light' : 'dark'">
    <feather-icon
      size="21"
      :icon="`${isDark ? 'Sun' : 'Moon'}Icon`"
    />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    return { skin, isDark }
  },
}
</script>
=======
<template>
  <b-nav-item @click="skin = isDark ? 'light' : 'dark'">
    <feather-icon
      size="21"
      :icon="`${isDark ? 'Sun' : 'Moon'}Icon`"
    />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    return { skin, isDark }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
