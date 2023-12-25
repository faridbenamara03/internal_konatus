<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow"
    :class="[
      { 'expanded': !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered) },
      skin === 'semi-dark' ? 'menu-dark' : 'menu-light'
    ]"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    <div
      class="nav-left-menu-1"
      style="height:100%;width:50px;position:absolute;left:0;display:flex;flex-direction:column;justify-content:space-between;"
    >
      <div>
        <div
          style="display:flex;justify-content:center;cursor:pointer"
          class="mt-5"
        >
          <feather-icon
            style="color:white"
            icon="FileTextIcon"
            size="25"
          />
        </div>
        <div
          style="display:flex;justify-content:center;cursor:pointer"
          class="mt-5"
        >
          <feather-icon
            style="color:white"
            icon="CalendarIcon"
            size="25"
          />
        </div>
        <div
          style="display:flex;justify-content:center;cursor:pointer"
          class="mt-5"
        >
          <feather-icon
            style="color:white"
            icon="BarChart2Icon"
            size="25"
          />
        </div>
        <div
          style="display:flex;justify-content:center;cursor:pointer"
          class="mt-5"
        >
          <feather-icon
            style="color:white"
            icon="PlusCircleIcon"
            size="25"
            @click="toggleCreateNewDrawer"
          />
        </div>
        <div
          style="display:flex;justify-content:center;cursor:pointer"
          class="mt-5"
        >
          <feather-icon
            style="color:white"
            icon="EditIcon"
            size="25"
            @click="toggleEditPortfolioDrawer"
          />
        </div>
      </div>
      <div
        style="display:flex;justify-content:center"
        class="mb-2"
      >
        <VerticalNavUserMenu />
      </div>
    </div>
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot
        name="header"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :toggleCollapsed="toggleCollapsed"
        :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row justify-content-center">

          <!-- Logo & Text -->
          <li class="nav-item">
            <b-link
              class="navbar-brand"
              to="/"
            >
              <span class="brand-logo">
                <b-img
                  :src="appLogoImage"
                  alt="logo"
                />
              </span>
              <h2 class="brand-text">
                {{ appName }}
              </h2>
            </b-link>
          </li>

          <!-- Toggler Button -->
          <!-- <li class="nav-item nav-toggle">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                icon="XIcon"
                size="20"
                class="d-block d-xl-none"
                @click="toggleVerticalMenuActive"
              />
              <feather-icon
                :icon="collapseTogglerIconFeather"
                size="20"
                class="d-none d-xl-block collapse-toggle-icon"
                @click="toggleCollapsed"
              />
            </b-link>
          </li> -->
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div
      :class="{'d-block': shallShadowBottom}"
      class="shadow-bottom"
    />

    <!-- main menu content-->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="main-menu-content scroll-area"
      tagname="ul"
      @ps-scroll-y="evt => { shallShadowBottom = evt.srcElement.scrollTop > 0 }"
    >
      <vertical-nav-menu-items
        v-if="getIndex === 'teams'"
        :items="getNavJobMenuItems"
        class="navigation navigation-main"
      />
      <vertical-nav-menu-items
        v-else
        :items="comptNavMenuItems"
        class="navigation navigation-main"
      />
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import store from '@/store'
// import navMenuItems from '@/navigation/vertical'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { BLink, BImg } from 'bootstrap-vue'
import { provide, computed, ref } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'
import { $themeConfig } from '@themeConfig'
import VerticalNavMenuItems from './components/vertical-nav-menu-items/VerticalNavMenuItems.vue'
import useVerticalNavMenu from './useVerticalNavMenu'
import VerticalNavUserMenu from './components/vertical-nav-user-menu/VerticalNavUserMenu.vue'

export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
    VerticalNavUserMenu
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  computed: {
    comptNavMenuItems() {
      const data = [{ search: true }]
      const globalData = []
      globalData.push(this.$store.state.globalState.globalOrganizationData[0])
      globalData.push(this.$store.state.globalState.globalOrganizationUnitData[0])
      data.push(...globalData.filter(Boolean))
      return data
    },
    getIndex() {
      return this.$store.state.orgnizationState.unitOrTeamsIndex
    },
    getNavJobMenuItems() {
      const data = [{ search: true }]
      const globalData = []
      globalData.push(this.$store.state.globalState.globalOrganizationData[0])
      globalData.push(this.$store.state.globalState.globalOrganizationTeamData[0])
      data.push(...globalData.filter(Boolean))
      return data
    }
  },
  methods: {
    toggleCreateNewDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PORTFOLIO_DRAWER')
    },
    toggleEditPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_EDIT_PORTFOLIO_DRAWER')
    }
  },
  setup(props) {
    const {
      isMouseHovered,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      updateMouseHovered,
    } = useVerticalNavMenu(props)

    const { skin } = useAppConfig()

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref(false)

    provide('isMouseHovered', isMouseHovered)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon'))

    // App Name
    const { appName, appLogoImage } = $themeConfig.app
    return {
      navMenuItems: store.state.globalState.globalData,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,

      // Shadow Bottom
      shallShadowBottom,

      // Skin
      skin,

      // App Name
      appName,
      appLogoImage,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";
@import "~@core/scss/base/components/variables-dark";
.nav-left-menu-1 {
  background-color: #7267f065;
}
</style>
