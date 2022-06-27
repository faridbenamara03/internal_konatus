<template>
  <ul>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
      :is-active="isActive"
      @toggleChange="toggleChange"
    />
    <VerticalNavUserMenu />
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuSearch from '../vertical-nav-menu-search/VerticalNavMenuSearch.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import VerticalNavUserMenu from '../vertical-nav-user-menu/VerticalNavUserMenu.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuSearch,
    VerticalNavMenuGroup,
    VerticalNavUserMenu,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide('openGroups', ref([]))
    const isActive = ref(true)

    return {
      resolveNavItemComponent,
      // toggle
      isActive,
    }
  },
  methods: {
    toggleChange(state) {
      this.isActive = state
    },
  },
}
</script>
