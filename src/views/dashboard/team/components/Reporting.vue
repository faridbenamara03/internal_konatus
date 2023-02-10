<template>
  <div v-if="reportingState === 'plan'" class="report-custom-team-report">
    <div class="reporting-side-custom">
      <div>
        <div class="program-title">
          <div class="program-title-child">
            CONSUMER ROBOTS
          </div>
        </div>
      </div>
      <div v-for="(item, index) in datt.children" :key="index">
        <div class="program-title-cld" :class="{ 'active': index === 0 }">
          <div class="program-title-child">
            <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
            <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" />
            {{ item.title }}
          </div>
        </div>
        <template v-for="(item1, index1) in item.children">
          <div class="program-title-cld1" :key="index1">
            <div class="program-title-child">
              <div class="title">{{ item1.title }}</div>
              <div class="id">{{ item1.id }}</div>
            </div>
          </div>
          <template v-if="item1.phases">
            <div v-for="(item2, index2) in item1.phases" :key="index2" class="work-element-child">
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.id }} <span style="color:white">({{ item2.progress }})</span>
              </p>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="reporting-content-custom">
      <div
        :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle"
          style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="reporting-content--header">
        <div class="first-child">
          <div v-b-modal.modal-update style="color:#D68232">
            <feather-icon icon="AlertCircleIcon" style="margin-bottom:3px" />
            Update Available
          </div>
        </div>
        <div class="reporting-content-header--badge">
          <div class="phase">
            <div class="flag" />
            Phase
          </div>
          <div class="milestones">
            <b-icon icon="diamond-fill" variant="success" />
            <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
            Milestones
          </div>
          <div class="demand">
            <b-icon icon="circle-fill" class="flag" />
            Demand
          </div>
          <div class="engaged">
            <b-icon icon="circle-fill" class="flag" />
            Engaged
          </div>
          <div class="real-estimated">
            <b-icon icon="circle-fill" class="flag" />
            Real Estimated
          </div>
        </div>
      </div>
      <div class="reporting-content--body-custom">
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
        <div v-for="(item, index) in datt.children" :key="index" style="margin-left:1px">
          <div style="height:77px;">
            <div class="d-flex flex-column justify-content-around"
              style="height:76px;background-color:#283046;border-radius:5px;padding:5px 3px;">
              <div :style="`padding-left:${programData[0][0]}px`">
                <ProgramProgressBar :type="0" :width1="programData[0][1] + 60 - programData[0][0]"
                  :width2="455 - programData[0][0]" />
              </div>
              <div :style="`padding-left:${programData[1][0]}px`">
                <ProgramProgressBar :type="1" :width1="programData[1][1] + 60 - programData[1][0]"
                  :width2="455 - programData[1][0]" />
              </div>
              <div :style="`padding-left:${programData[2][0]}px`">
                <ProgramProgressBar :type="2" :width1="programData[2][1] + 60 - programData[2][0]"
                  :width2="455 - programData[2][0]" />
              </div>
            </div>
          </div>
          <template v-for="(item1, index1) in item.children">
            <div style="height:77px" :key="index1">
              <div class="d-flex flex-column justify-content-around"
                style="height:76px;padding:5px 3px;background-color: #283046;border-radius:5px;">
                <div :style="`padding-left:${projectPaddingData[index1][0]}px`">
                  <ProjectProgressBar :type="0" :width1="projectData[index1][0][0]" :width2="projectData[index1][0][1]"
                    :width3="projectData[index1][0][2]" :width4="455 - projectPaddingData[index1][0]" />
                </div>
                <div :style="`padding-left:${projectPaddingData[index1][1]}px`">
                  <ProjectProgressBar :type="1" :width1="projectData[index1][1][0]" :width2="projectData[index1][1][1]"
                    :width3="projectData[index1][1][2]" :width4="455 - projectPaddingData[index1][1]" />
                </div>
                <div :style="`padding-left:${projectPaddingData[index1][2]}px`">
                  <ProjectProgressBar :type="2" :width1="projectData[index1][2][0]" :width2="projectData[index1][2][1]"
                    :width3="projectData[index1][2][2]" :width4="455 - projectPaddingData[index1][2]" />
                </div>
              </div>
            </div>
            <template v-if="item1.phases">
              <div v-for="(item2, index2) in item1.phases" :key="index2" :style="`height:51px;`">
                <div class="d-flex flex-column justify-content-around"
                  style="height:50px;padding:0 3px;background-color: #283046;border-radius:5px;">
                  <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][0][0]}px;`">
                    <ElementProgressBar :type="0" :width1="elementData[index1][index2][0][1]"
                      :width2="455 - elementData[index1][index2][0][0]" />
                  </div>
                  <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][1][0]}px;`">
                    <ElementProgressBar :type="1" :width1="elementData[index1][index2][1][1]"
                      :width2="455 - elementData[index1][index2][1][0]" />
                  </div>
                  <div :style="`margin-bottom:1px;padding-left:${elementData[index1][index2][2][0]}px;`">
                    <ElementProgressBar :type="2" :width1="elementData[index1][index2][2][1]"
                      :width2="455 - elementData[index1][index2][2][0]" />
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <b-modal id="team-reporting-plan-update" ref="team_reporting_plan_update" title="Create New" centered no-fade
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
    <import-loader-modal />
  </div>
  <div class="w-100" v-else-if="reportingState === 'cost'">
    <ReportingCostVue />
  </div>
</template>

<script>
import {
  BModal, BButton
} from "bootstrap-vue"
import moment from "moment"
import { isEmpty } from '@/views/utils'
import ImportLoaderModal from '@/views/dashboard/project/modals/ImportLoaderModal.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import ElementProgressBar from '../../globalComponent/ElementProgressBar.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ReportingCostVue from "./ReportingCost.vue"

export default {
  components: {
    BModal,
    BButton,
    ImportLoaderModal,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar,
    ElementProgressBar
  },
  props: {
    reportingState: {
      type: String,
    },
  },
  data() {
    return {
      reportingDates: [],
      leftP: 15 * 30 + 8,
      collapsed: false,
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
    datt() {
      return this.$store.state.teamState.teamReportingData
    },
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, "days")
    const endDate = moment(moment()).add(2, "M")
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, "days").diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    randomTen(val1, val2) {
      return parseInt(Math.random() * val1, 10) + val2
    },
    largest(a, b, c, d) {
      return Math.max(a, b, c, d)
    },
    isToday(date) {
      return moment().isSame(date, "day")
    },
    getWeek(date) {
      return date.format("dd").substring(0, 1)
    },
    getDay(date) {
      return date.format("D")
    },
    getMonth(date) {
      return date.format("MMM YYYY")
    },
    getLength(startDate, endDate) {
      const date1 = new Date(startDate.split('.')[0], startDate.split('.')[1], startDate.split('.')[2])
      const date2 = new Date(endDate.split('.')[0], endDate.split('.')[1], endDate.split('.')[2])
      const differenceInTime = date2.getTime() - date1.getTime()
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)
      const ret = differenceInDays * 30 > 0 ? (differenceInDays + 1) * 30 + 5 : 0
      return ret
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs.team_reporting_plan_update.hide()
    },
    onUpdate() {
      // this.$store.commit('teamState/TOGGLE_IMPORT_LOADER_MODAL_V', true)
      // this.$store.commit('globalState/UPDATE_TEAM_REPORT_DATA')
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
      this.$refs.team_reporting_plan_update.hide()
    },
    isUN(data) {
      return isEmpty(data)
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-team-reporting.scss";
</style>
