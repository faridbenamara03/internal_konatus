<<<<<<< HEAD
<template>
  <ul
    id="main-menu-navigation"
    class="nav navbar-nav"
  >
    <component
      :is="resolveNavComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import HorizontalNavMenuHeaderLink from '../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue'
import HorizontalNavMenuHeaderGroup from '../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue'

export default {
  components: {
    HorizontalNavMenuHeaderLink,
    HorizontalNavMenuHeaderGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const resolveNavComponent = item => {
      if (item.children) return 'horizontal-nav-menu-header-group'
      return 'horizontal-nav-menu-header-link'
    }

    return {
      resolveNavComponent,
    }
  },
}
</script>
=======
<template>
  <ul
    id="main-menu-navigation"
    class="nav navbar-nav"
  >
    <component
      :is="resolveNavComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import HorizontalNavMenuHeaderLink from '../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue'
import HorizontalNavMenuHeaderGroup from '../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue'

export default {
  components: {
    HorizontalNavMenuHeaderLink,
    HorizontalNavMenuHeaderGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const resolveNavComponent = item => {
      if (item.children) return 'horizontal-nav-menu-header-group'
      return 'horizontal-nav-menu-header-link'
    }

    return {
      resolveNavComponent,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
