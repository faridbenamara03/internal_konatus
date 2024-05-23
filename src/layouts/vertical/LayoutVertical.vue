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
    this.$store.dispatch('globalState/get_all_nature_deadlines')
    this.$store.dispatch('globalState/get_all_option_datas')
    this.$store.dispatch('globalState/get_all_phases')
    this.$store.dispatch('globalState/get_all_depends_projects')
    this.$store.dispatch('globalState/get_all_we_depends')
    this.$store.dispatch('globalState/get_all_workelements')
    this.$store.dispatch('globalState/get_all_portfolios')
    this.$store.dispatch('globalState/get_all_programs')
    this.$store.dispatch('globalState/get_all_projects')
    this.$store.dispatch('globalState/get_all_organizations')
  },
}
</script>
