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
        <div class="part1">
          <!-- Consumer Robots -->
        </div>
        <div class="part2">
          <div
            v-for="(ft, fi) in c_fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase pr-1"
            :style="`width:${100 / c_fields.length}%`"
          >
            {{ ft }}
          </div>
        </div>
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
                v-if="item.children"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div class="part2">
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`width:${100 / c_fields.length}%`"
              >
                <span v-if="ft === 'priority'">{{ priorities[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'winrate'">{{ getSelectedWinRate }}</span>
                <span v-else-if="ft === 'phaseStartDate'">{{ getPhaseStartDate }}</span>
                <span v-else-if="ft === 'phaseEndDate'">{{ getPhaseEndDate }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
            <div class="part3 d-flex justify-content-center">
              <!-- <b-button
                variant="flat-primary"
                @click="toggleEditPortfolioDrawerOpen(item)"
              >
                <feather-icon icon="Edit2Icon" />
              </b-button>
              <b-button
                variant="flat-primary"
                @click="toggleCreateNewPortfolioDrawer"
              >
                <feather-icon icon="PlusIcon" />
              </b-button> -->
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.children"
              :key="index1+10"
            >
              <div
                class="portf-row portf-table-row font-14 border-bottom-dm"
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
                <div class="part2">
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="fi"
                    class="data-child mr-1"
                    :style="`width:${100 / c_fields.length}%`"
                  >
                    <div v-if="demandTableEditable">
                      <div
                        v-if="ft === 'engaged' || ft === 'realestimated' || ft === 'spent' || ft === 'phase' || ft === 'head_program_diretion' || ft === 'program_director' || ft === 'project_manager'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ formatCurrency(item1[ft]) }}
                      </div>
                      <v-select
                        v-else-if="ft === 'priority'"
                        v-model="item1[ft]"
                        :options="priorities"
                        outlined
                      />
                      <b-form-input
                        v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                        v-model="item1[ft]"
                        style="text-align:end"
                      />
                      <b-input-group v-else>
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
                    </div>
                    <div v-else>
                      <div
                        v-if="ft === 'priority'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ priorities[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ dateFormat(item1[ft]) }}
                      </div>
                      <div
                        v-else-if="ft === 'winrate'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ getSelectedWinRate }}
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
                <div class="part3 d-flex justify-content-center">
                  <b-button
                    variant="flat-primary"
                    @click="toggleEditProgramDrawerOpen(item1, 'program')"
                  >
                    <feather-icon icon="Edit2Icon" />
                  </b-button>
                  <b-button
                    variant="flat-primary"
                    @click="toggleCreateNewProgramDrawer(item1, 'program')"
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
                    class="portf-row portf-table-row font-14 border-bottom-dm"
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
                    <div class="part2">
                      <div
                        v-for="(ft, fi) in c_fields"
                        :key="fi"
                        class="data-child mr-1"
                        :style="`width:${100 / c_fields.length}%`"
                      >
                        <div v-if="demandTableEditable">
                          <div
                            v-if="ft === 'engaged' || ft === 'realestimated' || ft === 'spent' || ft === 'phase' || ft === 'head_program_diretion' || ft === 'program_director' || ft === 'project_manager'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ formatCurrency(item2[ft]) }}
                          </div>
                          <v-select
                            v-else-if="ft === 'priority'"
                            v-model="item2[ft]"
                            :options="priorities"
                            outlined
                          />
                          <b-form-input
                            v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                            v-model="item2[ft]"
                            style="text-align:end"
                          />
                          <!-- <b-input-group v-else-if="ft === 'authorized' || ft === 'winrate' || ft === 'prev_engaged' || ft === 'quote_engaged' || ft === 'value' || ft === 'demand' || ft === 'budget' || ft === 'description' || ft === 'architect' || ft === 'product_manager'"> -->
                          <b-input-group v-else>
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
                        </div>
                        <div v-else>
                          <div
                            v-if="ft === 'priority'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ priorities[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <div
                            v-else-if="ft === 'winrate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ getSelectedWinRate }}
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
                    <div class="part3 d-flex justify-content-center">
                      <b-button
                        variant="flat-primary"
                        @click="toggleEditProgramDrawerOpen(item2, 'project')"
                      >
                        <feather-icon icon="Edit2Icon" />
                      </b-button>
                      <b-button
                        variant="flat-primary"
                        @click="toggleCreateNewProgramDrawer(item2, 'project')"
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
                        class="portf-row portf-table-row font-14 border-bottom-dm"
                        :class="{ 'inner-sdw': index3 === 0 }"
                      >
                        <div
                          class="part1 portf-bold pl-2 ml-2"
                          style="padding-top:7px"
                        >
                          {{ item3.title }}
                        </div>
                        <div class="part2">
                          <div
                            v-for="(ft, fi) in c_fields"
                            :key="fi"
                            class="data-child mr-1"
                            :style="`width:${100 / c_fields.length}%`"
                          >
                            <div v-if="demandTableEditable">
                              <div
                                v-if="ft === 'engaged' || ft === 'realestimated' || ft === 'spent' || ft === 'phase' || ft === 'head_program_diretion' || ft === 'program_director' || ft === 'project_manager'"
                                class="mr-1"
                                style="margin-top:6px;"
                              >
                                {{ formatCurrency(item2[ft]) }}
                              </div>
                              <v-select
                                v-else-if="ft === 'priority'"
                                v-model="item3[ft]"
                                :options="priorities"
                                outlined
                              />
                              <b-form-input
                                v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                                v-model="item3[ft]"
                                style="text-align:end"
                              />
                              <b-input-group v-else>
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
                            </div>
                            <div v-else>
                              <div
                                v-if="ft === 'priority'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ priorities[item3[ft] - 1] }}
                              </div>
                              <div
                                v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ dateFormat(item3[ft]) }}
                              </div>
                              <div
                                v-else-if="ft === 'winrate'"
                                class="mr-3"
                                style="margin-top:6px;"
                              >
                                {{ getSelectedWinRate }}
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
            <div class="part2">
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`width:${100 / c_fields.length}%`"
              >
                <span v-if="ft === 'priority'">{{ priorities[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'winrate'">{{ getSelectedWinRate }}</span>
                <span v-else-if="ft === 'phaseStartDate'">{{ getPhaseStartDate }}</span>
                <span v-else-if="ft === 'phaseEndDate'">{{ getPhaseEndDate }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
            <div class="part3 d-flex justify-content-center">
              <b-button
                variant="flat-primary"
                @click="toggleEditProgramDrawerOpen(item, 'program')"
              >
                <feather-icon icon="Edit2Icon" />
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
              :key="index1"
              :style="`background-color:${!selectedObject ? '#0000' : item1.id === selectedObject.id ? '#9100ff57' : '#0000'}`"
            >
              <div
                class="portf-row portf-table-row font-14 border-bottom-dm"
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
                <div class="part2">
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="fi"
                    class="data-child mr-1"
                    :style="`width:${100 / c_fields.length}%`"
                  >
                    <div v-if="demandTableEditable">
                      <div
                        v-if="ft === 'engaged' || ft === 'realestimated' || ft === 'spent' || ft === 'phase' || ft === 'head_program_diretion' || ft === 'program_director' || ft === 'project_manager'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ formatCurrency(item2[ft]) }}
                      </div>
                      <v-select
                        v-else-if="ft === 'priority'"
                        v-model="item1[ft]"
                        :options="priorities"
                        outlined
                      />
                      <b-form-input
                        v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                        v-model="item1[ft]"
                        style="text-align:end"
                      />
                      <b-input-group v-else>
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
                    </div>
                    <div v-else>
                      <div
                        v-if="ft === 'priority'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ priorities[item1[ft] - 1] }}
                      </div>
                      <div
                        v-else-if="ft === 'deadline'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ dateFormat(item1[ft]) }}
                      </div>
                      <div
                        v-else-if="ft === 'winrate'"
                        class="mr-1"
                        style="margin-top:6px;"
                      >
                        {{ getSelectedWinRate }}
                      </div>
                      <span v-else-if="ft === 'phaseStartDate'">{{ getPhaseStartDate }}</span>
                      <span v-else-if="ft === 'phaseEndDate'">{{ getPhaseEndDate }}</span>
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
                <div class="part3 d-flex justify-content-center">
                  <b-button
                    variant="flat-primary"
                    @click="toggleEditProgramDrawerOpen(item1, 'project')"
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
              <div v-if="openedPj === index1">
                <div
                  v-for="(item2, index2) in item1.children"
                  :key="index2"
                >
                  <div
                    class="portf-row portf-table-row font-14 border-bottom-dm"
                    :class="{ 'inner-sdw': index2 === 0 }"
                  >
                    <div
                      class="part1 portf-bold pl-2 ml-3"
                      style="padding-top:7px"
                    >
                      {{ item2.title }}
                    </div>
                    <div class="part2">
                      <div
                        v-for="(ft, fi) in c_fields"
                        :key="fi"
                        class="data-child mr-1"
                        :style="`width:${100 / c_fields.length}%`"
                      >
                        <div v-if="demandTableEditable">
                          <div
                            v-if="ft === 'engaged' || ft === 'realestimated' || ft === 'spent' || ft === 'phase' || ft === 'head_program_diretion' || ft === 'program_director' || ft === 'project_manager'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ formatCurrency(item2[ft]) }}
                          </div>
                          <v-select
                            v-else-if="ft === 'priority'"
                            v-model="item2[ft]"
                            :options="priorities"
                            outlined
                          />
                          <b-form-input
                            v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                            v-model="item2[ft]"
                            style="text-align:end"
                          />
                          <b-input-group v-else>
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
                        </div>
                        <div v-else>
                          <div
                            v-if="ft === 'priority'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ priorities[item2[ft] - 1] }}
                          </div>
                          <div
                            v-else-if="ft === 'deadline' || ft === 'phaseStartDate' || ft === 'phaseEndDate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ dateFormat(item2[ft]) }}
                          </div>
                          <div
                            v-else-if="ft === 'winrate'"
                            class="mr-1"
                            style="margin-top:6px;"
                          >
                            {{ getSelectedWinRate }}
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
                    <div class="part3 d-flex justify-content-center">
                      <b-button
                        variant="flat-primary"
                        @click="toggleEditProgramDrawerOpen(item2, 'subproject')"
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
      <div v-if="editProgramDrawerOpen">
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
  BButton, BCard, BFormInput, BRow, BCol, BProgress, BProgressBar, BInputGroup, BInputGroupAppend, BInputGroupText
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
    CreateNewProgramDrawer
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
      priorities: ['Highest', 'High', 'Low', 'Lowest'],
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
      return this.$store.state.portfolioState.demandTableEditable
    },
    c_data() {
      if (this.data.children) {
        const ndt = this.data.children.map(t => {
          let budget = 0
          let engaged = 0
          let quote = 0
          let demand = 0
          let realEstimated = 0
          let authorized = 0
          let spent = 0
          if (t.children) {
            t.children.map(t1 => {
              if (t1.children) {
                t1.children.map(t2 => {
                  budget += parseInt(t2.budget ? t2.budget : 0, 10)
                  engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                  quote += parseInt(t2.quote ? t2.quote : 0, 10)
                  demand += parseInt(t2.demand ? t2.demand : 0, 10)
                  realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                  authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                  spent += parseInt(t2.spent ? t2.spent : 0, 10)
                  return null
                })
              } else {
                budget += t1.budget
                engaged += t1.engaged
                quote += t1.quote
                demand += t1.demand
                realEstimated += t1.realEstimated
                authorized += t1.authorized
                spent += t1.spent
              }
              budget += parseInt(t1.budget ? t1.budget : 0, 10)
              engaged += parseInt(t1.engaged ? t1.engaged : 0, 10)
              quote += parseInt(t1.quote ? t1.quote : 0, 10)
              demand += parseInt(t1.demand ? t1.demand : 0, 10)
              realEstimated += parseInt(t1.realEstimated ? t1.realEstimated : 0, 10)
              authorized += parseInt(t1.authorized ? t1.authorized : 0, 10)
              spent += parseInt(t1.spent ? t1.spent : 0, 10)
              return null
            })
          } else {
            budget = t.budget
            engaged = t.engaged
            quote = t.quote
            demand = t.demand
            realEstimated = t.realEstimated
            authorized = t.authorized
            spent = t.spent
          }
          const nd = { ...t }
          nd.budget = budget
          nd.engaged = engaged
          nd.quote = quote
          nd.demand = demand
          nd.realEstimated = realEstimated
          nd.authorized = authorized
          nd.spent = spent
          return nd
        })
        return ndt
      }
      return []
    },
    c_totalBudget() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.budget ? parseInt(t.budget, 10) : 0
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
      this.budgetDrawerOpen = !this.budgetDrawerOpen
    },
    toggleEditPortfolioDrawerOpen(item) {
      this.selectedPortfolio = item
      this.editPortfolioDrawerOpen = !this.editPortfolioDrawerOpen
    },
    toggleEditProgramDrawerOpen(item, type) {
      this.selectedObject = item
      this.selectedType = type
      this.editProgramDrawerOpen = !this.editProgramDrawerOpen
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
