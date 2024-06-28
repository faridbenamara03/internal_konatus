<<<<<<< HEAD
<template>
  <div
    class="demand-view"
  >
    <div
      class="portf-demand-view"
    >
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div
          v-for="(ft, fi) in fields"
          :key="fi"
          class="data-child mr-1 portf-uppercase pr-1"
        >
          <span :style="`display:block;width:100px`">{{ ft.title }}</span>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
          >
            <div
              v-for="(ft, fi) in fields"
              :key="fi"
              class="data-child mr-1 pr-1"
            >
              <span
                v-if="ft.key === 'startdate_d' || ft.key === 'enddate_d' || ft.key === 'new_startdate_e' || ft.key === 'new_enddate_e'"
                :style="`display:block;width:100px`"
              >
                {{ dateFormat(item[ft.key]) }}
              </span>
              <span
                v-else-if="ft.key === 'acc_r_e'"
                :style="`display:block;width:100px`"
              >
                {{ item[ft.key] }}%
              </span>
              <span
                v-else
                :style="`display:block;width:100px`"
              >{{ item[ft.key] }}</span>
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
=======
<template>
  <div
    class="demand-view"
  >
    <div
      class="portf-demand-view"
    >
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div
          v-for="(ft, fi) in fields"
          :key="fi"
          class="data-child mr-1 portf-uppercase pr-1"
        >
          <span :style="`display:block;width:100px`">{{ ft.title }}</span>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
          >
            <div
              v-for="(ft, fi) in fields"
              :key="fi"
              class="data-child mr-1 pr-1"
            >
              <span
                v-if="ft.key === 'startdate_d' || ft.key === 'enddate_d' || ft.key === 'new_startdate_e' || ft.key === 'new_enddate_e'"
                :style="`display:block;width:100px`"
              >
                {{ dateFormat(item[ft.key]) }}
              </span>
              <span
                v-else-if="ft.key === 'acc_r_e'"
                :style="`display:block;width:100px`"
              >
                {{ item[ft.key] }}%
              </span>
              <span
                v-else
                :style="`display:block;width:100px`"
              >{{ item[ft.key] }}</span>
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
      console.log("Date:", date)
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
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
