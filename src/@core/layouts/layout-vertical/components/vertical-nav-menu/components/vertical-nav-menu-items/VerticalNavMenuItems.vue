<<<<<<< HEAD
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
    <VerticalNavMenuContent
      v-if="!isActive"
      class="teams-jobs-toggler"
    />
    <VersionDisplay />
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VersionDisplay from '../VersionDisplay.vue'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuSearch from '../vertical-nav-menu-search/VerticalNavMenuSearch.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import VerticalNavMenuContent from '../vertical-nav-menu-contents/VerticalNavMenuContent.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuSearch,
    VerticalNavMenuGroup,
    VerticalNavMenuContent,
    VersionDisplay,
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

<style>
  .teams-jobs-toggler {
    position: absolute;
    bottom: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 30px 0px !important;
  }
</style>
=======
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
    <VerticalNavMenuContent
      v-if="!isActive"
      class="teams-jobs-toggler"
    />
    <VersionDisplay />
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VersionDisplay from '../VersionDisplay.vue'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuSearch from '../vertical-nav-menu-search/VerticalNavMenuSearch.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'
import VerticalNavMenuContent from '../vertical-nav-menu-contents/VerticalNavMenuContent.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuSearch,
    VerticalNavMenuGroup,
    VerticalNavMenuContent,
    VersionDisplay,
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

<style>
  .teams-jobs-toggler {
    position: absolute;
    bottom: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 30px 0px !important;
  }
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
