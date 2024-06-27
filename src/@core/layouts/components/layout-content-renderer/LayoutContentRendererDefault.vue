<template>
  <div
    class="app-content content"
    :class="[{'show-overlay': $store.state.app.shallShowOverlay}, $route.meta.contentClass]"
  >
    <div class="content-overlay" />
    <!-- <div class="header-navbar-shadow" /> -->
    <div
      class="content-wrapper"
      :class="contentWidth === 'boxed' ? 'container p-0' : null"
    >
      <slot name="breadcrumb">
        <app-breadcrumb />
      </slot>
      <div class="content-body">
        <!-- <b-input-group class="input-group mb-1">
          <b-form-input
            v-model="searchQuery"
            placeholder="Search"
          />
          <b-input-group-prepend class="input-prepend">
            <b-icon icon="search" />
          </b-input-group-prepend>
        </b-input-group> -->
        <transition
          :name="routerTransition"
          mode="out-in"
        >
          <slot />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   BInputGroup, BFormInput, BInputGroupPrepend
// } from 'bootstrap-vue'
import AppBreadcrumb from '@core/layouts/components/AppBreadcrumb.vue'
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  components: {
    AppBreadcrumb,
    // BInputGroup,
    // BFormInput,
    // BInputGroupPrepend
  },
  setup() {
    const { routerTransition, contentWidth } = useAppConfig()

    return {
      routerTransition, contentWidth,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/components/variables-dark';
.input-group {
  border: 1px solid $theme-dark-input-border-color;
  border-radius: 5px;
  height: 40px;
  input {
    padding: 10px;
    background: transparent;
    border: none;
    height: 100%;
  }
  .input-prepend {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px;
  }
}
</style>
