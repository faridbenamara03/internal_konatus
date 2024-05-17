<template>
  <div style="overflow-x:auto">
    <div class="portf-demand-view">
      <div
        style="background-color:#1A2239;height:40px"
        :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
      />
      <div
        class="portf-row portf-bold portf-table-header portf-uppercase"
        :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
      >
        <div
          class="part1"
        >
          {{ data === null ? c_navobj.title : data.title === '' || data.title === null || data.title === undefined ? c_navobj.title : data.title }}
        </div>
        <div
          class="part2 mr-2"
          :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
        >
          <div
            v-for="(ft, fi) in c_fields"
            :key="`c_field_1_${fi}`"
            class="data-child mr-1 portf-uppercase"
            :style="`min-width:150px`"
          >
            {{ ft }}
          </div>
          <div
            v-for="(item, index) in job_fields"
            :key="`job_field_1_${index}`"
            :style="`min-width:180px`"
            class="data-child mr-1 portf-uppercase"
          >
            <div
              style="position:relative;top:-43px;height:0px;cursor:pointer;text-align:center;"
            >
              <feather-icon
                style="margin-top:-3px"
                :icon="'PlusIcon'"
                size="16"
              />
              {{ item }}
            </div>
            <div :style="`position:relative;top:-20px;height:4px;background-color:${colorsA[index]};border-radius:3px`" />
            <div style="text-align:center;">
              total
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="data !== null"
      >
        <div
          v-for="(item, index) in c_data"
          :key="`c_data_1_${index}`"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{'inner-sdw': index === 0}"
            :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
          >
            <div
              class="part1 portf-uppercase"
              style="cursor:pointer"
              :style="`min-width: 200px`"
              @click="onCollapseCLick(index)"
            >
              <feather-icon
                v-if="item.children.length > 0"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div
              class="part2 mr-2"
              :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
            >
              <div
                v-for="(ft, fi) in c_fields"
                :key="`c_field_2_${fi}`"
                class="data-child mr-1"
                :style="`min-width:150px`"
              >
                <span v-if="ft === 'priority'">{{ typeof(item[ft]) === "string" ? item[ft] : priorityOptions[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'natDeadline'">{{ typeof(item[ft]) === "string" ? item[ft] : nDeadlineOptions[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'deadline' || ft.indexOf('startdate') > 0 || ft.indexOf('enddate') > 0">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'winrate' || ft === 'currentPhase'">{{ item[ft] }}</span>
                <span v-else-if="ft === 'description' || ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine' || ft === 'customerEx' || ft === 'salesEx' || ft === 'scoring' || ft === 'roi'">{{ item[ft] }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
              <div
                v-for="(jtem, index1) in job_fields"
                :key="`job_field_2_${index1}`"
                :style="`min-width:180px`"
                class="data-child mr-1"
              >
                <div style="text-align: center">
                  {{ item[jtem] }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.children"
              :key="`item_children_${index1}`"
            >
              <div
                class="portf-row portf-table-row font-14 border-bottom-dm"
                :class="{'inner-sdw': index1 === 0}"
                :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
              >
                <div
                  class="part1 portf-bold pl-2"
                  :style="`min-width: 200px`"
                  @click="onChildCollapseCLick(index1)"
                >
                  <feather-icon
                    v-if="item1.children.length > 0"
                    :icon="openedChild === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item1.title }}
                </div>
                <div
                  class="part2 mr-2"
                  :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
                >
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="`c_field_3_${fi}`"
                    class="data-child mr-1"
                    :style="`min-width: 150px`"
                  >
                    <span v-if="ft === 'priority'">{{ typeof(item1[ft]) === "string" ? item1[ft] : priorityOptions[item1[ft] - 1] }}</span>
                    <span v-else-if="ft === 'natDeadline'">{{ typeof(item1[ft]) === "string" ? item1[ft] : nDeadlineOptions[item1[ft] - 1] }}</span>
                    <span v-else-if="ft === 'deadline' || ft.indexOf('startdate') > 0 || ft.indexOf('enddate') > 0">{{ dateFormat(item1[ft]) }}</span>
                    <span v-else-if="ft === 'winrate' || ft === 'currentPhase'">{{ item1[ft] }}</span>
                    <span v-else-if="ft === 'description' || ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine' || ft === 'customerEx' || ft === 'salesEx' || ft === 'scoring' || ft === 'roi'">{{ item1[ft] }}</span>
                    <span v-else>{{ formatCurrency(item1[ft]) }}</span>
                  </div>
                  <div
                    v-for="(jtem, tndex) in job_fields"
                    :key="`job_field_3_${tndex}`"
                    :style="`min-width:180px`"
                    class="data-child mr-1"
                  >
                    <div style="text-align:center;">
                      {{ item1[jtem] }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="openedChild === index1">
                <div
                  v-for="(item2, index2) in item1.children"
                  :key="`item1_children_${index2}`"
                >
                  <div
                    class="portf-row portf-table-row font-14 border-bottom-dm"
                    :class="{'inner-sdw': index2 === 0}"
                    :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
                  >
                    <div
                      class="part1 portf-bold pl-2"
                      :style="`min-width: 200px`"
                      @click="onSubCollapseCLick(index2)"
                    >
                      <feather-icon
                        v-if="item2.children.length > 0"
                        :icon="openedSub === index2 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                        size="16"
                        class="mr-1"
                      />
                      {{ item2.title }}
                    </div>
                    <div
                      class="part2 mr-2"
                      :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
                    >
                      <div
                        v-for="(ft, fi) in c_fields"
                        :key="`c_field_4_${fi}`"
                        class="data-child mr-1"
                        :style="`min-width: 150px`"
                      >
                        <span v-if="ft === 'priority'">{{ typeof(item2[ft]) === "string" ? item2[ft] : priorityOptions[item2[ft] - 1] }}</span>
                        <span v-else-if="ft === 'natDeadline'">{{ typeof(item2[ft]) === "string" ? item2[ft] : nDeadlineOptions[item2[ft] - 1] }}</span>
                        <span v-else-if="ft === 'deadline' || ft.indexOf('startdate') > 0 || ft.indexOf('enddate') > 0">{{ dateFormat(item2[ft]) }}</span>
                        <span v-else-if="ft === 'winrate' || ft === 'currentPhase'">{{ item2[ft] }}</span>
                        <span v-else-if="ft === 'description' || ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine' || ft === 'customerEx' || ft === 'salesEx' || ft === 'scoring' || ft === 'roi'">{{ item2[ft] }}</span>
                        <span v-else>{{ formatCurrency(item2[ft]) }}</span>
                      </div>
                      <div
                        v-for="(jtem1, tndex1) in job_fields"
                        :key="`job_field_4_${tndex1}`"
                        :style="`min-width:180px`"
                        class="data-child mr-1"
                      >
                        <div style="text-align:center;">
                          {{ item2[jtem1] }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="openedSub === index2">
                    <div
                      v-for="(item3, index3) in item2.children"
                      :key="`item2_children_${index3}`"
                    >
                      <div
                        class="portf-row portf-table-row font-14 border-bottom-dm"
                        :class="{'inner-sdw': index3 === 0}"
                        :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
                      >
                        <div
                          class="part1 portf-bold pl-2 ml-3"
                          :style="`min-width: 200px`"
                        >
                          {{ item3.title }}
                        </div>
                        <div
                          class="part2 mr-2"
                          :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
                        >
                          <div
                            v-for="(ft, fi) in c_fields"
                            :key="`c_field_5_${fi}`"
                            class="data-child mr-1"
                            :style="`min-width: 150px`"
                          >
                            <span v-if="ft === 'priority'">{{ typeof(item3[ft]) === "string" ? item3[ft] : priorityOptions[item3[ft] - 1] }}</span>
                            <span v-else-if="ft === 'natDeadline'">{{ typeof(item3[ft]) === "string" ? item3[ft] : nDeadlineOptions[item3[ft] - 1] }}</span>
                            <span v-else-if="ft === 'deadline' || ft.indexOf('startdate') > 0 || ft.indexOf('enddate') > 0">{{ dateFormat(item3[ft]) }}</span>
                            <span v-else-if="ft === 'winrate' || ft === 'currentPhase'">{{ item3[ft] }}</span>
                            <span v-else-if="ft === 'description' || ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine' || ft === 'customerEx' || ft === 'salesEx' || ft === 'scoring' || ft === 'roi'">{{ item3[ft] }}</span>
                            <span v-else>{{ formatCurrency(item3[ft]) }}</span>
                          </div>
                          <div
                            v-for="(jtem2, tndex2) in job_fields"
                            :key="`job_field_5_${tndex2}`"
                            :style="`min-width:180px`"
                            class="data-child mr-1"
                          >
                            <div style="text-align:center;">
                              {{ item3[jtem2] }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portf-row portf-bold portf-table-header portf-uppercase"
        :style="`min-width: ${550 + 150 * c_fields.length + 180 * job_fields.length}px`"
      >
        <div
          class="part1"
          style="color:#66ffff"
          :style="`min-width: 200px`"
        >
          Total Team Capacity
        </div>
        <div
          class="part2 mr-2"
          :style="`min-width: ${150 * c_fields.length + 180 * job_fields.length}px`"
        >
          <div
            v-for="(ft, fi) in c_fields"
            :key="`c_field_6_${fi}`"
            class="data-child mr-1 portf-uppercase"
            :style="`min-width:150px`"
          >
            <span />
          </div>
          <div
            v-for="(jtem, index1) in job_fields"
            :key="`job_field_6_${index1}`"
            :style="`min-width:180px;text-align:center`"
            class="data-child mr-1"
          >
            <!-- <span :style="`text-align: center;color: ${capD[jtem] <= 100 ? 'rgb(55, 255, 0)' : capD[jtem] > 100 && capD[jtem] < 150 ? 'rgb(199, 255, 0)' : 'rgb(255, 116, 0)'}`">{{ capD[jtem] }}</span>
            /<span :style="`text-align: center;color: ${percentD[jtem] <= 100 ? 'rgb(55, 255, 0)' : percentD[jtem] > 100 && percentD[jtem] < 150 ? 'rgb(199, 255, 0)' : 'rgb(255, 116, 0)'}`">{{ percentD[jtem] }}%</span> -->
            <span :style="`text-align: center;color: ${percentD[jtem] < 80 ? 'rgb(0, 207, 232)' : percentD[jtem] >= 80 && percentD[jtem] < 100 ? 'green' : percentD[jtem] >=100 && percentD[jtem] < 120 ? 'yellow' : percentD[jtem] >= 120 && percentD[jtem] < 140 ? 'red' : 'purple'}`">{{ capD[jtem] }}/{{ percentD[jtem] }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   BPagination
// } from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    // BPagination
  },
  props: {
    data: {
      type: Array || Object,
      default: () => [],
    },
    controlData: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      collapsedT: [],
      opened: 0,
      openedChild: 0,
      openedSub: 0,
      priorityOptions: this.$store.state.globalState.priorityOptions,
      // capsData: [],
      // c_fields: ['priority', 'value', 'budget', 'engaged', 'quote', 'demand', 'realEstimated', 'authorised', 'spent', 'next_gate'],
      // c_fields: ['priority', 'value', 'budget', 'next_gate'],
      // fields: ['priority', 'value', 'demand'],
      // team_fields: ['mgt & study', 'dev', 'test', 'total'],
      job_fields: ['total'],
      colorsA: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      nDeadlineOptions: this.$store.state.globalState.natureDeadLines,

      teamD1: [],
      teamD: [],
      jobs: [],
      percentD: [],
      capD: [],
    }
  },
  computed: {
    c_data() {
      if (this.data === null) return []
      let ndt = []
      if (this.data.type === 'portfolio' && this.data.children) {
        ndt = this.data.children.map(program => {
          let programEngaged = 0
          let programDemand = 0
          let programRealEstimated = 0
          let programAuthorized = 0
          let programSpent = 0
          let programCustomerEx = 0
          let programSalesEx = 0
          let programScoring = 0
          let programRoi = 0
          let programValue = 0
          const programJobs = []
          if (program.children && program.children.length > 0) {
            program.children.map(project => {
              if (project.children.length > 0) {
                project.children.map(subproject => {
                  programEngaged += parseInt(subproject.engaged ? subproject.engaged : 0, 10)
                  programDemand += parseInt(subproject.demand ? subproject.demand : 0, 10)
                  programRealEstimated += parseInt(subproject.realEstimated ? subproject.realEstimated : 0, 10)
                  programAuthorized += parseInt(subproject.authorized ? subproject.authorized : 0, 10)
                  programSpent += parseInt(subproject.spent ? subproject.spent : 0, 10)
                  programCustomerEx += parseInt(subproject.customerEx ? subproject.customerEx : 0, 10)
                  programSalesEx += parseInt(subproject.salesEx ? subproject.salesEx : 0, 10)
                  programScoring += parseInt(subproject.scoring ? subproject.scoring : 0, 10)
                  programRoi += parseInt(subproject.roi ? subproject.roi : 0, 10)
                  programValue += parseInt(subproject.value ? subproject.value : 0, 10)
                  this.job_fields.map(jobField => {
                    if (subproject[jobField] === null || subproject[jobField] === undefined) return null
                    if (programJobs[jobField] === null || programJobs[jobField] === undefined) programJobs[jobField] = parseInt(subproject[jobField], 10)
                    else programJobs[jobField] += parseInt(subproject[jobField], 10)
                    return null
                  })
                  return null
                })
              }
              this.job_fields.map(jobField => {
                if (project[jobField] === null || project[jobField] === undefined) return null
                if (programJobs[jobField] === null || programJobs[jobField] === undefined) programJobs[jobField] = parseInt(project[jobField], 10)
                else programJobs[jobField] += parseInt(project[jobField], 10)
                return null
              })
              programEngaged += parseInt(project.engaged ? project.engaged : 0, 10)
              programDemand += parseInt(project.demand ? project.demand : 0, 10)
              programRealEstimated += parseInt(project.realEstimated ? project.realEstimated : 0, 10)
              programAuthorized += parseInt(project.authorized ? project.authorized : 0, 10)
              programSpent += parseInt(project.spent ? project.spent : 0, 10)
              programCustomerEx += parseInt(project.customerEx ? project.customerEx : 0, 10)
              programSalesEx += parseInt(project.salesEx ? project.salesEx : 0, 10)
              programScoring += parseInt(project.scoring ? project.scoring : 0, 10)
              programRoi += parseInt(project.roi ? project.roi : 0, 10)
              programValue += parseInt(project.value ? project.value : 0, 10)
              return null
            })
          }
          this.job_fields.map(jobField => {
            if (program[jobField] === null || program[jobField] === undefined) return null
            if (programJobs[jobField] === null || programJobs[jobField] === undefined) programJobs[jobField] = parseInt(program[jobField], 10)
            else programJobs[jobField] += parseInt(program[jobField], 10)
            return null
          })
          const nd = { ...program }
          nd.engaged = programEngaged
          nd.demand = programDemand
          nd.realEstimated = programRealEstimated
          nd.authorized = programAuthorized
          nd.spent = programSpent
          nd.customerEx = programCustomerEx
          nd.salesEx = programSalesEx
          nd.scoring = programScoring
          nd.roi = programRoi
          nd.value = programValue
          this.job_fields.map(jobField => {
            nd[jobField] = programJobs[jobField]
            return null
          })
          return nd
        })
      } else if (this.data.type === 'company' && this.data.children) {
        ndt = this.data.children.map(t => {
          let engaged = 0
          let demand = 0
          let realEstimated = 0
          let authorized = 0
          let spent = 0
          let customerEx = 0
          let salesEx = 0
          let scoring = 0
          let roi = 0
          let value = 0
          if (t.children && t.children.length > 0) {
            const updatedT1s = []
            t.children.map(t1 => {
              const updatedT1 = { ...t1 }
              let t1Engaged = 0
              let t1Demand = 0
              let t1RealEstimated = 0
              let t1Authorized = 0
              let t1Spent = 0
              let t1customerEx = 0
              let t1salesEx = 0
              let t1scoring = 0
              let t1roi = 0
              let t1value = 0
              const t1Jobs = []
              // let t1priority = ''
              if (t1.children && t1.children.length > 0) {
                const updatedT2s = []
                t1.children.map(t2 => {
                  const updatedT2 = { ...t2 }
                  if (t2.children && t2.children.length > 0) {
                    let t2Engaged = 0
                    let t2Demand = 0
                    let t2RealEstimated = 0
                    let t2Authorized = 0
                    let t2Spent = 0
                    let t2customerEx = 0
                    let t2salesEx = 0
                    let t2scoring = 0
                    let t2roi = 0
                    let t2value = 0
                    // let t2priority = ''
                    t2.children.map(t3 => {
                      engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                      demand += parseInt(t3.demand ? t3.demand : 0, 10)
                      realEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                      authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                      spent += parseInt(t3.spent ? t3.spent : 0, 10)
                      customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                      salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                      scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                      roi += parseInt(t3.roi ? t3.roi : 0, 10)
                      value += parseInt(t3.value ? t3.value : 0, 10)
                      t2Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                      t2Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                      t2RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                      t2Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                      t2Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                      t2customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                      t2salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                      t2scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                      t2roi += parseInt(t3.roi ? t3.roi : 0, 10)
                      t2value += parseInt(t3.value ? t3.value : 0, 10)
                      t1Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                      t1Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                      t1RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                      t1Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                      t1Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                      t1customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                      t1salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                      t1scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                      t1roi += parseInt(t3.roi ? t3.roi : 0, 10)
                      t1value += parseInt(t3.value ? t3.value : 0, 10)
                      this.job_fields.map(jobField => {
                        if (t3[jobField] === null || t3[jobField] === undefined) return null
                        if (t1Jobs[jobField] === null || t1Jobs[jobField] === undefined) t1Jobs[jobField] = parseInt(t3[jobField], 10)
                        else t1Jobs[jobField] += parseInt(t3[jobField], 10)
                        return null
                      })
                      return null
                    })
                    updatedT2.engaged = t2Engaged
                    updatedT2.demand = t2Demand
                    updatedT2.realEstimated = t2RealEstimated
                    updatedT2.authorized = t2Authorized
                    updatedT2.spent = t2Spent
                    updatedT2.customerEx = t2customerEx
                    updatedT2.salesEx = t2salesEx
                    updatedT2.scoring = t2scoring
                    updatedT2.roi = t2roi
                    updatedT2.value = t2value
                  }
                  this.job_fields.map(jobField => {
                    if (t2[jobField] === null || t2[jobField] === undefined) return null
                    if (t1Jobs[jobField] === null || t1Jobs[jobField] === undefined) t1Jobs[jobField] = parseInt(t2[jobField], 10)
                    else t1Jobs[jobField] += parseInt(t2[jobField], 10)
                    return null
                  })
                  engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                  salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                  scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                  roi += parseInt(t2.roi ? t2.roi : 0, 10)
                  value += parseInt(t2.value ? t2.value : 0, 10)
                  t1Engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  t1Demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  t1RealEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  t1Authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  t1Spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  t1customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                  t1salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                  t1scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                  t1roi += parseInt(t2.roi ? t2.roi : 0, 10)
                  t1value += parseInt(t2.value ? t2.value : 0, 10)
                  updatedT2s.push(updatedT2)
                  return null
                })
                this.job_fields.map(jobField => {
                  if (t1[jobField] === null || t1[jobField] === undefined) return null
                  if (t1Jobs[jobField] === null || t1Jobs[jobField] === undefined) t1Jobs[jobField] = parseInt(t1[jobField], 10)
                  else t1Jobs[jobField] += parseInt(t1[jobField], 10)
                  return null
                })
                updatedT1.engaged = t1Engaged
                updatedT1.demand = t1Demand
                updatedT1.realEstimated = t1RealEstimated
                updatedT1.authorized = t1Authorized
                updatedT1.spent = t1Spent
                updatedT1.customerEx = t1customerEx
                updatedT1.salesEx = t1salesEx
                updatedT1.scoring = t1scoring
                updatedT1.roi = t1roi
                updatedT1.value = t1value
                this.job_fields.map(jobField => {
                  updatedT1[jobField] = t1Jobs[jobField]
                  return null
                })
              }
              updatedT1s.push(updatedT1)
              return null
            })
            const nd = { ...t }
            nd.engaged = engaged
            nd.demand = demand
            nd.realEstimated = realEstimated
            nd.authorized = authorized
            nd.spent = spent
            nd.customerEx = customerEx
            nd.salesEx = salesEx
            nd.scoring = scoring
            nd.roi = roi
            nd.value = value
            this.job_fields.map(jobField => {
              let job = 0
              updatedT1s.map(updatedT1 => {
                job += updatedT1[jobField]
                return null
              })
              nd[jobField] = job
              return null
            })
            nd.children = updatedT1s
            return nd
          }
          return t
        })
      }
      return ndt
    },
    c_navobj() {
      return this.$store.state.globalState.selectedNavObj
    },
    c_fields() {
      const tempFields = this.fields.slice(1, this.fields.length - 1)
      return tempFields
    },
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  methods: {
    initializeData(data) {
      console.log("CInitData:", data)
      let tempFields = []
      if (this.data === null) return
      if (this.data.type === 'portfolio' && this.data.children && this.data.children.length > 0) {
        this.data.children.map(program => {
          if (program.children && program.children.length > 0) {
            program.children.map(project => {
              if (project.children.length > 0) {
                project.children.map(subproject => {
                  if (subproject.job_names !== undefined) tempFields = tempFields.concat(subproject.job_names)
                  return null
                })
              }
              if (project.job_names !== undefined) tempFields = tempFields.concat(project.job_names)
              return null
            })
          }
          if (program.job_names !== undefined) tempFields = tempFields.concat(program.job_names)
          return null
        })
      } else if (this.data.type === 'company' && this.data.children && this.data.children.length > 0) {
        this.data.children.map(portfolio => {
          if (portfolio.children && portfolio.children.length > 0) {
            portfolio.children.map(program => {
              if (program.children.length > 0) {
                program.children.map(project => {
                  if (project.children.length > 0) {
                    project.children.map(subproject => {
                      if (subproject.job_names !== undefined) tempFields = tempFields.concat(subproject.job_names)
                      return null
                    })
                  }
                  if (project.job_names !== undefined) tempFields = tempFields.concat(project.job_names)
                  return null
                })
              }
              if (program.job_names !== undefined) tempFields = tempFields.concat(program.job_names)
              return null
            })
          }
          return null
        })
      }
      tempFields = tempFields.filter((value, index, array) => array.indexOf(value) === index)
      // console.log("Teams:", tempTeams, "TeamD1:", tempTeamData, "TeamD:", tempTeamData1)
      this.job_fields = tempFields
      const totalCap = this.data.capacity
      tempFields.map(jobField => {
        const temp = totalCap.filter(value => value.job_name.toUpperCase() === jobField.toUpperCase())
        this.percentD[jobField] = temp !== null || temp !== undefined ? temp[0].percent : 0.0
        this.capD[jobField] = temp !== null || temp !== undefined ? temp[0].total : 0
        return null
      })
    },
    onTeamCollapse(i) {
      const index = this.collapsedT.findIndex(x => x === i)
      if (index > -1) {
        this.collapsedT.splice(index, 1)
      } else {
        this.collapsedT.push(i)
      }
    },
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    onChildCollapseCLick(index) {
      if (index === this.openedChild) {
        this.openedChild = -1
      } else {
        this.openedChild = index
      }
    },
    onSubCollapseCLick(index) {
      if (index === this.openedSub) {
        this.openedSub = -1
      } else {
        this.openedSub = index
      }
    },
    dateFormat(date) {
      if (date) return moment(new Date(date)).format('MM-DD-YYYY')
      return null
    },
    formatCurrency(value) {
      if (value === undefined || value === null) return 0
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'EUR',
      }).format(value)
    },
    // rowClass(item, type) {
    //   const colorClass = 'table-success'
    //   if (!item || type !== 'row') { return }

    //   // eslint-disable-next-line consistent-return
    //   if (item.title === 'total') { return colorClass }
    // },
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-control.scss';
</style>
