<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      Edit Portfolio
    </h3>
    <div class="select-group" style="padding-top: 0px">
      <div class="select-box">
        <label>Portfolio</label>
        <v-select v-model="portfolio" :options="portfolioList" placeholder="Select Portfolio"
          outlined />
      </div>
      <div class="select-box">
        <label>Portfolio Budget</label>
        <b-form-input v-model="portfolioBudget" type="number" />
      </div>
    </div>
    <div>
      <b-button style="width: 100%" variant="primary" @click="handleSave">
        Save
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    vSelect,
  },
  props: {
  },
  data() {
    return {
      portfolio: '',
      portfolioBudget: 0
    }
  },
  methods: {
    handleSave() {
      this.$store.commit('globalState/EDIT_PORTFOLIO',
        { portfolio: this.portfolio, portfolioBudget: this.portfolioBudget })
    },
  },
  computed: {
    portfolioList() {
      const list = this.$store.state.globalState.globalOperationData?.children?.map(t => t.title)
      console.log(111, list)
      return list
    }
  }
}
</script>

<style lang="scss">
@import "~@core/scss/base/components/variables-dark";

.range-slider-fill {
  background-color: #ff9c00;
}

.select-group {
  padding: 27px 0;

  .divider {
    width: 63px;
    height: 0px;
    border: 1px solid $theme-dark-border-color;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0) rotate(90deg);
    top: 16px;
  }

  .select-box {
    label {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;

      &.notice {
        color: $theme-dark-body-color;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }

    .vs__dropdown-toggle {
      background: $theme-dark-card-bg;
      border-radius: 6px;
    }

    .v-select {
      flex: 1;
    }

    margin-bottom: 27px;

    &:last-child {
      margin: 0;
    }

    .b-form-btn-label-control {
      background: $theme-dark-card-bg;

      label {
        font-size: inherit;
        line-height: 200%;
      }
    }

    // .slider {

    // }
  }

  .notice-box {
    padding: 10px 0;
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    border-bottom: 1px solid $theme-dark-border-color;

    svg {
      color: $theme-dark-navigation-li-icon-color;
    }

    h5 {
      font-weight: 700;
      font-size: 15px;
      line-height: 24px;
      margin: 0 0 0 8px;
      text-transform: uppercase;
    }
  }

  .select-group--sub {
    display: flex;
    justify-content: space-between;
    position: relative;

    .select-box {
      margin-right: 16px;
      flex: 1;

      &:last-child {
        margin: 0;
      }
    }
  }
}

@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
