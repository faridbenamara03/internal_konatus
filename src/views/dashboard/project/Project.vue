<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <b-button
            variant="flat-primary"
            @click="handleUpdate"
          >
            <feather-icon
              icon="RotateCwIcon"
            />
            Update
          </b-button>
          <div class="d-flex action-group">
            <b-button variant="flat-primary">
              <feather-icon
                icon="BarChartIcon"
              />
              Priority
            </b-button>
            <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon
                icon="ArrowRightIcon"
              />
              Next Phase
            </b-button>
          </div>
        </div>
        <b-tab
          title="Demand"
          :class="{'border-0': !teams.length}"
        >
          <div
            v-if="!teams.length"
            class="no-data"
          >
            <feather-icon
              icon="FileIcon"
              size="48"
            />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
          <div class="project-demand-view">
            <div
              v-for="team in teams"
              :key="team.id"
              class="project-team"
            >
              <div class="d-flex justify-content-between align-items-center">
                <p class="text-capitalize m-0 team-name--text">
                  {{ team.name }}
                </p>
                <b-button variant="flat-primary">
                  Select All
                </b-button>
              </div>
              <app-collapse class="my-2">
                <app-collapse-item
                  v-for="phase in team.phases"
                  :key="phase.phaseV"
                  :title="'Phase ' + phase.phaseV"
                  class="collapse-card"
                  is-visible
                >
                  <div class="phase-box">
                    <div
                      class="bar h-100"
                      :style="{ 'background': team.color}"
                    />
                    <div class="phase-box--content">
                      <p class="title">
                        {{ phase.name }}
                      </p>
                      <p class="muted">
                        {{ phase.version }}
                      </p>
                      <div class="d-flex">
                        <div class="d-flex w-50 align-items-center">
                          <feather-icon
                            icon="BarChartIcon"
                          />
                          <span>{{ phase.priority }}</span>
                        </div>
                        <div class="d-flex w-50 align-items-center">
                          <b-icon icon="door-closed" />
                          <span>{{ phase.gate }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </app-collapse-item>
              </app-collapse>
            </div>
          </div>
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <p>Reporting</p>
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
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="ArrowDownIcon"
                size="16"
              />
              <span>Import</span>
            </b-button>
            <b-button
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="UploadIcon"
                size="16"
              />
              <span>Export</span>
            </b-button>
            <b-button
              v-b-modal.modal-request-quote
              class="ml-1"
              variant="outline-primary"
              :disabled="!teams.length"
            >
              <feather-icon
                icon="MapIcon"
                size="16"
              />
              <span>Request Quote</span>
            </b-button>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button
        variant="primary"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <modal-request-quote
      :data="teams"
      @onSubmit="handleRequestQuote"
    />
  </b-card>
</template>

<script>
import {
  BButton, BCard, BCardText, BCardBody, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import ModalRequestQuote from './modals/RequestQuoteModal.vue'

export default {
  components: {
    AppCollapse,
    AppCollapseItem,
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    ModalRequestQuote,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      teams: [],
      tabIndex: 0,
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleUpdate() {
      this.teams = [
        {
          id: 1,
          name: 'team a',
          activities: null,
          estimate: null,
          demand: null,
          deadline: null,
          color: '#D68232',
          phases: [
            {
              phaseV: 1,
              name: 'Install software',
              priority: 'Highest',
              gate: 1,
              version: '1.28.17.1.55',
            },
            {
              phaseV: 2,
              name: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 3,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
            {
              phaseV: 4,
              name: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 5,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
          ],
        },
        {
          id: 2,
          name: 'team b',
          activities: null,
          estimate: null,
          demand: null,
          deadline: null,
          color: '#FFEA2C',
          phases: [
            {
              phaseV: 1,
              name: 'Debugging',
              priority: 'Highest',
              gate: 1,
              version: '1.28.17.1.55',
            },
            {
              phaseV: 2,
              name: 'Improve generator comp...',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 3,
              name: 'Improve generator comp...',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
          ],
        },
        {
          id: 3,
          name: 'team c',
          activities: null,
          estimate: null,
          demand: null,
          deadline: null,
          color: '#28C76F',
          phases: [
            {
              phaseV: 1,
              name: 'Electricity market AI',
              priority: 'Highest',
              gate: 1,
              version: '1.28.17.1.55',
            },
            {
              phaseV: 2,
              name: 'Electricity market AI II',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 3,
              name: 'Electricity market AI III',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
          ],
        },
        {
          id: 4,
          name: 'team d',
          activities: null,
          estimate: null,
          demand: null,
          deadline: null,
          color: '#00CFE8',
          phases: [
            {
              phaseV: 1,
              name: 'Activity Element 58',
              priority: 'Highest',
              gate: 1,
              version: '1.28.17.1.55',
            },
            {
              phaseV: 2,
              name: 'Activity Element 123',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 3,
              name: 'Activity Element 129',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
          ],
        },
        {
          id: 5,
          name: 'team e',
          activities: null,
          estimate: null,
          demand: null,
          deadline: null,
          color: '#6610F2',
          phases: [
            {
              phaseV: 1,
              name: 'Activity Element 58',
              priority: 'Highest',
              gate: 1,
              version: '1.28.17.1.55',
            },
            {
              phaseV: 2,
              name: 'Activity Element 123',
              priority: 'Highest',
              gate: 2,
              version: '1.28.17.1.120',
            },
            {
              phaseV: 3,
              name: 'Activity Element 129',
              priority: 'Highest',
              gate: 3,
              version: '1.28.17.1.126',
            },
          ],
        },
      ]
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
