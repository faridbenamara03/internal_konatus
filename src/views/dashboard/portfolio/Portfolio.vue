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
              <b-card>
                <b-row class="mb-2">
                  <b-col
                    md="4"
                    class="mb-1"
                  >
                    <strong>Full Name : </strong>{{ row.item.priority }}
                  </b-col>
                  <b-col
                    md="4"
                    class="mb-1"
                  >
                    <strong>Email : </strong>{{ row.item.budget }}
                  </b-col>
                  <b-col
                    md="4"
                    class="mb-1"
                  >
                    <strong>City : </strong>{{ row.item.deadline }}
                  </b-col>
                </b-row>
              </b-card>
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
  BButton, BCard, BCardText, BCardBody, BTable, BRow, BCol, BTabs, BTab,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    BTable,
    BRow,
    BCol,
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
          priority: "Korrie O'Crevy",
          budget: '$23896.35',
          deadline: '09/23/2016',
        },
        {
          name: 'micro robot observation nbc',
          priority: 'Bailie Coulman',
          budget: '$13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'Stella Ganderton',
          budget: '$13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'Dorolice Crossman',
          budget: '$12336.17',
          deadline: '12/03/2017',
        }],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
