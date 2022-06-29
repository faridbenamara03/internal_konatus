<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio"
  >
    <b-card-body>
      <b-tabs>
        <b-tab
          title="Demand"
          active
        >
          <b-table
            :items="items"
            :fields="fields"
            borderless
            responsive
          >
            <template #cell(show_details)="row">
              <div
                class="d-flex detail align-center"
                @click="row.toggleDetails"
              >
                <feather-icon
                  :icon="row.detailsShowing ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                  size="16"
                  class="mr-1"
                />
                <p class="m-0 text-uppercase">
                  {{ row.item.name }}
                </p>
              </div>
            </template>

            <template #row-details="row">
              <div
                class="row-detail d-flex align-center"
              >
                <div class="mr-2">
                  {{ row.item.priority }}
                </div>
                <div>
                  {{ row.item.budget }}
                </div>
              </div>
            </template>
          </b-table>
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <b-card-text>
            Biscuit macaroon sugar plum sesame snaps oat cake halvah fruitcake pudding cotton candy. Cheesecake tart wafer soufflé. Chocolate marzipan donut pie soufflé dragée cheesecake. Gummi bears dessert croissant chocolate jujubes fruitcake. Pie cupcake halvah.
          </b-card-text>
          <b-card-text>Tiramisu carrot cake marzipan sugar plum powder marzipan sugar plum bonbon powder. Macaroon jujubes ice cream sugar plum lollipop wafer caramels. Cheesecake chocolate tart cake gingerbread fruitcake cake candy jelly-o. Candy cookie lollipop. Wafer lemon drops chocolate cake gummi bears.</b-card-text>
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
            <b-button class="ml-1 edit">
              <feather-icon
                icon="CheckIcon"
                size="16"
              />
              <span>Finish editing</span>
            </b-button>
            <b-button class="ml-1 load">
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
  BButton, BCard, BCardText, BCardBody, BTable, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
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
      fields: [{ key: 'show_details', thStyle: 'opacity: 0' }, { key: 'priority', thClass: 'text-right', tdClass: 'text-right' }, { key: 'budget', thClass: 'text-right', tdClass: 'text-right' }, { key: 'deadline', thClass: 'text-right', tdClass: 'text-right' }, { key: 'actions', thStyle: 'opacity: 0' }],
      items: [
        {
          name: 'Quadruped robot',
          priority: 'highest',
          budget: '$23896.35',
          deadline: '09/23/2016',
        },
        {
          name: 'micro robot observation nbc',
          priority: 'high',
          budget: '$13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'low',
          budget: '$13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'lowest',
          budget: '$12336.17',
          deadline: '12/03/2017',
        }],
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
