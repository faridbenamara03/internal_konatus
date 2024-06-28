<<<<<<< HEAD
<template>
  <div :class="contentWidth === 'boxed' ? 'container p-0' : null">
    <router-view />
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  setup() {
    const { contentWidth } = useAppConfig()
    return { contentWidth }
  },
}
</script>
=======
<template>
  <div :class="contentWidth === 'boxed' ? 'container p-0' : null">
    <router-view />
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  setup() {
    const { contentWidth } = useAppConfig()
    return { contentWidth }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
