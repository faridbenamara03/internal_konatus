<template>
  <li
    v-if="canViewVerticalNavMenuGroup(item) && (item.hasOwnProperty('isOperation') ? item.isOperation === isActive : true)"
    class="nav-item has-sub"
    :class="{
      'open': isOpen,
      'disabled': item.disabled,
      'sidebar-group-active': isGroupActive,
    }"
  >
    <b-link
      v-bind="linkProps"
      class="d-flex align-items-center"
      :class="{'m-0': item.type === 'root'}"
      @click="handleNavItemClick(item)"
    >
      <div @click="handleNavItemClick(item)"
        :style="`position:absolute;width:100%;height:45px;background-color:${item.id === c_SelectedNavId ? '#9100ff57' : '#0000'};cursor:pointer`" />
      <feather-icon
        :icon="isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'"
        size="16"
      />
      <nav-menu-icon :item="item" />
      <span class="menu-title text-truncate" >{{ item.title }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
    <b-collapse
      v-model="isOpen"
      class="menu-content"
      tag="ul"
    >
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </b-collapse>
  </li>
</template>

<script>
import { BLink, BBadge, BCollapse } from 'bootstrap-vue'
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { useUtils as useI18nUtils } from '@core/libs/i18n'
import { useUtils as useAclUtils } from '@core/libs/acl'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import NavMenuIcon from '../NavMenuIcon.vue'

// Composition Function
import useVerticalNavMenuGroup from './useVerticalNavMenuGroup'
import mixinVerticalNavMenuGroup from './mixinVerticalNavMenuGroup'

export default {
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    BLink,
    BBadge,
    BCollapse,
    NavMenuIcon,
  },
  mixins: [mixinVerticalNavMenuGroup],
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: Boolean,
  },
  computed: {
    c_SelectedNavId() {
      return this.$store.state.globalState.selectedNavId
    }
  },
  setup(props) {
    const {
      isOpen,
      isGroupActive,
      linkProps,
      updateGroupOpen,
      updateIsActive,
    } = useVerticalNavMenuGroup(props.item)

    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuGroup } = useAclUtils()

    return {
      resolveNavItemComponent,
      isOpen,
      isGroupActive,
      linkProps,
      updateGroupOpen,
      updateIsActive,

      // ACL
      canViewVerticalNavMenuGroup,

      // i18n
      t,
    }
  },
  methods: {
    handleNavItemClick(data) {
      this.updateGroupOpen(!this.isOpen)
      this.updateIsActive()
      this.$store.commit('globalState/SAVE_SELECTED_NAV_ID', data)
      if (data.type === 'team') {
        this.$store.commit('globalState/HANDLE_NAV_TEAM_SELECT', data)
      }
    },
  },
}
</script>

<style>

</style>
