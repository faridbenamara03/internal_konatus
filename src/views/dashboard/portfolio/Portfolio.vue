<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio"
  >
    <b-card-body>
      <b-tabs v-model="tabIndex">
        <b-tab
          title="Demand"
        >
          <Demand :data="items" />
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <Reporting />
        </b-tab>
        <b-tab
          title="Control"
        >
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
                class="mr-1"
              />
              <span>{{ getToday() }}</span>
            </div>
            <b-button
              v-if="tabIndex === 0"
              class="ml-1 edit"
            >
              <feather-icon
                icon="CheckIcon"
                size="16"
              />
              <span>Finish editing</span>
            </b-button>
            <b-button
              v-if="tabIndex === 0"
              class="ml-1 load"
            >
              <feather-icon
                icon="ArrowDownIcon"
                size="16"
              />
              <span>Import</span>
            </b-button>
            <b-button class="ml-1 load">
              <feather-icon
                icon="UploadIcon"
                size="16"
              />
              <span>Export</span>
            </b-button>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button variant="primary">
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
  </b-card>
</template>

<script>
import {
  BButton, BCard, BCardText, BCardBody, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'
import Demand from './Demand.vue'
import Reporting from './Reporting.vue'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    Reporting,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [
        {
          name: 'Quadruped robot',
          priority: 'highest',
          budget: '1100',
          deadline: '06/01/2021',
          children: [
            {
              name: 'New format',
              priority: 'high',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Enhanced motricity',
              priority: 'highest',
              budget: '240',
              deadline: '03/28/2021',
            },
            {
              name: 'Enhanced authonomy',
              priority: 'highest',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Dual sourcing for Q',
              priority: 'lowest',
              budget: '150',
              deadline: '12/31/2021',
            },
          ],
        },
        {
          name: 'micro robot observation nbc',
          priority: 'high',
          budget: '13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'low',
          budget: '13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'lowest',
          budget: '12336.17',
          deadline: '12/03/2017',
        },
        {
          name: 'total',
          budget: '40146.14',
        }],
      tabIndex: 0,
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
