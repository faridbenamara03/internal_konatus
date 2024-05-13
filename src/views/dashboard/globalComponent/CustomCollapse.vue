<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <p class="text-capitalize m-0 team-name--text">
        {{ team.title }}<span
          class="color-theme-disabled"
          style="margin-left:5px"
        >(16 hours)</span>
      </p>
      <b-button
        variant="flat-primary"
        @click="() => handleCheckAll(team)"
      >
        Select All
      </b-button>
    </div>
    <div class="my-2">
      <div
        class="d-flex mt-1 mb-1"
        style="justify-content:space-between;font-weight:bold;cursor:pointer"
        @click="toggleOpen"
      >
        <div>{{ team.activities.length }} work element</div>
        <div>
          <feather-icon
            :icon="isOpen ? 'ChevronDownIcon' : 'ChevronUpIcon'"
            size="16"
            class="mr-1"
          />
        </div>
      </div>
      <template v-if="isOpen">
        <div
          v-for="(activity, jn) in team.activities"
          :key="jn"
          class="phase-box mb-1 position-relative"
        >
          <div
            v-if="requestedElement.indexOf(activity.id) > -1"
            :id="`tooltip-target-${jn}`"
            b-tooltip.hover
            title="Quote requested"
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
            "
          />
          <div
            class="bar"
            :style="`background:${cardBarColorArr[index]}`"
          />
          <div class="phase-box--content">
            <div class="d-flex" style="width: 100%; justify-content: space-between;">
              <div
                style="cursor:pointer"
                @click="() => handleActivityDetails(activity, team)"
              >
                <p
                  class="title"
                  :style="`color:${parseInt(activity.acc) === 100 ? 'gray' : parseInt(activity.acc) > 0 && parseInt(activity.acc) < 100 ? '#66ffff' : '#ffffff'}`">
                  {{ activity.title }}
                </p>
              </div>
              <div style="position: relative;top: -3px;">
                <feather-icon
                  v-if="parseInt(activity.acc) > 0 && parseInt(activity.acc) < 100"
                  style="color: #7167E8"
                  icon="ClockIcon"
                />
              </div>
              <div style="position: relative;top: -3px;">
                <feather-icon
                  v-if="parseInt(activity.acc) === 100"
                  style="color: #686D7C"
                  icon="CheckCircleIcon"
                />
              </div>
              <div class="d-flex">
                <feather-icon
                  v-if="parseInt(activity.acc) !== 100"
                  icon="MailIcon"
                />
                <div style="width:20px;">
                  <b-form-checkbox
                    v-model="activity.isSelected"
                    @change="e => onCheckChange(e, activity.id)"
                  />
                </div>
              </div>
            </div>
            <p class="muted">
              {{ activity.id }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon icon="BarChartIcon" />
                <span>{{ priorityOptions[activity.priority - 1] }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ activity.gate }}</span>
              </div>
              <feather-icon
                icon="Trash2Icon"
                @click="() => handleDeleteActivity(activity)"
              />
            </div>
            <div class="d-flex" style="width: 95%; justify-content: end;">
              <p>{{ activity.team_label }}</p>
            </div>
          </div>
        </div>
      </template>
      <div
        v-else
        :style="`position:relative;margin-bottom:${156 + 15 * (team.activities.length - 1)}px`"
      >
        <div
          v-for="(activity, jn) in team.activities"
          :key="jn"
          class="phase-box mb-1 w-100"
          :style="`position:absolute;top:${15 * jn}px;z-index:${1000 - jn};box-shadow: 0px 2px 3px #161d31;`"
        >
          <div
            v-if="requestedElement.indexOf(activity.id) > -1"
            :id="`tooltip-target-${jn}-1`"
            b-tooltip.hover
            title="Quote requested"
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
            "
          />
          <div
            class="bar"
            :style="`background:${cardBarColorArr[index]}`"
          />
          <div class="phase-box--content">
            <div class="d-flex" style="width: 100%; justify-content: space-between;">
              <div
                style="cursor:pointer"
                @click="() => handleActivityDetails(activity, team)"
              >
                <p
                  class="title"
                  :style="`color:${parseInt(activity.acc) === 100 ? 'gray' : parseInt(activity.acc) > 0 && parseInt(activity.acc) < 100 ? '#66ffff' : '#ffffff'}`">
                  {{ activity.title }}
                </p>
              </div>
              <div style="position: relative;top: -3px;">
                <feather-icon
                  v-if="parseInt(activity.acc) > 0 && parseInt(activity.acc) < 100"
                  style="color: #7167E8"
                  icon="ClockIcon"
                />
              </div>
              <div style="position: relative;top: -3px;">
                <feather-icon
                  v-if="parseInt(activity.acc) === 100"
                  style="color: #686D7C"
                  icon="CheckCircleIcon"
                />
              </div>
              <div class="d-flex">
                <feather-icon
                  v-if="parseInt(activity.acc) !== 100"
                  icon="MailIcon"
                />
                <div style="width:20px;">
                  <b-form-checkbox
                    v-model="activity.isSelected"
                    @change="e => onCheckChange(e, activity.id)"
                  />
                </div>
              </div>
            </div>
            <p class="muted">
              {{ activity.id }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon icon="BarChartIcon" />
                <span>{{ priorityOptions[activity.priority - 1] }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ activity.gate }}</span>
              </div>
              <feather-icon
                icon="Trash2Icon"
                @click="() => handleDeleteActivity(activity)"
              />
            </div>
            <div class="d-flex" style="width: 95%; justify-content: end;">
              <p>{{ activity.team_label }}</p>
            </div>
          </div>
        </div>
      </div>
      <b-button
        v-b-modal.modal-add-new-task-program
        variant="flat-secondary"
        class="phase-btn"
        @click="handleInsertNewWorkElement"
      >
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
  directives: {
    'b-tooltip': BTooltip
  },
  props: {
    team: {
      type: Object,
      default: () => { },
    },
    teamttle: {
      type: String,
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
      priorityOptions: this.$store.state.globalState.priorityOptions,
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
    onCheckChange(e, id) {
      this.$emit('selectActivity', e, id)
    },
    async handleDeleteActivity(activity) {
      try {
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
          await this.$store.dispatch('globalState/delete_work_element', { id: activity.id })
          await this.$store.dispatch('globalState/load_org_data')
          const data = this.$store.state.globalState.selectedNavObj
          await this.$store.dispatch('globalState/get_from_selected_nav_id', { data })
        }
      } catch (error) {
        console.error('Error in handleDeleteActivity:', error)
      }
    },
    handleInsertNewWorkElement() {
      let teamt = ""
      if (!this.teamttle) {
        teamt = this.team.title
      } else {
        teamt = this.teamttle
      }
      this.$store.commit('globalState/SET_INDEX_FOR_INSERT_NEW_ELEMENT', {
        index0: this.index0, index: this.index, state: this.state, team: teamt
      })
    }
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
