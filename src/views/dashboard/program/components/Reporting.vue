<template>
  <div v-if="reportingState === 'plan'" class="report">
    <div class="reporting-side">
      <div>
        <div class="report-block--head" style="margin-top:128px;">
          <p class="m-0 text-uppercase">
            {{ data.title }}
          </p>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="report-block--head" style="cursor:pointer" @click="onCollapseClick(index1)">
            <feather-icon v-if="item1.children"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
            <p class="ml-1 m-0 text-overflow-ellipse">
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1.phases">
            <div v-for="(item2, index2) in item1.phases" :key="index2" class="report-block-child">
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.id }} <span style="color:white">({{ item2.progress }})</span>
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="reporting-content">
      <div
        :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + 365 + 'px;top:122px;z-index:222'">
        <div class="rounded-circle"
          style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="reporting-content--header">
        <div />
        <div class="reporting-content-header--badge">
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
        <div style="height:77px;">
          <b-card no-body class="d-flex flex-column justify-content-around" style="height:76px;padding:5px 3px;">
            <div :style="`padding-left:${programData[0][0]}px`">
              <ProgramProgressBar :type="0" :width1="programData[0][1] + 60 - programData[0][0]"
                :width2="364 - programData[0][0]" />
            </div>
            <div :style="`padding-left:${programData[1][0]}px`">
              <ProgramProgressBar :type="1" :width1="programData[1][1] + 60 - programData[1][0]"
                :width2="364 - programData[1][0]" />
            </div>
            <div :style="`padding-left:${programData[2][0]}px`">
              <ProgramProgressBar :type="2" :width1="programData[2][1] + 60 - programData[2][0]"
                :width2="364 - programData[2][0]" />
            </div>
          </b-card>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div style="height:77px">
            <div class="d-flex flex-column justify-content-around"
              style="height:76px;padding:5px 3px;background-color: #283046;border-radius:5px;">
              <div :style="`padding-left:${projectPaddingData[index1][0]}px`">
                <ProjectProgressBar :type="0" :width1="projectData[index1][0][0]" :width2="projectData[index1][0][1]"
                  :width3="projectData[index1][0][2]" :width4="363 - projectPaddingData[index1][0]" />
              </div>
              <div :style="`padding-left:${projectPaddingData[index1][1]}px`">
                <ProjectProgressBar :type="1" :width1="projectData[index1][1][0]" :width2="projectData[index1][1][1]"
                  :width3="projectData[index1][1][2]" :width4="363 - projectPaddingData[index1][1]" />
              </div>
              <div :style="`padding-left:${projectPaddingData[index1][2]}px`">
                <ProjectProgressBar :type="2" :width1="projectData[index1][2][0]" :width2="projectData[index1][2][1]"
                  :width3="projectData[index1][2][2]" :width4="363 - projectPaddingData[index1][2]" />
              </div>
            </div>
          </div>
          <template v-if="item1.phases">
            <div v-for="(item2, index2) in item1.phases" :key="index2" :style="`height:51px;`">
              <div class="d-flex flex-column justify-content-around w-100"
                style="height:50px;width:500px;padding:0 3px;background-color: #283046;border-radius:5px;">
                <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][0][0]}px;`">
                  <ElementProgressBar :type="0" :width1="elementData[index1][index2][0][1]"
                    :width2="362 - elementData[index1][index2][0][0]" />
                </div>
                <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][1][0]}px;`">
                  <ElementProgressBar :type="1" :width1="elementData[index1][index2][1][1]"
                    :width2="362 - elementData[index1][index2][1][0]" />
                </div>
                <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][2][0]}px;`">
                  <ElementProgressBar :type="2" :width1="elementData[index1][index2][2][1]"
                    :width2="362 - elementData[index1][index2][2][0]" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <b-modal id="program-reporting-plan-update" ref="program_reporting_plan_update" title="Create New" centered no-fade
      hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button @click="hideModal" variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideModal">Cancel</b-button>
        <b-button variant="primary" @click="onUpdate">Update</b-button>
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
  BCard,
  BModal,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import ElementProgressBar from '../../globalComponent/ElementProgressBar.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'

export default {
  components: {
    BButton,
    BCard,
    BModal,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar,
    ElementProgressBar
  },
  props: {
    data: {
      type: Object,
      default: () => { },
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
      elementData: [
        [
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
        ],
        [
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
        ]
      ],
      projectData: [
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
      ]
    }
  },
  computed: {
    projectPaddingData() {
      return (
        [
          [
            Math.min(this.elementData[0][0][0][0], this.elementData[0][1][0][0], this.elementData[0][2][0][0], this.elementData[0][3][0][0], this.elementData[0][4][0][0]),
            Math.min(this.elementData[0][0][1][0], this.elementData[0][1][1][0], this.elementData[0][2][1][0], this.elementData[0][3][1][0], this.elementData[0][4][1][0]),
            Math.min(this.elementData[0][0][2][0], this.elementData[0][1][2][0], this.elementData[0][2][2][0], this.elementData[0][3][2][0], this.elementData[0][4][2][0]),
          ],
          [
            Math.min(this.elementData[1][0][0][0], this.elementData[1][1][0][0]),
            Math.min(this.elementData[1][0][1][0], this.elementData[1][1][1][0]),
            Math.min(this.elementData[1][0][2][0], this.elementData[1][1][2][0]),
          ],
          [
            this.randomTen(200, 50),
            this.randomTen(200, 50),
            this.randomTen(200, 50),
          ],
          [
            this.randomTen(200, 50),
            this.randomTen(200, 50),
            this.randomTen(200, 50),
          ]
        ]
      )
    },
    programData() {
      return (
        [
          [
            Math.min(this.projectPaddingData[0][0], this.projectPaddingData[1][0], this.projectPaddingData[2][0], this.projectPaddingData[3][0]),
            Math.max(
              this.projectData[0][0][0] + this.projectData[0][0][1] + this.projectData[0][0][2] + this.projectPaddingData[0][0],
              this.projectData[1][0][0] + this.projectData[1][0][1] + this.projectData[1][0][2] + this.projectPaddingData[1][0],
              this.projectData[2][0][0] + this.projectData[2][0][1] + this.projectData[2][0][2] + this.projectPaddingData[2][0],
              this.projectData[3][0][0] + this.projectData[3][0][1] + this.projectData[3][0][2] + this.projectPaddingData[3][0],
            )
          ],
          [
            Math.min(this.projectPaddingData[0][1], this.projectPaddingData[1][1], this.projectPaddingData[2][1], this.projectPaddingData[3][1]),
            Math.max(
              this.projectData[0][1][0] + this.projectData[0][1][1] + this.projectData[0][1][2] + this.projectPaddingData[0][1],
              this.projectData[1][1][0] + this.projectData[1][1][1] + this.projectData[1][1][2] + this.projectPaddingData[1][1],
              this.projectData[2][1][0] + this.projectData[2][1][1] + this.projectData[2][1][2] + this.projectPaddingData[2][1],
              this.projectData[3][1][0] + this.projectData[3][1][1] + this.projectData[3][1][2] + this.projectPaddingData[3][1],
            )
          ],
          [
            Math.min(this.projectPaddingData[0][2], this.projectPaddingData[1][2], this.projectPaddingData[2][2], this.projectPaddingData[3][2]),
            Math.max(
              this.projectData[0][2][0] + this.projectData[0][2][1] + this.projectData[0][2][2] + this.projectPaddingData[0][2],
              this.projectData[1][2][0] + this.projectData[1][2][1] + this.projectData[1][2][2] + this.projectPaddingData[1][2],
              this.projectData[2][2][0] + this.projectData[2][2][1] + this.projectData[2][2][2] + this.projectPaddingData[2][2],
              this.projectData[3][2][0] + this.projectData[3][2][1] + this.projectData[3][2][2] + this.projectPaddingData[3][2],
            )
          ]
        ]
      )
    },
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
    randomTen(val1, val2) {
      return parseInt(Math.random() * val1, 10) + val2
    },
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
    hideModal() {
      this.$refs.program_reporting_plan_update.hide()
    },
    onUpdate() {
      this.elementData = [
        [
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
        ],
        [
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
          [
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)],
            [this.randomTen(200, 50), this.randomTen(200, 300)]
          ],
        ]
      ]
      this.projectData = [
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
          [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        ],
      ]
      this.$refs.program_reporting_plan_update.hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}
</style>
