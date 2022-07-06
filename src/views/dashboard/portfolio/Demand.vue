<template>
  <b-table
    :items="data"
    :fields="fields"
    :tbody-tr-class="rowClass"
    borderless
    responsive
  >
    <template #cell(show_details)="row">
      <div
        class="d-flex detail align-center"
        @click="row.toggleDetails"
      >
        <feather-icon
          v-if="row.item.children"
          :icon="row.detailsShowing ? 'ChevronDownIcon' : 'ChevronRightIcon'"
          size="16"
          class="mr-1"
        />
        <p class="m-0 text-uppercase">
          {{ row.item.name }}
        </p>
      </div>
    </template>

    <template #cell(budget)="row">
      {{ formatCurrency(row.item.budget) }}
    </template>

    <template #cell(deadline)="row">
      {{ row.item.deadline ? dateFormat(row.item.deadline) : '' }}
    </template>

    <template #row-details="row">
      <div
        v-for="detail in row.item.children"
        :key="detail.name"
        class="row-detail d-flex align-items-center"
      >
        <div class="row-detail--name">
          <span>
            {{ detail.name }}
          </span>
        </div>
        <div class="row-detail--form">
          <v-select
            v-model="detail.priority"
            :dir="'rtl'"
            :options="['highest', 'high', 'low', 'lowest']"
            outlined
          />

          <b-form-input
            :dir="'rtl'"
            :value="formatCurrency(detail.budget)"
          />
          <b-form-input
            :dir="'rtl'"
            :value="dateFormat(detail.deadline)"
          />
          <div
            class="d-flex align-items-center justify-content-end"
          >
            <b-button variant="flat-primary">
              <feather-icon icon="Edit2Icon" />
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon icon="DollarSignIcon" />
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon icon="ChevronsRightIcon" />
            </b-button>
          </div>
        </div>
      </div>
    </template>
  </b-table>
</template>

<script>
import { BButton, BFormInput, BTable } from 'bootstrap-vue'
import moment from 'moment'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    BTable,
    vSelect,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, 'priority', 'budget', 'deadline', { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
    }
  },
  methods: {
    dateFormat(date) {
      return moment(new Date(date)).format('MM-DD-YYYY')
    },
    formatCurrency(value) {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
      }).format(value).replace(',', '.')
    },
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.name === 'total') { return colorClass }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
