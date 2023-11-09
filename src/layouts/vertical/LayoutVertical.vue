<template>
  <layout-vertical>

    <router-view />

    <app-customizer
      v-if="showCustomizer"
      slot="customizer"
    />

  </layout-vertical>
</template>

<script>
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    AppCustomizer,
    LayoutVertical,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
  mounted() {
    this.$store.dispatch('globalState/load_org_data')
    this.$store.dispatch('globalState/load_org_unit_data')
    this.$store.dispatch('globalState/load_org_team_data')
    this.$store.dispatch('globalState/get_all_portfolios')
    this.$store.dispatch('globalState/get_all_programs')
  },
}
</script>
