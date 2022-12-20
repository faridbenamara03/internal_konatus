<template>
  <div style="overflow-x:auto">
    <div class="portf-control-view">
      <div style="width:100%;background-color:#1A2239;height:40px">
      </div>
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1">
          Consumer Robots
        </div>
        <div class="part2 mr-2" >
          <div class="data-child mr-1 portf-uppercase" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
            {{ ft }}
          </div>
        </div>
        <div style="width:400px;text-align:center;" class="mr-1 ml-1" v-for="(item, index) in teams" :key="index">
          <div style="position:relative;top:-50px;height:0px;">TEAM {{ item }}</div>
          <div :style="`position:relative;top:-28px;width:100%;height:4px;background-color:${colorsA[index]};border-radius:3px`" />
          <div style="display:flex;justify-content:space-between;">
            <div style="width:25%;text-align:center" v-for="(item1, jndex) in team_fields" :key="jndex">{{ item1 }}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in this.data" :key="index">
        <div class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt" :class="{'inner-sdw': index === 0}">
          <div class="part1 portf-uppercase" style="cursor:pointer" v-on:click="onCollapseCLick(index)">
            <feather-icon :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'" v-if="item.children" size="16" class="mr-1" />
            {{ item.title }}
          </div>
          <div class="part2 mr-2">
            <div class="data-child mr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
              <span v-if="ft === 'priority'">{{ item[ft] }}</span>
              <span v-else-if="ft === 'next_gate'">{{ dateFormat(item[ft]) }}</span>
              <span v-else-if="ft === 'value'">{{ item[ft] }}</span>
              <span v-else>{{ item[ft] ? formatCurrency(item[ft]) : '' }}</span>
            </div>
          </div>
          <div style="width:400px;text-align:center;" class="mr-1 ml-1" v-for="(item, index1) in teams" :key="index1">
            <div style="display:flex;justify-content:space-between;">
              <div style="width:25%;text-align:center" v-for="(item1, jndex) in team_fields" :key="jndex">{{ teamD1[index][index1][jndex] }}</div>
            </div>
          </div>
        </div>
        <div v-if="opened === index">
          <div v-for="(item1, index1) in item.children" :key="index1">
            <div class="portf-row portf-table-row font-14 border-bottom-dm" :class="{'inner-sdw': index1 === 0}">
              <div class="part1 portf-bold pl-2">
                {{ item1.title }}
              </div>
              <div class="part2 mr-2">
                <div class="data-child mr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
                  <span v-if="ft === 'priority'">{{ item1[ft] }}</span>
                  <span v-else-if="ft === 'next_gate'">{{ dateFormat(item1[ft]) }}</span>
                  <span v-else-if="ft === 'value'">{{ item1[ft] }}</span>
                  <span v-else>{{ item1[ft] ? formatCurrency(item1[ft]) : '' }}</span>
                </div>
              </div>
              <div style="width:400px;text-align:center;" class="mr-1 ml-1" v-for="(item, index) in teams" :key="index">
                <div style="display:flex;">
                  <div style="width:25%;text-align:center" v-for="(item1, jndex) in team_fields" :key="jndex">{{ teamD[index1][index][jndex] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1" style="color:#66ffff">
          Total Team Capacity
        </div>
        <div class="part2 mr-2" >
          <div class="data-child mr-1 portf-uppercase" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
            <div class="d-flex" style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;">
              <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
                Info
              </div>
              <div>
                <feather-icon icon="PlusIcon" style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;" />
              </div>
            </div>
          </div>
        </div>
        <div style="width:400px;text-align:center;" class="mr-1 ml-1" v-for="(item, index) in teams" :key="index">
          <div style="display:flex;justify-content:space-between;">
            <div style="width:25%;text-align:center" v-for="(item1, jndex) in team_fields" :key="jndex">
              <span :style="`color: hsl(${170 - (percentD[index][jndex] / 200 * 170)}, 100%, 50%)`">{{ percentD[index][jndex] }}%</span>
            </div>
          </div>
        </div>
      </div>
      <b-pagination
        :total-rows="140"
        :per-page="10"
        first-number
        last-number
        class="mb-1 mt-2"
        prev-class="prev-item"
        next-class="next-item"
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
    </div>
  </div>
</template>

<script>
import {
  BPagination
} from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BPagination
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      opened: 0,
      c_fields: ['priority', 'value', 'budget', 'quote', 'next_gate'],
      team_fields: ['mgt & study', 'dev', 'test', 'total'],
      teams: ['A', 'B', 'C', 'D', 'E', 'F'],
      colorsA: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      teamD1: [
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
      ],
      teamD: [
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
        [
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
          [parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10), parseInt(Math.random() * 30, 10)],
        ],
      ],
      percentD: [
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
      ]
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
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-control.scss';
</style>
