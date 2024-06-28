<<<<<<< HEAD
<template>
  <div class="control-nav">
    <b-input-group class="input-group">
      <b-form-input
        v-model="searchQuery"
        placeholder="Search"
      />
      <b-input-group-prepend class="input-prepend">
        <b-icon icon="search" />
      </b-input-group-prepend>
    </b-input-group>
    <div class="mt-1">
      <b-button-group class="button-group">
        <b-button
          :class="{'active': isActive}"
          @click="handleToggle(true)"
        >
          Operation
        </b-button>
        <b-button
          :class="{'active': !isActive}"
          @click="handleToggle(false)"
        >
          organization
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import {
  BButton, BButtonGroup, BFormInput, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'

export default {
  name: 'VerticalNavMenuSearch',
  components: {
    BButton,
    BButtonGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: Boolean,
    searchQuery: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleToggle(state) {
      this.$router.push({ path: state ? '/organization' : '/organization-unit' })
      this.$emit('toggleChange', state)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';
  .control-nav {
    margin: 16px;
  }
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
  .button-group {
    border: 1px solid $theme-dark-input-border-color;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    button {
      background: transparent !important;
      color: $theme-dark-button-primary-normal-text;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      width: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
      border: none;
      &:nth-child(1) {
        border-right: 1px solid $theme-dark-input-border-color;
        border-radius: 5px 0px 0px 5px;
      }
      &.active {
        color: $theme-dark-button-primary-active-text;
        background: $theme-dark-button-primary-active-bg !important;
      }
      &:hover {
        box-shadow: none !important;
      }
    }
  }
</style>
=======
<template>
  <div class="control-nav">
    <b-input-group class="input-group">
      <b-form-input
        v-model="searchQuery"
        placeholder="Search"
      />
      <b-input-group-prepend class="input-prepend">
        <b-icon icon="search" />
      </b-input-group-prepend>
    </b-input-group>
    <div class="mt-1">
      <b-button-group class="button-group">
        <b-button
          :class="{'active': isActive}"
          @click="handleToggle(true)"
        >
          Operation
        </b-button>
        <b-button
          :class="{'active': !isActive}"
          @click="handleToggle(false)"
        >
          organization
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import {
  BButton, BButtonGroup, BFormInput, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'

export default {
  name: 'VerticalNavMenuSearch',
  components: {
    BButton,
    BButtonGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: Boolean,
    searchQuery: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleToggle(state) {
      this.$router.push({ path: state ? '/organization' : '/organization-unit' })
      this.$emit('toggleChange', state)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';
  .control-nav {
    margin: 16px;
  }
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
  .button-group {
    border: 1px solid $theme-dark-input-border-color;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    button {
      background: transparent !important;
      color: $theme-dark-button-primary-normal-text;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      width: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
      border: none;
      &:nth-child(1) {
        border-right: 1px solid $theme-dark-input-border-color;
        border-radius: 5px 0px 0px 5px;
      }
      &.active {
        color: $theme-dark-button-primary-active-text;
        background: $theme-dark-button-primary-active-bg !important;
      }
      &:hover {
        box-shadow: none !important;
      }
    }
  }
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
