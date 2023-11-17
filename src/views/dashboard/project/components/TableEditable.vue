<template>
  <div
    class="demand-view"
  >
    <div
      class="portf-demand-view"
    >
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part2">
          <div
            v-for="(ft, fi) in fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase pr-1"
            :style="`width:${100 / fields.length}%`"
          >
            {{ ft }}
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
          >
            <div class="part2">
              <div
                v-for="(ft, fi) in fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`width:${100 / fields.length}%`"
              >
                <span v-if="ft === 'priority'">{{ item[ft] }}</span>
                <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
  },
  methods: {
    dateFormat(date) {
      if (date) return moment(new Date(date)).format('MM-DD-YYYY')
      return null
    },
    formatCurrency(value) {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'EUR',
      }).format(value)
    },
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.title === 'total') { return colorClass }
    },
    getTotalValue(data) {
      let totalValue = 0
      data[0].data.forEach(val => {
        totalValue += val
      })
      return totalValue
    },
    getPercent(val, total) {
      return Math.round((val / total) * 100)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-portfolio-demand.scss';
</style>
