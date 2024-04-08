<template>
  <div
    v-if="reportingState === 'plan'"
    class="report"
  >
    <div class="reporting-side">
      <div>
        <div
          class="report-block--head"
          style="margin-top:50px;"
        >
          <p class="m-0 text-uppercase">
            {{ itemsForReporting === undefined || itemsFormReporting === null ? '' : itemsForReporting.title }}
          </p>
        </div>
        <div v-if="itemsForReporting !== undefined && navType === 'portfolio'">
          <div
            v-for="(item1, index1) in itemsForReporting.children"
            :key="index1"
          >
            <div
              class="report-block--head"
              style="cursor:pointer"
              @click="onCollapseClick(index1)"
            >
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item1.title }}
              </p>
            </div>
            <template v-if="item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  class="report-block-child"
                  @click="onChildCollapseClick(index2)"
                >
                  <feather-icon
                    v-if="item2 !== undefined && item2.children"
                    :icon="childCollapse === index2 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  <p class="m-0 text-uppercase text-overflow-ellipse">
                    {{ item2.title }}
                  </p>
                </div>
                <template v-if="item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                    class="report-block-child"
                  >
                    <p class="m-0 ml-2 text-uppercase text-overflow-ellipse">
                      {{ item3.title }}
                    </p>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
        <div v-else-if="itemsForReporting !== undefined && navType === 'company'">
          <div
            v-for="(item1, index1) in itemsForReporting.children"
            :key="index1"
          >
            <div
              class="report-block--head"
              style="cursor:pointer"
              @click="onCollapseClick(index1)"
            >
              <feather-icon
                v-if="item1 !== undefined && item1.children"
                :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item1.title }}
              </p>
            </div>
            <template v-if="item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  style="cursor:pointer;height:77px"
                  class="report-block-child"
                  @click="onChildCollapseClick(index2)"
                >
                  <feather-icon
                    v-if="item2 !== undefined && item2.children"
                    :icon="childCollapse === index2 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  <p class="m-0 text-uppercase text-overflow-ellipse">
                    {{ item2.title }}
                  </p>
                </div>
                <template v-if="item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                  >
                    <div
                      class="report-block-child"
                      style="height:77px"
                      @click="onSubChildCollapseClick(index3)"
                    >
                      <feather-icon
                        v-if="item2 !== undefined && item2.children"
                        :icon="childCollapse === index2 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                        size="16"
                        class="mr-1"
                      />
                      <p class="ml-1 text-uppercase text-overflow-ellipse">
                        {{ item3.title }}
                      </p>
                    </div>
                    <template v-if="item3 !== undefined && item3.children && subChildCollapse === index3">
                      <div
                        v-for="(item4, index4) in item3.children"
                        :key="index4"
                        class="report-block-child"
                        style="height:77px"
                      >
                        <p class="ml-2 text-uppercase text-overflow-ellipse">
                          {{ item4.title }}
                        </p>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <div />
        <div class="reporting-content-header--badge">
          <b-button variant="flat-dark">
            <b-icon
              icon="diamond-fill"
              variant="success"
            />
            <b-icon
              icon="triangle-fill"
              class="rotate-icon"
              variant="success"
            />
            Milestones
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-demand"
          >
            <b-icon icon="circle-fill" />
            Demand
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-engage"
          >
            <b-icon icon="circle-fill" />
            Engaged
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-estimate"
          >
            <b-icon icon="circle-fill" />
            Real Estimated
          </b-button>
        </div>
      </div>
      <div class="reporting-content--body">
        <!-- <div
          :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + 400 + 'px;top:122px;z-index:222'"
        >
          <div
            class="rounded-circle"
            style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"
          />
        </div> -->
        <div
          class="timeline-list"
          :style="`width:${windowWidth / 2 }px`"
        >
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            class="date"
            :class="{ 'active': isToday(date) }"
          >
            <p
              v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true"
              class="month"
            >
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
        <div v-if="itemsForReporting !== undefined && navType === 'portfolio'">
          <div
            v-for="(item1, index1) in itemsForReporting.children"
            :key="index1"
          >
            <div
              v-if="onOptimiseIndex() === 'optimize'"
              class="w-100"
              style="height:77px"
            >
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
              >
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 0, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 0, false) > 0"
                    :type="0"
                    :width1="getValue(item1, 0, false)"
                    :width2="397 - getStartPadding(item1, 0, false)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 1, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 1, false) > 0"
                    :type="1"
                    :width1="getValue(item1, 1, false)"
                    :width2="397 - getStartPadding(item1, 1, false)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 2, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 2, false) > 0"
                    :type="2"
                    :width1="getValue(item1, 2, false)"
                    :width2="397 - getStartPadding(item1, 2, false)"
                  />
                </div>
              </b-card>
            </div>
            <template v-if="onOptimiseIndex() === 'optimize' && item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  style="height:51px"
                  class="w-100"
                >
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
                  >
                    <div :style="`padding-left:${getStartPadding(item2, 0, true)}px`">
                      <ProjectProgressBar
                        :type="0"
                        :widths="getValue(item2, 0, true)"
                        :width4="getStartPadding(item2, 0, true) > 396 ? 396 : getStartPadding(item2, 0, true)"
                      />
                    </div>
                    <div :style="`padding-left:${getStartPadding(item2, 1, true)}px`">
                      <ProjectProgressBar
                        :type="1"
                        :widths="getValue(item2, 1, true)"
                        :width4="getStartPadding(item2, 1, true) > 396 ? 396 : getStartPadding(item2, 1, true)"
                      />
                    </div>
                    <div :style="`padding-left:${getStartPadding(item2, 2, true)}px`">
                      <ProjectProgressBar
                        :type="2"
                        :widths="getValue(item2, 2, true)"
                        :width4="getStartPadding(item2, 2, true) > 396 ? 396 : getStartPadding(item2, 2, true)"
                      />
                    </div>
                  </b-card>
                </div>
                <template v-if="onOptimiseIndex() === 'optimize' && item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                    style="height:51px"
                    class="w-100"
                  >
                    <b-card
                      no-body
                      class="d-flex flex-column justify-content-around"
                      style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
                    >
                      <div :style="`padding-left:${getStartPadding(item3, 0, true)}px`">
                        <ProjectProgressBar
                          :type="0"
                          :widths="getValue(item3, 0, true)"
                          :width4="getStartPadding(item3, 0, true) > 396 ? 396 : getStartPadding(item3, 0, true)"
                        />
                      </div>
                      <div :style="`padding-left:${getStartPadding(item3, 1, true)}px`">
                        <ProjectProgressBar
                          :type="1"
                          :widths="getValue(item3, 1, true)"
                          :width4="getStartPadding(item3, 1, true) > 396 ? 396 : getStartPadding(item3, 1, true)"
                        />
                      </div>
                      <div :style="`padding-left:${getStartPadding(item3, 2, true)}px`">
                        <ProjectProgressBar
                          :type="2"
                          :widths="getValue(item3, 2, true)"
                          :width4="getStartPadding(item3, 2, true) > 396 ? 396 : getStartPadding(item3, 2, true)"
                        />
                      </div>
                    </b-card>
                  </div>
                </template>
              </div>
            </template>

            <div
              v-if="onOptimiseIndex() === 'origin'"
              class="w-100"
              style="height:77px"
            >
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
              >
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 0, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 0, false) > 0"
                    :type="0"
                    :width1="getValue(item1, 0, false)"
                    :width2="397 - getStartPadding(item1, 0, false)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 1, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 1, false) > 0"
                    :type="1"
                    :width1="getValue(item1, 1, false)"
                    :width2="397 - getStartPadding(item1, 1, false)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 2, false)}px`">
                  <ProgramProgressBar
                    v-if="getValue(item1, 2, false) > 0"
                    :type="2"
                    :width1="getValue(item1, 2, false)"
                    :width2="397 - getStartPadding(item1, 2, false)"
                  />
                </div>
              </b-card>
            </div>
            <template v-if="onOptimiseIndex() === 'origin' && item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  style="height:51px"
                  class="w-100"
                >
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
                  >
                    <div :style="`padding-left:${getStartPadding(item2, 0, true)}px`">
                      <ProjectProgressBar
                        :type="0"
                        :widths="getValue(item2, 0, true)"
                        :width4="getStartPadding(item2, 0, true) > 396 ? 396 : getStartPadding(item2, 0, true)"
                      />
                    </div>
                    <div :style="`padding-left:${getStartPadding(item2, 1, true)}px`">
                      <ProjectProgressBar
                        :type="1"
                        :widths="getValue(item2, 1, true)"
                        :width4="getStartPadding(item2, 1, true) > 396 ? 396 : getStartPadding(item2, 1, true)"
                      />
                    </div>
                    <div :style="`padding-left:${getStartPadding(item2, 2, true)}px`">
                      <ProjectProgressBar
                        :type="2"
                        :widths="getValue(item2, 2, true)"
                        :width4="getStartPadding(item2, 2, true) > 396 ? 396 : getStartPadding(item2, 2, true)"
                      />
                    </div>
                  </b-card>
                </div>
                <template v-if="onOptimiseIndex() === 'origin' && item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                    style="height:51px"
                    class="w-100"
                  >
                    <b-card
                      no-body
                      class="d-flex flex-column justify-content-around"
                      style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
                    >
                      <div :style="`padding-left:${getStartPadding(item3, 0, true)}px`">
                        <ProjectProgressBar
                          :type="0"
                          :widths="getValue(item3, 0, true)"
                          :width4="getStartPadding(item3, 0, true) > 396 ? 396 : getStartPadding(item3, 0, true)"
                        />
                      </div>
                      <div :style="`padding-left:${getStartPadding(item3, 1, true)}px`">
                        <ProjectProgressBar
                          :type="1"
                          :widths="getValue(item3, 1, true)"
                          :width4="getStartPadding(item3, 1, true) > 396 ? 396 : getStartPadding(item3, 1, true)"
                        />
                      </div>
                      <div :style="`padding-left:${getStartPadding(item3, 2, true)}px`">
                        <ProjectProgressBar
                          :type="2"
                          :widths="getValue(item3, 2, true)"
                          :width4="getStartPadding(item3, 2, true) > 396 ? 396 : getStartPadding(item3, 2, true)"
                        />
                      </div>
                    </b-card>
                  </div>
                </template>
              </div>
            </template>

          </div>
        </div>
        <div v-else-if="itemsForReporting !== undefined && navType === 'company'">
          <div
            v-for="(item1, index1) in itemsForReporting.children"
            :key="index1"
          >
            <div
              v-if="onOptimiseIndex() === 'optimize'"
              class="w-100"
              style="height:77px"
            />
            <template v-if="onOptimiseIndex() === 'optimize' && item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  style="height:77px"
                  class="w-100"
                >
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                  >
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 0, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 0, false) > 0"
                        :type="0"
                        :width1="getValue(item2, 0, false)"
                        :width2="397 - getStartPadding(item2, 0, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 1, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 1, false) > 0"
                        :type="1"
                        :width1="getValue(item2, 1, false)"
                        :width2="397 - getStartPadding(item2, 1, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 2, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 2, false) > 0"
                        :type="2"
                        :width1="getValue(item2, 2, false)"
                        :width2="397 - getStartPadding(item2, 2, false)"
                      />
                    </div>
                  </b-card>
                </div>
                <template v-if="onOptimiseIndex() === 'optimize' && item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                  >
                    <div
                      style="height:77px"
                      class="w-100"
                    >
                      <b-card
                        no-body
                        class="d-flex flex-column justify-content-around"
                        style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                      >
                        <div :style="`padding-left:${getStartPadding(item3, 0, true)}px`">
                          <ProjectProgressBar
                            :type="0"
                            :widths="getValue(item3, 0, true)"
                            :width4="getStartPadding(item3, 0, true) > 396 ? 396 : getStartPadding(item3, 0, true)"
                          />
                        </div>
                        <div :style="`padding-left:${getStartPadding(item3, 1, true)}px`">
                          <ProjectProgressBar
                            :type="1"
                            :widths="getValue(item3, 1, true)"
                            :width4="getStartPadding(item3, 1, true) > 396 ? 396 : getStartPadding(item3, 1, true)"
                          />
                        </div>
                        <div :style="`padding-left:${getStartPadding(item3, 2, true)}px`">
                          <ProjectProgressBar
                            :type="2"
                            :widths="getValue(item3, 2, true)"
                            :width4="getStartPadding(item3, 2, true) > 396 ? 396 : getStartPadding(item3, 2, true)"
                          />
                        </div>
                      </b-card>
                    </div>
                    <template v-if="onOptimiseIndex() === 'optimize' && item3 !== undefined && item3.children && subChildCollapse === index3">
                      <div
                        v-for="(item4, index4) in item3.children"
                        :key="index4"
                        style="height:77px"
                        class="w-100"
                      >
                        <b-card
                          no-body
                          class="d-flex flex-column justify-content-around"
                          style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                        >
                          <div :style="`padding-left:${getStartPadding(item4, 0, true)}px`">
                            <ProjectProgressBar
                              :type="0"
                              :widths="getValue(item4, 0, true)"
                              :width4="getStartPadding(item4, 0, true) > 396 ? 396 : getStartPadding(item4, 0, true)"
                            />
                          </div>
                          <div :style="`padding-left:${getStartPadding(item4, 1, true)}px`">
                            <ProjectProgressBar
                              :type="1"
                              :widths="getValue(item4, 1, true)"
                              :width4="getStartPadding(item4, 1, true) > 396 ? 396 : getStartPadding(item4, 1, true)"
                            />
                          </div>
                          <div :style="`padding-left:${getStartPadding(item4, 2, true)}px`">
                            <ProjectProgressBar
                              :type="2"
                              :widths="getValue(item4, 2, true)"
                              :width4="getStartPadding(item4, 2, true) > 396 ? 396 : getStartPadding(item4, 2, true)"
                            />
                          </div>
                        </b-card>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </template>
            <div
              v-if="onOptimiseIndex() === 'origin'"
              class="w-100"
              style="height:77px"
            />
            <template v-if="onOptimiseIndex() === 'origin' && item1 !== undefined && item1.children && openedCollapse === index1">
              <div
                v-for="(item2, index2) in item1.children"
                :key="index2"
              >
                <div
                  style="height:77px"
                  class="w-100"
                >
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                  >
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 0, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 0, false) > 0"
                        :type="0"
                        :width1="getValue(item2, 0, false)"
                        :width2="397 - getStartPadding(item2, 0, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 1, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 1, false) > 0"
                        :type="1"
                        :width1="getValue(item2, 1, false)"
                        :width2="397 - getStartPadding(item2, 1, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 2, false)}px`">
                      <ProgramProgressBar
                        v-if="getValue(item2, 2, false) > 0"
                        :type="2"
                        :width1="getValue(item2, 2, false)"
                        :width2="397 - getStartPadding(item2, 2, false)"
                      />
                    </div>
                  </b-card>
                </div>
                <template v-if="onOptimiseIndex() === 'origin' && item2 !== undefined && item2.children && childCollapse === index2">
                  <div
                    v-for="(item3, index3) in item2.children"
                    :key="index3"
                  >
                    <div
                      style="height:77px"
                      class="w-100"
                    >
                      <b-card
                        no-body
                        class="d-flex flex-column justify-content-around"
                        style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                      >
                        <div :style="`padding-left:${getStartPadding(item3, 0, true)}px`">
                          <ProjectProgressBar
                            :type="0"
                            :widths="getValue(item3, 0, true)"
                            :width4="getStartPadding(item3, 0, true) > 396 ? 396 : getStartPadding(item3, 0, true)"
                          />
                        </div>
                        <div :style="`padding-left:${getStartPadding(item3, 1, true)}px`">
                          <ProjectProgressBar
                            :type="1"
                            :widths="getValue(item3, 1, true)"
                            :width4="getStartPadding(item3, 1, true) > 396 ? 396 : getStartPadding(item3, 1, true)"
                          />
                        </div>
                        <div :style="`padding-left:${getStartPadding(item3, 2, true)}px`">
                          <ProjectProgressBar
                            :type="2"
                            :widths="getValue(item3, 2, true)"
                            :width4="getStartPadding(item3, 2, true) > 396 ? 396 : getStartPadding(item3, 2, true)"
                          />
                        </div>
                      </b-card>
                    </div>
                    <template v-if="onOptimiseIndex() === 'origin' && item3 !== undefined && item3.children && subChildCollapse === index3">
                      <div
                        v-for="(item4, index4) in item3.children"
                        :key="index4"
                        style="height:77px"
                        class="w-100"
                      >
                        <b-card
                          no-body
                          class="d-flex flex-column justify-content-around"
                          style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
                        >
                          <div :style="`padding-left:${getStartPadding(item4, 0, true)}px`">
                            <ProjectProgressBar
                              :type="0"
                              :widths="getValue(item4, 0, true)"
                              :width4="getStartPadding(item4, 0, true) > 396 ? 396 : getStartPadding(item4, 0, true)"
                            />
                          </div>
                          <div :style="`padding-left:${getStartPadding(item4, 1, true)}px`">
                            <ProjectProgressBar
                              :type="1"
                              :widths="getValue(item4, 1, true)"
                              :width4="getStartPadding(item4, 1, true) > 396 ? 396 : getStartPadding(item4, 1, true)"
                            />
                          </div>
                          <div :style="`padding-left:${getStartPadding(item4, 2, true)}px`">
                            <ProjectProgressBar
                              :type="2"
                              :widths="getValue(item4, 2, true)"
                              :width4="getStartPadding(item4, 2, true) > 396 ? 396 : getStartPadding(item4, 2, true)"
                            />
                          </div>
                        </b-card>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <update-confirm-modal @onUpdate="onUpdate" />
  </div>
  <div
    v-else-if="reportingState === 'cost'"
    style="width:100%"
  >
    <ReportingCostVue
      :data="itemsForReporting"
      :fields="costfields"
    />
  </div>
</template>

<script>
import {
  BButton,
  BCard,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import UpdateConfirmModal from '../modals/UpdateConfirmModal.vue'

export default {
  components: {
    BButton,
    BCard,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar,
    UpdateConfirmModal
  },
  props: {
    data: {
      type: Object,
      default: () => { }
    },
    reportingState: {
      type: String,
      default: () => ""
    },
    costfields: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reportingDates: [],
      openedCollapse: 0,
      childCollapse: 1,
      subChildCollapse: 0,
      navType: 'portfolio',
      windowWidth: window.innerWidth,
      itemsForReporting: 0,
      startGraphDate: moment('2024-01-01'),
      endGraphDate: moment('2024-12-31'),
    }
  },
  computed: {
    isOptimiseIndex() {
      return this.$store.state.globalState.optimizeStatus
    },
    // itemsForReporting() {
    //   return this.$store.state.globalState.portfolioReportingData
    // },
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  methods: {
    initializeData(data) {
      console.log("INITD:", data, "OTYPE:", this.navType, 'st:', this.$store.state.globalState.selectedFromDate)
      this.startGraphData = this.$store.state.globalState.selectedFromDate
      this.endGraphData = this.$store.state.globalState.selectedToDate
      const tempStartDate = this.startGraphData.clone()
      this.reportingDates = [tempStartDate.clone()]

      while (tempStartDate.add(1, 'days').diff(this.endGraphData) < 0) {
        this.reportingDates.push(tempStartDate.clone())
      }
      this.navType = this.$store.state.globalState.selectedNavObj.type
      this.itemsForReporting = this.$store.state.globalState.portfolioReportingData
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    getValue(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          result = []
          let phIndex = 0
          let totalWidth = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            let startMoment = 0
            let endMoment = 0
            if (type === 0) {
              startMoment = moment(phase.start_date_demand, 'YYYY-MM-DD').startOf('day')
              endMoment = moment(phase.end_date_demand, 'YYYY-MM-DD').startOf('day')
            } else if (type === 1) {
              startMoment = moment(phase.start_date_engage, 'YYYY-MM-DD').startOf('day')
              endMoment = moment(phase.end_date_engage, 'YYYY-MM-DD').startOf('day')
            } else if (type === 2) {
              startMoment = moment(phase.start_date_estimated, 'YYYY-MM-DD').startOf('day')
              endMoment = moment(phase.end_date_estimated, 'YYYY-MM-DD').startOf('day')
            }
            if (startMoment < this.startGraphData) startMoment = this.startGraphData
            if (endMoment > this.endGraphData) endMoment = this.endGraphData
            const duration = moment.duration(endMoment.diff(startMoment))
            if (duration.asDays() === 0) {
              result.push(24)
              totalWidth += 24
            } else {
              totalWidth += duration.asDays() * 24
              result.push(duration.asDays() * 24)
            }
            if (totalWidth > 1800) return result
            phIndex += 1
          }
        }
      } else {
        let startMoment = 0
        let endMoment = 0
        switch (type) {
          case 0:
            startMoment = moment(item.start_date_demand, 'YYYY-MM-DD').startOf('day')
            endMoment = moment(item.end_date_demand, 'YYYY-MM-DD').startOf('day')
            break
          case 1:
            startMoment = moment(item.start_date_engage, 'YYYY-MM-DD').startOf('day')
            endMoment = moment(item.end_date_engage, 'YYYY-MM-DD').startOf('day')
            break
          case 2:
            startMoment = moment(item.start_date_estimated, 'YYYY-MM-DD').startOf('day')
            endMoment = moment(item.end_date_estimated, 'YYYY-MM-DD').startOf('day')
            break
          default:
            break
        }
        if (startMoment < this.startGraphData) startMoment = this.startGraphData
        if (endMoment > this.endGraphData) endMoment = this.endGraphData
        const duration = moment.duration(endMoment.diff(startMoment))
        if (duration.asDays() === 0) {
          result = 24
        } else {
          result = duration.asDays() * 24
        }
      }
      return result
    },
    getStartPadding(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          const pstarts = []
          let phIndex = 0
          let startMoment
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            if (type === 0) {
              startMoment = moment(phase.start_date_demand, 'YYYY-MM-DD').startOf('day')
            } else if (type === 1) {
              startMoment = moment(phase.start_date_engage, 'YYYY-MM-DD').startOf('day')
            } else if (type === 2) {
              startMoment = moment(phase.start_date_estimated, 'YYYY-MM-DD').startOf('day')
            }
            pstarts.push(startMoment)
            phIndex += 1
          }
          const pStartMoment = moment.min(pstarts)
          const firstMoment = moment(this.reportingDates[0], 'YYYY-MM-DD')
          const duration = pStartMoment > firstMoment ? (moment.duration(pStartMoment.diff(firstMoment)).asDays()) : 0
          const pd = duration * 24
          result = pd
        }
      } else {
        let startMoment
        switch (type) {
          case 0:
            startMoment = moment(item.start_date_demand, 'YYYY-MM-DD')
            break
          case 1:
            startMoment = moment(item.start_date_engage, 'YYYY-MM-DD')
            break
          case 2:
            startMoment = moment(item.start_date_estimated, 'YYYY-MM-DD')
            break
          default:
            break
        }
        const firstMoment = moment(this.reportingDates[0], 'YYYY-MM-DD')
        const duration = startMoment > firstMoment ? (moment.duration(startMoment.diff(firstMoment)).asDays()) : 0
        result = duration * 24
      }
      return result
    },
    onOptimiseIndex() {
      this.isOptimiseIndex = this.$store.state.globalState.optimizeStatus
      return this.isOptimiseIndex
    },
    randomTen(val1, val2) {
      return parseInt(Math.random() * val1, 10) + val2
    },
    largest(a, b, c, d) {
      return Math.max(a, b, c, d)
    },
    smallest(a, b, c, d) {
      return Math.min(a, b, c, d)
    },
    onCollapseClick(index) {
      if (this.openedCollapse === index) this.openedCollapse = -1
      else this.openedCollapse = index
    },
    onChildCollapseClick(index) {
      if (this.childCollapse === index) this.childCollapse = -1
      else this.childCollapse = index
    },
    onSubChildCollapseClick(index) {
      if (this.subChildCollapse === index) this.subChildCollapse = -1
      else this.subChildCollapse = index
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
      this.$refs.portfolio_reporting_plan_update.hide()
    },
    onUpdate() {
      this.dta = [
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
      ]
      this.paddingV = [
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
      ]
      this.paddingV1 = [
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
      ]

      this.$emit('update-clicked')
      // this.$refs.portfolio_reporting_plan_update.hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}</style>
