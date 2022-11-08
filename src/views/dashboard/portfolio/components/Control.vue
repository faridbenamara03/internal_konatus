<template>
  <div
    class="demand-view"
  >
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
            {{ row.item.title }}
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
          :key="detail.title"
          class="row-detail d-flex align-items-center control"
        >
          <div class="row-detail--name">
            <span>
              {{ detail.title }}
            </span>
          </div>
          <div class="row-detail--form ml-4 mr-2">
            <div>{{ detail.priority }}</div>
            <div>{{ detail.value }}</div>
            <div>{{ formatCurrency(detail.budget) }}</div>
            <div>{{ detail.quote ? formatCurrency(detail.quote) : "" }}</div>
            <div>{{ dateFormat(detail.deadline) }}</div>
            <div>{{ detail.mgt }}</div>
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BTable,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' },
        { key: 'priority', thStyle: 'width: 11.6%;' },
        { key: 'value', thStyle: 'width: 11.6%;' },
        { key: 'budget', thStyle: 'width: 11.6%;' },
        { key: 'quote', thStyle: 'width: 11.6%;' },
        { key: 'deadline', thStyle: 'width: 11.6%;' },
        { key: 'mgt & study', thStyle: 'width: 12%;' }],
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
      if (item.title === 'total') { return colorClass }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
