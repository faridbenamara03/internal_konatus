<template>
  <div v-click-outside="hideSelectMenu">
    <b-input-group>
      <template #append>
        <b-input-group-text @click="dropdownToggle" style="cursor:pointer">
          <feather-icon
            :icon="dropdownOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'"
          />
        </b-input-group-text>
      </template>
      <b-form-input @focus="showSelectMenu" :value="value" @input="handleChange" :placeholder="placeholder"/>
    </b-input-group>
    <div :style="`display:${this.dropdownOpen ? 'block' : 'none'};position:absolute;z-index:10;width:47.5%;`" class="portf-sub-header-bg border-top-0 border border-secondary">
      <div style="padding-top:7px;padding-bottom:7px" class="create-input-select-mute pr-1 pl-1" v-if="filteredOption.length === 0">options empty</div>
      <div @click="onSelectClick(item)" style="cursor:pointer;padding-top:7px;padding-bottom:7px" class="pr-1 pl-1 create-input-select-font css-4-hv" v-for="(item, i) in filteredOption" :key="i">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { BFormInput, BInputGroup, BInputGroupText } from "bootstrap-vue"

export default {
  components: {
    BInputGroup,
    BFormInput,
    BInputGroupText
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      dropdownOpen: false,
      filteredOption: this.options
    }
  },
  methods: {
    dropdownToggle() {
      this.dropdownOpen = !this.dropdownOpen
    },
    showSelectMenu() {
      this.dropdownOpen = true
    },
    hideSelectMenu() {
      this.dropdownOpen = false
    },
    onSelectClick(item) {
      this.dropdownOpen = false
      this.$emit("customChange", item)
    },
    handleChange(e) {
      this.dropdownOpen = true
      if (e === '') {
        this.filteredOption = this.options
      } else {
        const tmp = []
        this.options.forEach(element => {
          if (element.toUpperCase().indexOf(e.toUpperCase()) > -1) tmp.push(element)
        })
        this.filteredOption = tmp
      }
      this.$emit("customChange", e)
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-demand.scss';
.create-input-select-font {
  color: $theme-dark-label-color;
}
.create-input-select-mute {
  color: $theme-dark-text-muted-color
}
.css-4-hv:hover {
  background-color: $theme-dark-tabs-border-color;
}
</style>
