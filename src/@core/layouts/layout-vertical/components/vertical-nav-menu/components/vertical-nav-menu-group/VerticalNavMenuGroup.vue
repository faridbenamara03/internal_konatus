<template>
  <li
    v-if="item.hasOwnProperty('isoperation') ? item.isoperation === isActive : true"
    class="nav-item has-sub"
    :class="{
      'open': isOpen,
      'disabled': item.disabled,
      /*'sidebar-group-active': isGroupActive,  // nav correction */
    }"
  >
    <b-link
      :id="`nav-${item.type}-${item.id}`"
      v-b-tooltip.hover.top="item.type === 'program' ? getHours(item.id) : ''"
      v-bind="linkProps"
      class="d-flex align-items-center"
      :class="{'m-0': (item.type === 'organization' || item.type === 'company' || item.type === 'organization-unit')}"
      @click="handleNavItemClick(item)"
    >
      <div
        :style="`position:absolute;width:100%;height:45px;background-color:${item.id === c_SelectedNavId && item.type === c_SelectedNavType ? '#9100ff57' : '#0000'};cursor:pointer`"
      />
      <feather-icon
        :icon="isOpen ? 'ChevronDownIcon' : 'ChevronRightIcon'"
        size="16"
      />
      <nav-menu-icon
        :item="item"
      />
      <span
        class="menu-title text-truncate"
      >{{ item.title }}</span>
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
import {
  BLink, BBadge, BCollapse, VBTooltip
} from 'bootstrap-vue'
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
  directives: {
    'b-tooltip': VBTooltip,
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
    },
    c_SelectedNavType() {
      return this.$store.state.globalState.selectedNavObj.type
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
      let baseUrl = ''
      const currentUrl = this.$router.history.current.path
      if (data.type === 'unit' || data.type === 'team' || data.type === 'user' || data.type === 'job' || data.type === 'organization') {
        console.log("groupData:", data)
        this.$store.dispatch('teamState/get_from_selected_nav_id', { data })
        if (data.type === 'unit') {
          baseUrl = `/organization-unit/unit/${data.id}`
          if (baseUrl === currentUrl) return
          this.$router.push(baseUrl)
        } else if (data.type === 'job') {
          baseUrl = `/organization-unit/job/${data.id}`
          if (baseUrl === currentUrl) return
          this.$router.push(baseUrl)
        } else if (data.type === 'team') {
          if (this.$store.state.globalState.unitOrTeamsIndex === "jobs") {
            baseUrl = `/organization-unit/job/${data.jobId}/team/${data.id}`
          } else if (this.$store.state.globalState.unitOrTeamsIndex === "units") {
            baseUrl = `/organization-unit/unit/${data.unitId}/team/${data.id}`
          }
          if (baseUrl === currentUrl) return
          this.$router.push(baseUrl)
        }
      } else {
        if (data.type === 'company') {
          baseUrl = `/organization/${data.id}/portfolio`
        } else if (data.type === 'portfolio') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.id}`
        } else if (data.type === 'program') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.id}`
        } else if (data.type === 'project') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.id}`
        }
        if (baseUrl === currentUrl) return
        if (currentUrl.indexOf('reporting-plan') > 0) {
          baseUrl = `${baseUrl}/reporting-plan`
        } else if (currentUrl.indexOf('reporting-cost') > 0) {
          baseUrl = `${baseUrl}/reporting-cost`
        } else if (currentUrl.indexOf('control') > 0) {
          baseUrl = `${baseUrl}/control`
        }
        this.$store.dispatch('globalState/get_from_selected_nav_id', { data })
        this.$router.push(baseUrl)
      }
    },
    getHours(id) {
      return `${id}00 hours`
    },
  },
}
</script>

<style>

</style>
