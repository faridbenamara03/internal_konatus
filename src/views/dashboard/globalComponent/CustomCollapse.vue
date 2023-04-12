<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <p class="text-capitalize m-0 team-name--text">
        {{ team.title }}<span class="color-theme-disabled" style="margin-left:5px">(16 hours)</span>
      </p>
      <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
        Select All
      </b-button>
    </div>
    <div class="my-2">
      <div class="d-flex mt-1 mb-1" style="justify-content:space-between;font-weight:bold;cursor:pointer"
        @click="toggleOpen">
        <div>{{ team.activities.length }} work element</div>
        <div>
          <feather-icon :icon="isOpen ? 'ChevronDownIcon' : 'ChevronUpIcon'" size="16" class="mr-1" />
        </div>
      </div>
      <template v-if="isOpen">
        <div class="phase-box mb-1 position-relative" v-for="(activity, jn) in team.activities" :key="jn">
          <div b-tooltip.hover title="Quote requested" v-if="requestedElement.indexOf(activity.activityId) > -1" :id="`tooltip-target-${jn}`"
            style="
              box-sizing: border-box;
              border-top: solid 11px rgb(228, 255, 0);
              border-right: solid 11px rgb(228, 255, 0);
              border-top-right-radius: 5px;
              border-left: solid 11px transparent;
              border-bottom: solid 11px transparent;
              position:absolute;
              top:0;
              right:0;
            " />
          <div class="bar" :style="`background:${cardBarColorArr[index]}`" />
          <div class="phase-box--content">
            <div class="d-flex">
              <div style="width:calc(100% - 20px);cursor:pointer" @click="() => handleActivityDetails(activity, team)">
                <p class="title">
                  {{ activity.title }}
                </p>
              </div>
              <div style="width:20px">
                <b-form-checkbox @change="e => onCheckChange(e, activity.activityId)" v-model="activity.isSelected" />
              </div>
            </div>
            <p class="muted">
              {{ activity.activityId }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon icon="BarChartIcon" />
                <span>{{ activity.priority }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ activity.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <div v-else :style="`position:relative;margin-bottom:${156 + 15 * (team.activities.length - 1)}px`">
        <div class="phase-box mb-1 w-100"
          :style="`position:absolute;top:${15 * jn}px;z-index:${1000 - jn};box-shadow: 0px 2px 3px #161d31;`"
          v-for="(activity, jn) in team.activities" :key="jn">
          <div b-tooltip.hover title="Quote requested" v-if="requestedElement.indexOf(activity.activityId) > -1" :id="`tooltip-target-${jn}-1`"
            style="
              box-sizing: border-box;
              border-top: solid 11px rgb(228, 255, 0);
              border-right: solid 11px rgb(228, 255, 0);
              border-top-right-radius: 5px;
              border-left: solid 11px transparent;
              border-bottom: solid 11px transparent;
              position:absolute;
              top:0;
              right:0;
            " />
          <div class="bar" :style="`background:${cardBarColorArr[index]}`" />
          <div class="phase-box--content">
            <div class="d-flex">
              <div style="width:calc(100% - 20px);cursor:pointer" @click="() => handleActivityDetails(activity, team)">
                <p class="title">
                  {{ activity.title }}
                </p>
              </div>
              <div style="width:20px">
                <b-form-checkbox @change="e => onCheckChange(e, activity.activityId)" v-model="activity.isSelected" />
              </div>
            </div>
            <p class="muted">
              {{ activity.activityId }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon icon="BarChartIcon" />
                <span>{{ activity.priority }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ activity.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button v-b-modal.modal-add-new-task-program variant="flat-secondary" class="phase-btn" @click="handleInsertNewWorkElement">
        <feather-icon icon="PlusIcon" />
        <span>Insert New Work Element</span>
      </b-button>
    </div>
  </div>
</template>

<script>
import { BButton, BFormCheckbox, BTooltip } from 'bootstrap-vue'
import { isEmpty } from "@/views/utils"

export default {
  components: {
    BFormCheckbox,
    BButton,
  },
  props: {
    team: {
      type: Object,
      default: () => { },
    },
    index: {
      type: Number,
    },
    index0: {
      type: Number,
    },
    state: {
      type: String,
    }
  },
  data() {
    return {
      cardBarColorArr: [
        '#D68232', '#FFEA2C', '#d63232', '#28C76F', '#00CFE8', '#6610F2'
      ],
      isOpen: false,
    }
  },
  computed: {
    requestedElement() {
      return this.$store.state.globalState.requestedElement
    }
  },
  methods: {
    isUN(v) {
      return isEmpty(v)
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    handleActivityDetails(phase, team) {
      this.$emit('openDetailActivity', phase, team)
    },
    onCheckChange(e, activityId) {
      this.$emit('selectActivity', e, activityId)
    },
    handleInsertNewWorkElement() {
      this.$store.commit('globalState/SET_INDEX_FOR_INSERT_NEW_ELEMENT', { index0: this.index0, index: this.index, state: this.state })
    }
  },
  directives: {
    'b-tooltip': BTooltip
  }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio-control.scss";
@import "~@core/scss/base/components/variables-dark";

.color-theme-disabled {
  color: $theme-dark-table-active-bg;
}

.background-theme-grey {
  background-color: $theme-dark-table-active-bg;
}
</style>
