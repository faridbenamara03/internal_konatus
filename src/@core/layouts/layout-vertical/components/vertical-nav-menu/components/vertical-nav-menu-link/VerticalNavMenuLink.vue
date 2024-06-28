<<<<<<< HEAD
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
      if (data.type === 'unit' || data.type === 'team' || data.type === 'user' || data.type === 'job' || data.type === 'organization') {
        let baseUrl = ''
        const currentUrl = this.$router.history.current.path
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
        } else if (data.type === 'user') {
          if (this.$store.state.globalState.unitOrTeamsIndex === "jobs") {
            baseUrl = `/organization-unit/job/${data.jobId}/team/${data.teamId}/user/${data.id}`
          } else if (this.$store.state.globalState.unitOrTeamsIndex === "units") {
            baseUrl = `/organization-unit/unit/${data.unitId}/team/${data.teamId}/user/${data.id}`
          }
          if (baseUrl === currentUrl) return
          this.$router.push(baseUrl)
        }
      } else {
        let baseUrl = ''
        if (data.type === 'portfolo') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}`
        } else if (data.type === 'program') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}`
        } else if (data.type === 'project') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.id}`
        } else if (data.type === 'subproject') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.projectId}/subproject/${data.id}`
        }
        const currentUrl = this.$router.history.current.path
        // if (baseUrl === currentUrl || currentUrl.indexOf('/project') > 0) return
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
    }
  }
}
</script>
=======
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
      if (data.type === 'unit' || data.type === 'team' || data.type === 'user' || data.type === 'job' || data.type === 'organization') {
        let baseUrl = ''
        const currentUrl = this.$router.history.current.path
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
        } else if (data.type === 'user') {
          if (this.$store.state.globalState.unitOrTeamsIndex === "jobs") {
            baseUrl = `/organization-unit/job/${data.jobId}/team/${data.teamId}/user/${data.id}`
          } else if (this.$store.state.globalState.unitOrTeamsIndex === "units") {
            baseUrl = `/organization-unit/unit/${data.unitId}/team/${data.teamId}/user/${data.id}`
          }
          if (baseUrl === currentUrl) return
          this.$router.push(baseUrl)
        }
      } else {
        let baseUrl = ''
        if (data.type === 'portfolo') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}`
        } else if (data.type === 'program') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}`
        } else if (data.type === 'project') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.id}`
        } else if (data.type === 'subproject') {
          baseUrl = `/organization/${data.orgId}/portfolio/${data.portfolioId}/program/${data.programId}/project/${data.projectId}/subproject/${data.id}`
        }
        const currentUrl = this.$router.history.current.path
        // if (baseUrl === currentUrl || currentUrl.indexOf('/project') > 0) return
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
    }
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
