<template>
  <div
    class="demand-view"
  >
    <div
      v-if="!isChartView"
      class="portf-demand-view">
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1" style="width:35%">
          Consumer Robots
        </div>
        <div class="part2" >
          <div class="data-child mr-1 portf-uppercase" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
            {{ ft }}
          </div>
        </div>
      </div>
      <div v-for="(item, index) in this.data" :key="index">
        <div class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt" :class="{'inner-sdw': index === 0}">
          <div class="part1 portf-uppercase" style="cursor:pointer;width:35%" v-on:click="onCollapseCLick(index)">
            <feather-icon :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'" v-if="item.children" size="16" class="mr-1" />
            {{ item.title }}
          </div>
          <div class="part2">
            <div class="data-child mr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
              <span v-if="ft === 'priority'">{{ item[ft] }}</span>
              <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
              <span v-else>{{ item[ft] ? formatCurrency(item[ft]) : '' }}</span>
            </div>
          </div>
        </div>
        <div v-if="opened === index">
          <div v-for="(item1, index1) in item.children" :key="index1">
            <div class="portf-row portf-table-row font-14 border-bottom-dm"  :class="{'inner-sdw': index1 === 0}">
              <div class="part1 portf-bold pl-2" style="padding-top:7px;width:35%">
                {{ item1.title }}
              </div>
              <div class="part2">
                <div class="data-child mr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
                  <span v-if="ft === 'priority'">{{ item[ft] }}</span>
                  <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
                  <span v-else>{{ item[ft] ? formatCurrency(item[ft]) : '' }}</span>
                </div>
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
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      opened: 0,
      c_fields: ['priority', 'value', 'budget', 'quote', 'deadline', 'mgt & study']
    }
  },
  methods: {
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    dateFormat(date) {
      return moment(new Date(date)).format('MM-DD-YYYY')
    },
    formatCurrency(value) {
      // return new Intl.NumberFormat(undefined, {
      //   style: 'currency',
      //   currency: 'USD',
      // }).format(value)
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(value).concat(' US$')
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
