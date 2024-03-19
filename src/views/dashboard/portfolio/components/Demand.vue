<template>
  <div
    class="demand-view"
    :class="{ 'has-chart': isChartView }"
  >
    <div
      v-if="!isChartView"
      class="portf-demand-view"
    >
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1" :style="`min-width: 200px`">
          <!-- Consumer Robots -->
        </div>
        <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
          <div
            v-for="(ft, fi) in c_fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase pr-1"
            :style="`min-width:200px`"
          >
            {{ ft }}
          </div>
        </div>
        <div class="part3" :style="`margin-left: 200px`" />
      </div>
      <div v-if="otype === 'company'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
          >
            <div
              class="part1 portf-uppercase"
              style="cursor:pointer"
              @click="onCollapseClick(index)"
            >
              <feather-icon
                v-if="item.children.length > 0"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`min-width:200px`"
              >
                <span v-if="ft === 'priority'">{{ typeof(item[ft]) === "string" ? item[ft] : priorities[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'natDeadline'">{{ typeof(item[ft]) === "string" ? item[ft] : nDeadlineOptions[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'winrate' || ft === 'currentPhase'">{{ item[ft] }}</span>
                <span v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'">{{ item[ft] }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
            <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
              <!-- <b-button
                variant="flat-primary"
                @click="toggleEditPortfolioDrawerOpen(item)"
              >
                <feather-icon icon="Edit2Icon" />
              </b-button> -->
              <b-button
                variant="flat-primary"
                @click="handleDeleteItem(item, 'portfolio')"
              >
                <feather-icon icon="TrashIcon" />
              </b-button>
              <b-button
                variant="flat-primary"
                @click="toggleCreateNewProgramDrawer(item, 'program')"
              >
                <feather-icon icon="PlusIcon" />
              </b-button>
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.children"
              :key="index1+10"
            >
              <div
                class="portf-row portf-table-row font-14"
                :class="{ 'inner-sdw': index1 === 0 }"
                :style="`background-color:${!selectedObject ? '#0000' : item1.id === selectedObject.id ? '#9100ff57' : '#0000'}`"
              >
                <div
                  class="part1 portf-bold pl-2"
                  style="padding-top:7px"
                  @click="onCollapseProgramClick(index1)"
                >
                  <feather-icon
                    v-if="item1.children"
                    :icon="openedPg === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item1.title }}
                </div>
                <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="fi"
                    class="data-child mr-1"
                    :style="`min-width:200px`"
                  >
                    <div v-if="demandTableEditable">
                      <v-select
                        v-if="ft === 'priority'"
                        v-model="item1[ft]"
                        :options="priorities"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'portfolioHead'"
                        v-model="item1[ft]"
                        :options="headProductPortOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'productLine'"
                        v-model="item1[ft]"
                        :options="productLineOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'projectManager'"
                        v-model="item1[ft]"
                        :options="projectManagerOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'sponsor'"
                        v-model="item1[ft]"
                        :options="sponsorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'architectHead'"
                        v-model="item1[ft]"
                        :options="headProgramArchitectOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'programDirector'"
                        v-model="item1[ft]"
                        :options="programDirectorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'directionHead'"
                        v-model="item1[ft]"
                        :options="headProgramDirectorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'natDeadline'"
                        v-model="item1[ft]"
                        :options="nDeadlineOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'architect'"
                        v-model="item1[ft]"
                        :options="architectOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'productManager'"
                        v-model="item1[ft]"
                        :options="productManagerOptions"
                        outlined
                      />
                      <b-form-datepicker
                        v-else-if="ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase2startdate' || ft === 'phase3startdate' || ft === 'phase4startdate' || ft === 'phase4enddate' || ft === 'phase1enddate' || ft === 'phase2enddate' || ft === 'phase3enddate'"
                        v-model="item1[ft]"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      />
                      <div
                        v-else-if="ft === 'nextphase'"
                      >
                        {{ dateFormat(item1[ft])}}
                      </div>
                      <div
                        v-else-if="ft === 'spent' || ft === 'engaged' || ft === 'realEstimated' || ft === 'systemId'"
                      >
                        {{  item1[ft] }}
                      </div>
                      <b-input-group
                        v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized' ">
                        <b-form-input
                          v-model="item1[ft]"
                          type="number"
                          style="text-align:end"
                        />
                        <b-input-group-append>
                          <b-input-group-text class="bg-transparent font-weight-bold">
                            €
                          </b-input-group-text>
                        </b-input-group-append>
                      </b-input-group>
                      <b-form-input
                        v-else
                        v-model="item1[ft]"
                        style="text-align:end"
                      />
                    </div>
                    <div v-else>
                      <div
                        v-if="ft === 'priority'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ typeof(item1[ft]) === "string" ? item1[ft] : priorities[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'natDeadline'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ typeof(item1[ft]) === "string" ? item1[ft] : nDeadlineOptions[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ dateFormat(item1[ft]) }}
                      </div>
                      <div
                        v-else-if="ft === 'winrate' || ft === 'currentPhase'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ item1[ft] }}
                      </div>
                      <div
                        v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ item1[ft] }}
                      </div>
                      <div
                        v-else
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ formatCurrency(item1[ft]) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
                  <b-button
                    variant="flat-primary"
                    @click="handleDeleteItem(item1, 'program')"
                  >
                    <feather-icon icon="TrashIcon" />
                  </b-button>
                  <b-button
                    variant="flat-primary"
                    @click="toggleEditProgramDrawerOpen(item1, 'program')"
                  >
                    <feather-icon icon="Edit2Icon" />
                  </b-button>
                  <b-button
                    variant="flat-primary"
                    @click="toggleCreateNewProgramDrawer(item1, 'project')"
                  >
                    <feather-icon icon="PlusIcon" />
                  </b-button>
                </div>
              </div>
              <div v-if="openedPg === index1">
                <div
                  v-for="(item2, index2) in item1.children"
                  :key="index2+100"
                >
                  <div
                    class="portf-row portf-table-row font-14"
                    :class="{ 'inner-sdw': index2 === 0 }"
                    :style="`background-color:${!selectedObject ? '#0000' : item2.id === selectedObject.id ? '#9100ff57' : '#0000'}`"
                  >
                    <div
                      class="part1 portf-bold pl-2"
                      style="padding-top:7px"
                      @click="onCollapseProjectClick(index2)"
                    >
                      <feather-icon
                        v-if="item2.children"
                        :icon="openedPj === index2 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                        size="16"
                        class="mr-1 ml-1"
                      />
                      {{ item2.title }}
                    </div>
                    <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
                      <div
                        v-for="(ft, fi) in c_fields"
                        :key="fi"
                        class="data-child mr-1"
                        :style="`min-width:200px`"
                      >
                        <div v-if="demandTableEditable">
                          <v-select
                            v-if="ft === 'priority'"
                            v-model="item2[ft]"
                            :options="priorities"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'portfolioHead'"
                            v-model="item2[ft]"
                            :options="headProductPortOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'productLine'"
                            v-model="item2[ft]"
                            :options="productLineOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'projectManager'"
                            v-model="item2[ft]"
                            :options="projectManagerOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'sponsor'"
                            v-model="item2[ft]"
                            :options="sponsorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'architectHead'"
                            v-model="item2[ft]"
                            :options="headProgramArchitectOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'programDirector'"
                            v-model="item2[ft]"
                            :options="programDirectorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'directionHead'"
                            v-model="item2[ft]"
                            :options="headProgramDirectorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'architect'"
                            v-model="item2[ft]"
                            :options="architectOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'natDeadline'"
                            v-model="item2[ft]"
                            :options="nDeadlineOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'productManager'"
                            v-model="item2[ft]"
                            :options="productManagerOptions"
                            outlined
                          />
                          <b-form-datepicker
                            v-else-if="ft === 'phase4enddate' || ft === 'phase1enddate' || ft === 'phase2enddate' || ft === 'phase3enddate' || ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase2startdate' || ft === 'phase3startdate' || ft === 'phase4startdate'"
                            v-model="item2[ft]"
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                          />
                          <div
                            v-else-if="ft === 'nextphase'"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <div
                            v-else-if="ft === 'spent' || ft === 'engaged' || ft === 'realEstimated' || ft === 'systemId'"
                          >
                            {{  item2[ft] }}
                          </div>
                          <b-input-group
                            v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized' ">
                            <b-form-input
                              v-model="item2[ft]"
                              type="number"
                              style="text-align:end"
                            />
                            <b-input-group-append>
                              <b-input-group-text class="bg-transparent font-weight-bold">
                                €
                              </b-input-group-text>
                            </b-input-group-append>
                          </b-input-group>
                          <b-form-input
                            v-else
                            v-model="item2[ft]"
                            style="text-align:end"
                          />
                        </div>
                        <div v-else>
                          <div
                            v-if="ft === 'priority'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ typeof(item2[ft]) === "string" ? item2[ft] : priorities[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'natDeadline'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ typeof(item2[ft]) === "string" ? item2[ft] : nDeadlineOptions[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <div
                            v-else-if="ft === 'winrate' || ft === 'currentPhase'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ item2[ft] }}
                          </div>
                          <div
                            v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ item2[ft] }}
                          </div>
                          <div
                            v-else
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ formatCurrency(item2[ft]) }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
                      <b-button
                        variant="flat-primary"
                        @click="handleDeleteItem(item2, 'project')"
                      >
                        <feather-icon icon="TrashIcon" />
                      </b-button>
                      <b-button
                        variant="flat-primary"
                        @click="toggleEditProgramDrawerOpen(item2, 'project')"
                      >
                        <feather-icon icon="Edit2Icon" />
                      </b-button>
                      <b-button
                        variant="flat-primary"
                        @click="toggleCreateNewProgramDrawer(item2, 'subproject')"
                      >
                        <feather-icon icon="PlusIcon" />
                      </b-button>
                    </div>
                  </div>
                  <div v-if="openedPj === index2">
                    <div
                      v-for="(item3, index3) in item2.children"
                      :key="index3+1000"
                    >
                      <div
                        class="portf-row portf-table-row font-14"
                        :class="{ 'inner-sdw': index3 === 0 }"
                      >
                        <div
                          class="part1 portf-bold pl-2 ml-2"
                          style="padding-top:7px"
                        >
                          {{ item3.title }}
                        </div>
                        <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
                          <div
                            v-for="(ft, fi) in c_fields"
                            :key="fi"
                            class="data-child mr-1"
                            :style="`min-width:200px`"
                          >
                            <div v-if="demandTableEditable">
                              <v-select
                                v-if="ft === 'priority'"
                                v-model="item3[ft]"
                                :options="priorities"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'portfolioHead'"
                                v-model="item3[ft]"
                                :options="headProductPortOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'productLine'"
                                v-model="item3[ft]"
                                :options="productLineOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'projectManager'"
                                v-model="item3[ft]"
                                :options="projectManagerOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'sponsor'"
                                v-model="item3[ft]"
                                :options="sponsorOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'architectHead'"
                                v-model="item3[ft]"
                                :options="headProgramArchitectOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'programDirector'"
                                v-model="item3[ft]"
                                :options="programDirectorOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'directionHead'"
                                v-model="item3[ft]"
                                :options="headProgramDirectorOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'architect'"
                                v-model="item3[ft]"
                                :options="architectOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'productManager'"
                                v-model="item3[ft]"
                                :options="productManagerOptions"
                                outlined
                              />
                              <v-select
                                v-else-if="ft === 'natDeadline'"
                                v-model="item3[ft]"
                                :options="nDeadlineOptions"
                                outlined
                              />
                              <b-form-datepicker
                                v-else-if="ft === 'phase4enddate' || ft === 'phase1enddate' || ft === 'phase2enddate' || ft === 'phase3enddate' || ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase2startdate' || ft === 'phase3startdate' || ft === 'phase4startdate'"
                                v-model="item3[ft]"
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                              />
                              <div
                                v-else-if="ft === 'nextphase'"
                              >
                                {{ dateFormat(item3[ft]) }}
                              </div>
                              <div
                                v-else-if="ft === 'spent' || ft === 'engaged' || ft === 'realEstimated' || ft === 'systemId'"
                              >
                                {{  item3[ft] }}
                              </div>
                              <b-input-group
                                v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized' ">
                                <b-form-input
                                  v-model="item3[ft]"
                                  type="number"
                                  style="text-align:end"
                                />
                                <b-input-group-append>
                                  <b-input-group-text class="bg-transparent font-weight-bold">
                                    €
                                  </b-input-group-text>
                                </b-input-group-append>
                              </b-input-group>
                              <b-form-input
                                v-else
                                v-model="item1[ft]"
                                style="text-align:end"
                              />
                            </div>
                            <div v-else>
                              <div
                                v-if="ft === 'priority'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ typeof(item3[ft]) === "string" ? item3[ft] : priorities[item3[ft] - 1] }}
                              </div>
                              <div
                                v-else-if="ft === 'natDeadline'"
                                class="mr-1"
                                style="margin-top:6px;"
                              >
                                {{ typeof(item3[ft]) === "string" ? item3[ft] : nDeadlineOptions[item3[ft] - 1] }}
                              </div>
                              <div
                                v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ dateFormat(item3[ft]) }}
                              </div>
                              <div
                                v-else-if="ft === 'winrate' || ft === 'currentPhase'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ item3[ft] }}
                              </div>
                              <div
                                v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ item3[ft] }}
                              </div>
                              <div
                                v-else
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ formatCurrency(item3[ft]) }}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
                          <b-button
                            variant="flat-primary"
                            @click="handleDeleteItem(item3, 'subproject')"
                          >
                            <feather-icon icon="TrashIcon" />
                          </b-button>
                          <b-button
                            variant="flat-primary"
                            @click="toggleEditProgramDrawerOpen(item3, 'subproject')"
                          >
                            <feather-icon icon="Edit2Icon" />
                          </b-button>
                          <!-- <b-button
                            variant="flat-primary"
                            @click="toggleCreateNewProgramDrawer(item2, 'subproject')"
                          >
                            <feather-icon icon="PlusIcon" />
                          </b-button> -->
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
      <div v-if="otype === 'portfolio'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
            :style="`background-color:${!selectedObject ? '#0000' : item.id === selectedObject.id ? '#9100ff57' : '#0000'}`"
          >
            <div
              class="part1 portf-uppercase"
              style="cursor:pointer"
              @click="onCollapseClick(index)"
            >
              <feather-icon
                v-if="item.children"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`min-width:200px`"
              >
                <span v-if="ft === 'priority'">{{ typeof(item[ft]) === "string" ? item[ft] : priorities[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'natDeadline'">{{ typeof(item[ft]) === "string" ? item[ft] : nDeadlineOptions[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'winrate'  || ft === 'currentPhase'">{{ item[ft] }}</span>
                <span v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'">{{ item[ft] }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
            <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
              <b-button
                variant="flat-primary"
                @click="handleDeleteItem(item, 'program')"
              >
                <feather-icon icon="TrashIcon" />
              </b-button>
              <b-button
                variant="flat-primary"
                @click="toggleEditProgramDrawerOpen(item, 'program')"
              >
                <feather-icon icon="Edit2Icon" />
              </b-button>
              <b-button
                variant="flat-primary"
                @click="toggleCreateNewProgramDrawer(item, 'project')"
              >
                <feather-icon icon="PlusIcon" />
              </b-button>
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.children"
              :key="index1"
              :style="`background-color:${!selectedObject ? '#0000' : item1.id === selectedObject.id ? '#9100ff57' : '#0000'}`"
            >
            <!-- border-bottom-dm -->
              <div
                class="portf-row portf-table-row font-14"
                :class="{ 'inner-sdw': index1 === 0 }"
              >
                <div
                  class="part1 portf-bold pl-2"
                  style="padding-top:7px"
                  @click="onCollapseProjectClick(index1)"
                >
                  <feather-icon
                    v-if="item1.children"
                    :icon="openedPj === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1 ml-1"
                  />
                  {{ item1.title }}
                </div>
                <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="fi"
                    class="data-child mr-1"
                    :style="`min-width:200px`"
                  >
                    <div v-if="demandTableEditable">
                      <v-select
                        v-if="ft === 'priority'"
                        v-model="item1[ft]"
                        :options="priorities"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'portfolioHead'"
                        v-model="item1[ft]"
                        :options="headProductPortOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'productLine'"
                        v-model="item1[ft]"
                        :options="productLineOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'projectManager'"
                        v-model="item1[ft]"
                        :options="projectManagerOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'sponsor'"
                        v-model="item1[ft]"
                        :options="sponsorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'architectHead'"
                        v-model="item1[ft]"
                        :options="headProgramArchitectOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'programDirector'"
                        v-model="item1[ft]"
                        :options="programDirectorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'directionHead'"
                        v-model="item1[ft]"
                        :options="headProgramDirectorOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'architect'"
                        v-model="item1[ft]"
                        :options="architectOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'productManager'"
                        v-model="item1[ft]"
                        :options="productManagerOptions"
                        outlined
                      />
                      <v-select
                        v-else-if="ft === 'natDeadline'"
                        v-model="item1[ft]"
                        :options="nDeadlineOptions"
                        outlined
                      />
                      <b-form-datepicker
                        v-else-if="ft === 'phase4enddate' || ft === 'phase1enddate' || ft === 'phase2enddate' || ft === 'phase3enddate' || ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase2startdate' || ft === 'phase3startdate' || ft === 'phase4startdate'"
                        v-model="item1[ft]"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                      />
                      <div
                        v-else-if="ft === 'nextphase'"
                      >
                        {{ dateFormat(item1[ft]) }}
                      </div>
                      <div
                        v-else-if="ft === 'spent' || ft === 'engaged' || ft === 'realEstimated' || ft === 'systemId'"
                      >
                        {{  item1[ft] }}
                      </div>
                      <b-input-group
                        v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized' ">
                        <b-form-input
                          v-model="item1[ft]"
                          type="number"
                          style="text-align:end"
                        />
                        <b-input-group-append>
                          <b-input-group-text class="bg-transparent font-weight-bold">
                            €
                          </b-input-group-text>
                        </b-input-group-append>
                      </b-input-group>
                      <b-form-input
                        v-else
                        v-model="item1[ft]"
                        style="text-align:end"
                      />
                    </div>
                    <div v-else>
                      <div
                        v-if="ft === 'priority'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ typeof(item1[ft]) === "string" ? item1[ft] : priorities[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'natDeadline'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ typeof(item1[ft]) === "string" ? item1[ft] : nDeadlineOptions[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ dateFormat(item1[ft]) }}
                      </div>
                      <div
                        v-else-if="ft === 'winrate' || ft === 'currentPhase'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ item1[ft] }}
                      </div>
                      <div
                        v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ item1[ft] }}
                      </div>
                      <div
                        v-else
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ formatCurrency(item1[ft]) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
                  <b-button
                    variant="flat-primary"
                    @click="handleDeleteItem(item1, 'project')"
                  >
                    <feather-icon icon="TrashIcon" />
                  </b-button>
                  <b-button
                    variant="flat-primary"
                    @click="toggleEditProgramDrawerOpen(item1, 'project')"
                  >
                    <feather-icon icon="Edit2Icon" />
                  </b-button>
                  <b-button
                    variant="flat-primary"
                    @click="toggleCreateNewProgramDrawer(item1, 'subproject')"
                  >
                    <feather-icon icon="PlusIcon" />
                  </b-button>
                </div>
              </div>
              <div v-if="openedPj === index1">
                <div
                  v-for="(item2, index2) in item1.children"
                  :key="index2"
                >
                  <div
                    class="portf-row portf-table-row font-14"
                    :class="{ 'inner-sdw': index2 === 0 }"
                  >
                    <div
                      class="part1 portf-bold pl-2 ml-3"
                      style="padding-top:7px"
                    >
                      {{ item2.title }}
                    </div>
                    <div class="part2" :style="`min-width: ${200 * c_fields.length}px`">
                      <div
                        v-for="(ft, fi) in c_fields"
                        :key="fi"
                        class="data-child mr-1"
                        :style="`min-width:200px`"
                      >
                        <div v-if="demandTableEditable">
                          <v-select
                            v-if="ft === 'priority'"
                            v-model="item2[ft]"
                            :options="priorities"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'portfolioHead'"
                            v-model="item2[ft]"
                            :options="headProductPortOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'productLine'"
                            v-model="item2[ft]"
                            :options="productLineOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'projectManager'"
                            v-model="item2[ft]"
                            :options="projectManagerOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'sponsor'"
                            v-model="item2[ft]"
                            :options="sponsorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'architectHead'"
                            v-model="item2[ft]"
                            :options="headProgramArchitectOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'programDirector'"
                            v-model="item2[ft]"
                            :options="programDirectorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'directionHead'"
                            v-model="item2[ft]"
                            :options="headProgramDirectorOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'architect'"
                            v-model="item2[ft]"
                            :options="architectOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'productManager'"
                            v-model="item2[ft]"
                            :options="productManagerOptions"
                            outlined
                          />
                          <v-select
                            v-else-if="ft === 'natDeadline'"
                            v-model="item2[ft]"
                            :options="nDeadlineOptions"
                            outlined
                          />
                          <b-form-datepicker
                            v-else-if="ft === 'phase4enddate' || ft === 'phase1enddate' || ft === 'phase2enddate' || ft === 'phase3enddate' || ft === 'deadline' || ft === 'phase1startdate' || ft === 'phase2startdate' || ft === 'phase3startdate' || ft === 'phase4startdate'"
                            v-model="item2[ft]"
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                          />
                          <div
                            v-else-if="ft === 'nextphase'"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <div
                            v-else-if="ft === 'spent' || ft === 'engaged' || ft === 'realEstimated' || ft === 'systemId'"
                          >
                            {{  item2[ft] }}
                          </div>
                          <b-input-group
                            v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized' ">
                            <b-form-input
                              v-model="item2[ft]"
                              type="number"
                              style="text-align:end"
                            />
                            <b-input-group-append>
                              <b-input-group-text class="bg-transparent font-weight-bold">
                                €
                              </b-input-group-text>
                            </b-input-group-append>
                          </b-input-group>
                          <b-form-input
                            v-else
                            v-model="item2[ft]"
                            style="text-align:end"
                          />
                        </div>
                        <div v-else>
                          <div
                            v-if="ft === 'priority'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ typeof(item2[ft]) === "string" ? item2[ft] : priorities[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'natDeadline'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ typeof(item2[ft]) === "string" ? item2[ft] : nDeadlineOptions[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'nextphase' || ft === 'deadline' || ft === 'phase1startdate' || ft == 'phase1enddate' || ft === 'phase2startdate' || ft == 'phase2enddate' || ft === 'phase3startdate' || ft == 'phase3enddate' || ft === 'phase4startdate' || ft == 'phase4enddate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <!-- <div
                            v-else-if="ft === 'winrate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ getSelectedWinRate }}
                          </div> -->
                          <div
                            v-else-if="ft === 'architect' || ft === 'portfolioHead' || ft === 'productManager' || ft === 'directionHead' || ft === 'programDirector' || ft === 'projectManager' || ft === 'architectHead' || ft === 'sponsor' || ft === 'productLine' || ft === 'winrate' || ft === 'currentPhase'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ item2[ft] }}
                          </div>
                          <div
                            v-else
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ formatCurrency(item2[ft]) }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="part3 d-flex justify-content-center" :style="`margin-left: 200px`">
                      <b-button
                        variant="flat-primary"
                        @click="handleDeleteItem(item2, 'subproject')"
                      >
                        <feather-icon icon="TrashIcon" />
                      </b-button>
                      <b-button
                        variant="flat-primary"
                        @click="toggleEditProgramDrawerOpen(item2, 'subproject')"
                      >
                        <feather-icon icon="Edit2Icon" />
                      </b-button>
                      <!-- <b-button
                        variant="flat-primary"
                        @click="toggleCreateNewProgramDrawer(item2, 'subproject')"
                      >
                        <feather-icon icon="PlusIcon" />
                      </b-button> -->
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
      v-if="isChartView"
      class="d-flex flex-column w-100"
      style
    >
      <b-card
        v-for="(serie, idx) in c_series"
        :key="idx"
        no-body
        no-footer
        class="chart-card"
      >
        <b-row>
          <b-col>
            <h2>{{ serie[0].title }}</h2>
            <div class="d-flex justify-content-between align-center mt-1">
              <p class="text-uppercase m-0">
                Budget Portfolio
              </p>
              <p class="m-0">
                {{ formatCurrency(getTotalValue(serie)) }}
              </p>
            </div>
            <vue-apex-charts
              type="bar"
              height="248"
              :options="chartOptions"
              :series="serie"
            />
          </b-col>
          <b-col>
            <b-row cols="2">
              <b-col
                v-for="(color, index) in chartOptions.colors"
                :key="index"
                class="mb-1"
              >
                <div class="d-flex justify-content-between align-center mb-1">
                  <p class="text-capitalize m-0">
                    {{ chartOptions.xaxis.categories[index] }}
                  </p>
                  <p class="m-0">
                    {{ getPercent(serie[0].data[index], getTotalValue(serie)) }}%
                  </p>
                </div>
                <b-progress :max="getTotalValue(serie)">
                  <b-progress-bar
                    :value="serie[0].data[index]"
                    :style="{ 'background-color': color }"
                  />
                </b-progress>
                <p class="mt-1">
                  {{ formatCurrency(serie[0].data[index]) }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleDrawerOpen"
    >
      <div v-if="budgetDrawerOpen">
        <BudgetDrawer />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleEditProgramDrawerOpen"
    >
      <div v-if="openEditProgramDrawerOpen">
        <EditProgramDrawer
          :data="selectedObject"
          :otype="selectedType"
        />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleEditPortfolioDrawerOpen"
    >
      <div v-if="editPortfolioDrawerOpen">
        <EditPortfolioDrawer
          :data="selectedPortfolio"
        />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleCreateNewProgramDrawer"
    >
      <div v-if="openCreateNewProgramDrawer">
        <CreateNewProgramDrawer
          :data="selectedObject"
          :otype="selectedType"
        />
      </div>
    </Drawer>
  </div>
</template>

<script>
import {
  BButton, BCard, BFormInput, BRow, BCol, BProgress, BProgressBar, BInputGroup, BInputGroupAppend, BInputGroupText, BFormDatepicker
} from 'bootstrap-vue'
import moment from 'moment'
import Drawer from "vue-simple-drawer"
import VueApexCharts from 'vue-apexcharts'
import vSelect from 'vue-select'
import BudgetDrawer from '../modals/BudgetDrawer.vue'
import CreateNewProgramDrawer from '../../program/modals/CreateNewProgramDrawer.vue'
import EditProgramDrawer from '../../program/modals/EditProgramDrawer.vue'

export default {
  components: {
    BButton,
    BCard,
    BFormInput,
    BRow,
    BCol,
    BProgress,
    BProgressBar,
    VueApexCharts,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupText,
    vSelect,
    Drawer,
    BudgetDrawer,
    EditProgramDrawer,
    CreateNewProgramDrawer,
    BFormDatepicker
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    fields: {
      type: Array,
      default: () => [],
    },
    isChartView: {
      type: Boolean,
      default: false,
    },
    otype: {
      type: String
    }
  },
  data() {
    return {
      budgetDrawerOpen: false,
      editProgramDrawerOpen: false,
      editPortfolioDrawerOpen: false,
      opened: 0,
      openedPj: 0,
      openedPg: 0,
      priorities: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
      nDeadlineOptions: this.$store.state.globalState.natureDeadLines,
      headProductPortOptions: this.$store.state.globalState.hproductportfolios,
      productManagerOptions: this.$store.state.globalState.productmanagers,
      headProgramArchitectOptions: this.$store.state.globalState.hprogramarchitects,
      architectOptions: this.$store.state.globalState.architects,
      headProgramDirectorOptions: this.$store.state.globalState.hprogramdirectors,
      programDirectorOptions: this.$store.state.globalState.programdirectors,
      projectManagerOptions: this.$store.state.globalState.projectmanagers,
      chartOptions: {
        chart: {
          type: 'bar',
          foreColor: 'rgba(255, 255, 255, 0.8)',
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: '#595E71',
          padding: {
            left: 50,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        colors: ['#7367F0', '#D46D6D', '#BC00F9', '#00CFE8', '#0D6EFD', '#28C76F'],
        dataLabels: {
          enabled: true,
          formatter: val => `€${val}`
        },
        legend: {
          show: true,
        },
        tooltip: {
          enabled: true,
        },
        plotOptions: {
          bar: {
            distributed: true, // this line is mandatory
            horizontal: true,
          },
        },
        xaxis: {
          categories: ['budget', 'demand', 'quote + engaged', 'real estimated', 'authorized', 'spent'],
          labels: {
            formatter: val => `€${val}`
          }
        },
        yaxis: {
          labels: {
            show: true,
            align: 'left',
            offsetX: '0',
            style: {
              cssClass: 'text-uppercase',
            },
          },
        },
      },
    }
  },
  computed: {
    openEditProgramDrawerOpen() {
      return this.$store.state.globalState.openEditProgramDrawer
    },
    openCreateNewProgramDrawer() {
      return this.$store.state.globalState.openCreateNewProgramDrawer
    },
    getSelectedWinRate() {
      return this.$store.state.globalState.selectedWinRate
    },
    getPhaseStartDate() {
      return this.$store.state.globalState.selectedPhaseStartDate
    },
    getPhaseEndDate() {
      return this.$store.state.globalState.selectedPhaseEndDate
    },
    c_fields() {
      return this.fields.slice(1, this.fields.length - 1)
    },
    demandTableEditable() {
      return this.$store.state.globalState.demandTableEditable
    },
    c_data() {
      if (this.data === null) return []
      if (this.data.type === 'portfolio' && this.data.children) {
        const ndt = this.data.children.map(t => {
          let engaged = 0
          let demand = 0
          let realEstimated = 0
          let authorized = 0
          let spent = 0
          let customerEx = 0
          let salesEx = 0
          let scoring = 0
          let roi = 0
          if (t.children.length > 0) {
            t.children.map(t1 => {
              if (t1.children.length > 0) {
                t1.children.map(t2 => {
                  engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                  salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                  scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                  roi += parseInt(t2.roi ? t2.roi : 0, 10)
                  return null
                })
              } else {
                engaged += parseInt(t1.engaged ? t1.engaged : 0, 10)
                demand += parseInt(t1.demand ? t1.demand : 0, 10)
                realEstimated += parseInt(t1.realEstimated ? t1.realEstimated : 0, 10)
                authorized += parseInt(t1.authorized ? t1.authorized : 0, 10)
                spent += parseInt(t1.spent ? t1.spent : 0, 10)
                customerEx += parseInt(t1.customerEx ? t1.customerEx : 0, 10)
                salesEx += parseInt(t1.salesEx ? t1.salesEx : 0, 10)
                scoring += parseInt(t1.scoring ? t1.scoring : 0, 10)
                roi += parseInt(t1.roi ? t1.roi : 0, 10)
              }
              return null
            })
          } else {
            engaged = parseInt(t.engaged ? t.engaged : 0, 10)
            demand = parseInt(t.demand ? t.demand : 0, 10)
            realEstimated = parseInt(t.realEstimated ? t.realEstimated : 0, 10)
            authorized = parseInt(t.authorized ? t.authorized : 0, 10)
            spent = parseInt(t.spent ? t.spent : 0, 10)
            customerEx += parseInt(t.customerEx ? t.customerEx : 0, 10)
            salesEx += parseInt(t.salesEx ? t.salesEx : 0, 10)
            scoring += parseInt(t.scoring ? t.scoring : 0, 10)
            roi += parseInt(t.roi ? t.roi : 0, 10)
          }
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
          return nd
        })
        return ndt
      }
      const ndt = this.data.children.map(t => {
        let engaged = 0
        let demand = 0
        let realEstimated = 0
        let authorized = 0
        let spent = 0
        let customerEx = 0
        let salesEx = 0
        let scoring = 0
        let roi = 0
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
                    t2Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t2Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t2RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t2Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t2Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t2customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t2salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t2scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t2roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t1Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t1Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t1RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t1Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t1Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t1customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t1salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t1scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t1roi += parseInt(t3.roi ? t3.roi : 0, 10)
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
                } else {
                  engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                  salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                  scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                  roi += parseInt(t2.roi ? t2.roi : 0, 10)
                  t1Engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  t1Demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  t1RealEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  t1Authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  t1Spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  t1customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                  t1salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                  t1scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                  t1roi += parseInt(t2.roi ? t2.roi : 0, 10)
                }
                updatedT2s.push(updatedT2)
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
              updatedT1.children = updatedT2s
            } else {
              engaged += parseInt(t1.engaged ? t1.engaged : 0, 10)
              demand += parseInt(t1.demand ? t1.demand : 0, 10)
              realEstimated += parseInt(t1.realEstimated ? t1.realEstimated : 0, 10)
              authorized += parseInt(t1.authorized ? t1.authorized : 0, 10)
              spent += parseInt(t1.spent ? t1.spent : 0, 10)
              customerEx += parseInt(t1.customerEx ? t1.customerEx : 0, 10)
              salesEx += parseInt(t1.salesEx ? t1.salesEx : 0, 10)
              scoring += parseInt(t1.scoring ? t1.scoring : 0, 10)
              roi += parseInt(t1.roi ? t1.roi : 0, 10)
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
          nd.children = updatedT1s
          return nd
        }
        return t
      })
      return ndt
    },
    c_totalBudget() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.demand ? parseInt(t.demand, 10) : 0
      })
      return bd
    },
    c_totalEngaged() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.engaged ? parseInt(t.engaged, 10) : 0
      })
      return bd
    },
    c_totalQuote() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.quote ? parseInt(t.quote, 10) : 0
      })
      return bd
    },
    c_totalDemand() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.demand ? parseInt(t.demand, 10) : 0
      })
      return bd
    },
    c_totalReal() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.realEstimated ? parseInt(t.realEstimated, 10) : 0
      })
      return bd
    },
    c_totalSpent() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.spent ? parseInt(t.spent, 10) : 0
      })
      return bd
    },
    c_totalAuthor() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.authorized ? parseInt(t.authorized, 10) : 0
      })
      return bd
    },
    c_series() {
      return [
        [{
          title: 'Consumer Robots',
          data: [this.c_totalBudget, this.c_totalDemand, this.c_totalQuote + this.c_totalEngaged, this.c_totalReal, this.c_totalAuthor, this.c_totalSpent],
        }]
      ]
    }
  },
  methods: {
    async handleDeleteItem(item, type) {
      try {
        // Show confirmation dialog and wait for user action
        const value = await this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this.', {
          title: 'Please Confirm',
          size: 'sm',
          okVariant: 'primary',
          okTitle: 'Yes',
          cancelTitle: 'No',
          cancelVariant: 'outline-secondary',
          hideHeaderClose: false,
          centered: true,
        })
        if (value) {
          // If user confirms deletion, handle it based on the type
          if (item.children && item.children.length > 0) {
            await this.$store.commit('globalState/DELETE_FAILED')
            return
          }
          switch (type) {
            case 'portfolio':
              await this.$store.dispatch('globalState/delete_portfolio', { id: item.id })
              break
            case 'program':
              await this.$store.dispatch('globalState/delete_program', { id: item.id })
              break
            case 'project':
              await this.$store.dispatch('globalState/delete_project', { id: item.id })
              break
            case 'subproject':
              await this.$store.dispatch('globalState/delete_subproject', { id: item.id })
              break
            default:
              // Handle any other cases or do nothing
              break
          }
          // After deletion, refresh data based on the current navigation selection
          await this.$store.dispatch('globalState/load_org_data')
          const data = this.$store.state.globalState.selectedNavObj
          await this.$store.dispatch('globalState/get_from_selected_nav_id', { data })
        }
      } catch (error) {
        console.error('Error in handleDeleteItem:', error)
        // Optionally handle any errors, e.g., show an error message
      }
    },
    toggleCreateNewPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PORTFOLIO_DRAWER')
    },
    toggleCreateNewProgramDrawer(item, type) {
      this.selectedObject = item
      this.selectedType = type
      const payload = { item, type }
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PROGRAM_DRAWER', payload)
    },
    toggleDrawerOpen() {
      this.demandDrawerOpen = !this.demandDrawerOpen
    },
    toggleEditPortfolioDrawerOpen(item) {
      this.selectedPortfolio = item
      this.editPortfolioDrawerOpen = !this.editPortfolioDrawerOpen
    },
    toggleEditProgramDrawerOpen(item, type) {
      this.selectedObject = item
      this.selectedType = type
      const payload = { item, type }
      this.$store.commit('globalState/TOGGLE_EDIT_PROGRAM_DRAWER', payload)
    },
    onCollapseClick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    onCollapseProgramClick(index) {
      if (index === this.openedPg) {
        this.openedPg = -1
      } else {
        this.openedPg = index
      }
    },
    onCollapseProjectClick(index) {
      if (index === this.openedPj) {
        this.openedPj = -1
      } else {
        this.openedPj = index
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
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.title === 'total') { return colorClass }
    },
    getTotalValue(data) {
      let totalValue = 0
      data[0].data.forEach(val => {
        totalValue += val
      })
      return totalValue
    },
    getPercent(val, total) {
      return Math.round((val / total) * 100)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-portfolio-demand.scss';
</style>
