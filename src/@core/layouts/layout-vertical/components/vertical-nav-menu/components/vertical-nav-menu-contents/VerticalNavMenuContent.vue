<template>
  <div class="control-nav">
    <div class="mt-1">
      <b-button-group class="button-group">
        <b-button
          @click="handleToggle(false)"
          id="jobs"
        >
          Job
        </b-button>
        <b-button
          @click="handleToggle(true)"
          class="active"
          id="teams"
        >
          Unit
        </b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import {
  BButton, BButtonGroup,
} from 'bootstrap-vue'

export default {
  name: 'VerticalNavMenuContent',
  components: {
    BButton,
    BButtonGroup,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: Boolean,
    searchQuery: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleToggle(state) {
      const url = window.location.href
      const pattern = /\/orgnization\/?/ // Update the pattern to match your specific requirement

      if (pattern.test(url)) {
        const parts = url.split('/')
        let unitId = ''
        // let teamId = ''
        if (parts.length > 5) {
          [unitId] = parts.slice(5)
        }
        // if (parts.length > 7) {
        //   [teamId] = parts.slice(7)
        // }

        // if (unitId !== '') {
          let baseUrl = ''
          if (state) {
            this.$store.commit('orgnizationState/Unit_Teams_UPDATE', 'unit')
            const jobsElement = document.getElementById('jobs')
            const teamsElement = document.getElementById('teams')
            if (jobsElement) {
              jobsElement.classList.remove('active')
            }
            if (teamsElement) {
              teamsElement.classList.add('active')
            }
          } else {
            this.$store.commit('orgnizationState/Unit_Teams_UPDATE', 'teams')
            const jobsElement = document.getElementById('jobs')
            const teamsElement = document.getElementById('teams')
            if (jobsElement) {
              jobsElement.classList.add('active')
            }
            if (teamsElement) {
              teamsElement.classList.remove('active')
            }
          }

          if (unitId !== '') {
            baseUrl = `/orgnization/unit/${unitId}/reporting-cost`
          } else {
            baseUrl = `/orgnization/unit/paris/reporting-cost`
          }
          this.$router.push(baseUrl)
          let m = 0
          const stateCheck = setInterval(() => {
            const tableElement = document.getElementById('reporting___BV_tab_button__')
            if (tableElement) {
              tableElement.click()
            }
            m += 1
            if (m === 1) {
              clearInterval(stateCheck)
            }
          }, 500)

          //  else if (teamId !== '') {
          //   baseUrl = `/orgnization/unit/${unitId}/team/${teamId}/reporting-cost`
          //   this.$router.push(baseUrl)
          //   let m = 0
          //   const stateCheck = setInterval(() => {
          //     const elements = document.getElementsByClassName('nav-link')
          //     let tableElement = null
          //     for (let i = 0; i < elements.length; i += 1) {
          //       if (elements[i].innerText.trim() === 'Reporting') {
          //         tableElement = elements[i]
          //         break
          //       }
          //     }
          //     if (tableElement) {
          //       tableElement.click()
          //     }
          //     m += 1
          //     if (m === 1) {
          //       clearInterval(stateCheck)
          //     }
          //   }, 500)
          //   const jobsElement = document.getElementById('jobs')
          //   const teamsElement = document.getElementById('teams')
          //   if (jobsElement) {
          //     jobsElement.classList.add('active')
          //   }
          //   if (teamsElement) {
          //     teamsElement.classList.remove('active')
          //   }
          // } else if (unitId === 'paris') {
          //   baseUrl = `/orgnization/unit/paris/team/team-a/reporting-cost`
          //   this.$router.push(baseUrl)
          //   let m = 0
          //   const stateCheck = setInterval(() => {
          //     const elements = document.getElementsByClassName('nav-link')
          //     let tableElement = null
          //     for (let i = 0; i < elements.length; i += 1) {
          //       if (elements[i].innerText.trim() === 'Reporting') {
          //         tableElement = elements[i]
          //         break
          //       }
          //     }
          //     if (tableElement) {
          //       tableElement.click()
          //     }
          //     m += 1
          //     if (m === 1) {
          //       clearInterval(stateCheck)
          //     }
          //   }, 500)
          //   const jobsElement = document.getElementById('jobs')
          //   const teamsElement = document.getElementById('teams')
          //   if (jobsElement) {
          //     jobsElement.classList.add('active')
          //   }
          //   if (teamsElement) {
          //     teamsElement.classList.remove('active')
          //   }
          // } else {
          //   baseUrl = `/orgnization/unit/sofia/team/team-e/reporting-cost`
          //   this.$router.push(baseUrl)
          //   let m = 0
          //   const stateCheck = setInterval(() => {
          //     const elements = document.getElementsByClassName('nav-link')
          //     let tableElement = null
          //     for (let i = 0; i < elements.length; i += 1) {
          //       if (elements[i].innerText.trim() === 'Reporting') {
          //         tableElement = elements[i]
          //         break
          //       }
          //     }
          //     if (tableElement) {
          //       tableElement.click()
          //     }
          //     m += 1
          //     if (m === 1) {
          //       clearInterval(stateCheck)
          //     }
          //   }, 500)
          //   const jobsElement = document.getElementById('jobs')
          //   const teamsElement = document.getElementById('teams')
          //   if (jobsElement) {
          //     jobsElement.classList.add('active')
          //   }
          //   if (teamsElement) {
          //     teamsElement.classList.remove('active')
          //   }
          // }
        // }
      }

      this.$emit('toggleChange', state)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';
  .control-nav {
    margin: 16px;
  }
  .input-group {
    border: 1px solid $theme-dark-input-border-color;
    border-radius: 5px;
    height: 40px;
    input {
      padding: 10px;
      background: transparent;
      border: none;
      height: 100%;
    }
    .input-prepend {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 11px;
    }
  }
  .button-group {
    border: 1px solid $theme-dark-input-border-color;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    button {
      background: transparent !important;
      color: $theme-dark-button-primary-normal-text;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      width: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
      border: none;
      &:nth-child(1) {
        border-right: 1px solid $theme-dark-input-border-color;
        border-radius: 5px 0px 0px 5px;
      }
      &.active {
        color: $theme-dark-button-primary-active-text;
        background: $theme-dark-button-primary-active-bg !important;
      }
      &:hover {
        box-shadow: none !important;
      }
    }
  }
</style>
