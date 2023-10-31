<template>
  <li
    v-if="canViewVerticalNavMenuLink(item)"
    class="nav-item"
    :class="{
      'active': isActive,
      'disabled': item.disabled
    }"
  >
    <b-link
      v-bind="linkProps"
      class="d-flex align-items-center"
      :style="`background-color:${c_SelectedNavId === item.id ? '#9100ff57' : '#0000'};`"
      @click="onNavItemClick(item)"
    >
      <nav-menu-icon
        style="margin-left:23px"
        :item="item"
      />
      <span class="menu-title text-truncate">{{ item.title }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
  </li>
</template>

<script>
import { useUtils as useAclUtils } from '@core/libs/acl'
import { BLink, BBadge } from 'bootstrap-vue'
import { useUtils as useI18nUtils } from '@core/libs/i18n'
import useVerticalNavMenuLink from './useVerticalNavMenuLink'
import mixinVerticalNavMenuLink from './mixinVerticalNavMenuLink'
import NavMenuIcon from '../NavMenuIcon.vue'

export default {
  components: {
    BLink,
    BBadge,
    NavMenuIcon,
  },
  mixins: [mixinVerticalNavMenuLink],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    c_SelectedNavId() {
      return this.$store.state.globalState.selectedNavId
    }
  },
  setup(props) {
    const { isActive, linkProps, updateIsActive } = useVerticalNavMenuLink(props.item)
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuLink } = useAclUtils()

    return {
      isActive,
      linkProps,
      updateIsActive,

      // ACL
      canViewVerticalNavMenuLink,

      // i18n
      t,
    }
  },
  methods: {
    onNavItemClick(data) {
      if (data.type === 'unit' || data.type === 'team' || data.type === 'user' || data.type === 'organization') {
        this.$store.commit('globalState/SAVE_SELECTED_NAV_ID', data)
      } else {
        const baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.id}`
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl || currentUrl.indexOf('/project') > 0) return
        this.$store.dispatch('globalState/get_from_selected_nav_id', { data })
        this.$router.push(baseUrl)
      }
    }
  }
}
</script>
