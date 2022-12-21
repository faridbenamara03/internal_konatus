<template>
  <div v-if="reportingState === 'plan'" class="report">
    <div class="reporting-side">
      <div>
        <div class="report-block--head" style="margin-top:50px;">
          <p class="m-0 text-uppercase">
            {{ data.title }}
          </p>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="report-block--head" style="cursor:pointer" @click="onCollapseClick(index1)">
            <feather-icon v-if="item1.children"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
            <p class="m-0 text-uppercase text-overflow-ellipse">
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1.children && openedCollapse === index1">
            <div v-for="(item2, index2) in item1.children" :key="index2" class="report-block-child">
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
      <!-- <app-collapse accordion>
        <app-collapse-item title="Accordion Item 1">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </app-collapse-item>
      </app-collapse> -->
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <div />
        <div class="reporting-content-header--badge">
          <!-- <b-button
            variant="flat-dark"
            class="d-inline-flex align-items-center"
          >
            <span class="badge" />
            <span>Phase</span>
          </b-button> -->
          <b-button variant="flat-dark">
            <b-icon icon="diamond-fill" variant="success" />
            <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
            Milestones
          </b-button>
          <b-button variant="flat-dark" class="badge-demand">
            <b-icon icon="circle-fill" />
            Demand
          </b-button>
          <b-button variant="flat-dark" class="badge-engage">
            <b-icon icon="circle-fill" />
            Engaged
          </b-button>
          <b-button variant="flat-dark" class="badge-estimate">
            <b-icon icon="circle-fill" />
            Real Estimated
          </b-button>
        </div>
      </div>
      <div class="reporting-content--body">
        <div class="timeline-list">
          <div v-for="(date, index) in reportingDates" :key="index" class="date" :class="{ 'active': isToday(date) }">
            <p v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true" class="month">
              {{ getMonth(date) }}
            </p>
            <p class="week">
              {{ getWeek(date) }}
            </p>
            <p class="day">
              {{ getDay(date) }}
            </p>
          </div>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="progress-wrapper w-100">
            <b-card no-body>
              <b-card-text class="mb-0">
                Reticulating splines… {{ value1 + '%' }}
              </b-card-text>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${Math.random() * 100 + 100}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${Math.random() * 100 + 100}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${Math.random() * 100 + 100}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${Math.random() * 100 + 200}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${Math.random() * 100 + 200}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${Math.random() * 100 + 200}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${Math.random() * 100 + 250}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${Math.random() * 100 + 300}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${Math.random() * 100 + 300}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
              </div>
            </b-card>
          </div>
          <template v-if="item1.children && openedCollapse === index1">
            <div v-for="(item2, index2) in item1.children" :key="index2" class="progress-wrapper w-100">
              <b-card no-body>
                <b-card-text class="mb-0">
                  Reticulating splines… {{ value1 + '%' }}
                </b-card-text>
                <div class="d-flex">
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                    <div :style="`width:${Math.random() * 100 + 100}px`">
                      <b-progress value="100%" max="100" variant="danger" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                    <div :style="`width:${Math.random() * 100 + 100}px`">
                      <b-progress value="100%" max="100" variant="danger" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                    <div :style="`width:${Math.random() * 100 + 100}px`">
                      <b-progress value="100%" max="100" variant="danger" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                    <div :style="`width:${Math.random() * 100 + 200}px`">
                      <b-progress value="100%" max="100" variant="success" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                    <div :style="`width:${Math.random() * 100 + 200}px`">
                      <b-progress value="100%" max="100" variant="success" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                    <div :style="`width:${Math.random() * 100 + 200}px`">
                      <b-progress value="100%" max="100" variant="success" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                    <div :style="`width:${Math.random() * 100 + 250}px`">
                      <b-progress value="100%" max="100" variant="info" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                    <div :style="`width:${Math.random() * 100 + 300}px`">
                      <b-progress value="100%" max="100" variant="info" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                  </div>
                  <div class="d-flex">
                    <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                    <div :style="`width:${Math.random() * 100 + 300}px`">
                      <b-progress value="100%" max="100" variant="info" />
                    </div>
                    <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                  </div>
                </div>
              </b-card>
            </div>
          </template>
        </div>
        <!-- <div class="progress-wrapper w-100">
          <b-card no-body>
            <b-card-text class="mb-0">
              Reticulating splines… {{ value1+'%' }}
            </b-card-text>
            <b-progress
              v-model="value1"
              max="100"
              variant="danger"
            />
            <b-progress
              v-model="value2"
              max="100"
              variant="success"
            />
            <b-progress
              v-model="value3"
              max="100"
              variant="info"
            />
          </b-card>
        </div>
        <div class="progress-wrapper w-100">
          <b-card no-body>
            <b-card-text class="mb-0">
              Reticulating splines… {{ value1+'%' }}
            </b-card-text>
            <b-progress
              v-model="value1"
              variant="danger"
              max="100"
            />
            <b-progress
              v-model="value2"
              max="100"
              variant="success"
            />
            <b-progress
              v-model="value3"
              max="100"
              variant="info"
            />
          </b-card>
        </div> -->
      </div>
    </div>
    <b-modal id="modal-update" ref="my-modal" title="Create New" centered no-fade hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">
          Update
        </h5>
        <div class="modal-actions">
          <b-button variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary">Cancel
        </b-button>
        <b-button variant="primary">Update
        </b-button>
      </template>
    </b-modal>
  </div>
  <div style="width:100%" v-else-if="reportingState === 'cost'">
    <ReportingCostVue :data="itemsForDemand" :fields="fieldForDemand" />
  </div>
</template>

<script>
import {
  BButton,
  BProgress,
  BCard,
  BCardText,
  // BListGroup,
  // BListGroupItem,
  BModal,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
// import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
// import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BButton,
    BProgress,
    BCard,
    BCardText,
    // AppCollapse,
    // AppCollapseItem,
    // BListGroup,
    // BListGroupItem,
    BModal,
    ReportingCostVue
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    otype: {
      type: String
    },
    reportingState: {
      type: String
    }
  },
  data() {
    return {
      reportingDates: [],
      value1: 30,
      value2: 40,
      value3: 80,
      openedCollapse: 0,
      itemsForDemand: [
        {
          name: 'Consumer ROBOTS',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'quadruped robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'handling robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'power & programming station',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
        {
          name: 'MILITARY ROBOTS',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'hardened quadruped robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'microrobot observation NBC',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
      ],
      fieldForDemand: ['BUDGET demand', 'BUDGET engaged ', 'Real Estimated'],
    }
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, 'days')
    const endDate = moment(moment()).add(1, 'M')
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, 'days').diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    onCollapseClick(index) {
      if (this.openedCollapse === index) this.openedCollapse = -1
      else this.openedCollapse = index
    },
    isToday(date) {
      return moment().isSame(date, 'day')
    },
    getWeek(date) {
      return date.format('dd').substring(0, 1)
    },
    getDay(date) {
      return date.format('D')
    },
    getMonth(date) {
      return date.format('MMM YYYY')
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}
</style>
