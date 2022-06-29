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
  BButton, BCard, BCardText, BCardBody, BFormInput, BTable, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BFormInput,
    BTabs,
    BTab,
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
      fields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'priority', thClass: 'text-right', tdClass: 'text-right' }, { key: 'budget', thClass: 'text-right', tdClass: 'text-right' }, { key: 'deadline', thClass: 'text-right', tdClass: 'text-right' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
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
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
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
