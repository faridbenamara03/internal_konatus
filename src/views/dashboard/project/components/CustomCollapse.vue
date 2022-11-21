<template>
  <div class="d-flex">
    <div v-for="(team, index1) in teams" :key="index1" class="project-team no-border">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          {{ team.title }}<span class="color-theme-disabled" style="margin-left:5px">(16 hours)</span>
        </p>
        <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
          Select All
        </b-button>
      </div>
      <app-collapse class="my-2">
          <div class="d-flex" style="justify-content:space-between" @click="toggleOpen">
            <div>{{ team.activities.length }} work element</div>
            <div>
              <feather-icon :icon="'ChevronDownIcon'" size="16" class="mr-1" />
            </div>
          </div>
          <div class="phase-box mb-1" v-for="(activity, index) in team.activities" :key="index">
            <div class="bar" :style="`background:${cardBarColorArr[index1]}`" />
            <div class="phase-box--content">
              <div class="d-flex">
                <div style="width:calc(100% - 20px);cursor:pointer"
                  @click="() => handleActivityDetails(activity, team)">
                  <p class="title">
                    {{ activity.title }}
                  </p>
                </div>
                <div style="width:20px">
                  <b-form-checkbox v-model="activity.isSelected" />
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
          <b-button variant="flat-secondary" class="phase-btn">
            <feather-icon icon="PlusIcon" />
            <span>Insert New Work Element</span>
          </b-button>
        </app-collapse-item>
      </app-collapse>
    </div>
  </div>
</template>

<script>
import { BButton, BFormCheckbox } from 'bootstrap-vue'
import { isEmpty } from "@/views/utils"

export default {
  components: {
    BFormCheckbox,
    BButton
  },
  props: {
    teams: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cardBarColorArr: [
        '#D68232', '#FFEA2C', '#d63232', '#28C76F', '#00CFE8', '#6610F2'
      ],
      isOpen: false
    }
  },
  computed: {},
  methods: {
    isUN(v) {
      return isEmpty(v)
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
    }
  },
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
