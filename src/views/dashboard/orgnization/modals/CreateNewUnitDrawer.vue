<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      Create New Unit
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Organizations</label>
            <InputSelect
              placeholder="Select Organization"
              :options="getAllOrgs()"
              :value="organization === null ? null : organization.title"
              @customChange="e => handleOrgChange(e)"
            />
          </div>
          <div class="w-50">
            <label>Unit Name</label>
            <b-form-input
              v-model="unitName"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-button
        style="width: 100%"
        variant="primary"
        @click="handleCreate"
      >
        Create
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput
} from 'bootstrap-vue'
import InputSelect from './InputSelect.vue'
// import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    InputSelect
    // vSelect,
  },
  props: {
  },
  data() {
    return {
      unitName: '',
      organization: null
    }
  },
  async mounted() {
    await this.$store.dispatch('globalState/get_all_organizations')
  },
  methods: {
    async handleCreate() {
      if (this.unitName === null || this.unitName === '' || this.organization === null) {
        this.$toast.error('Please input all correctly.')
      } else {
        await this.$store.dispatch('globalState/create_new_unit', {
          unitName: this.unitName,
          orgId: this.organization.id
        })
        await this.$store.dispatch('globalState/load_org_unit_data')
        this.$refs['my-modal'].hide()
      }
    },
    getAllOrgs() {
      const orgs = Array.from(this.$store.state.globalState.allOrgData)
      return orgs
    },
    handleOrgChange(e) {
      this.organization = e
    },
  },
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
