<template>
  <b-modal
    id="modal-link-project"
    ref="my-modal"
    title="Link Project"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Link Project
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div>
      <label>Projects</label>
      <v-select
        v-model="selectedProjects"
        :options="totalProjects"
        outlined
        multiple
      />
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        variant="primary"
        @click="handleSave"
      >
        Link
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BButton,
    vSelect
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedProjects: []
    }
  },
  computed: {
    totalProjects() {
      const projectLists = []
      const selectedNav = this.$store.state.globalState.selectedNavObj
      if (selectedNav.type === 'program') {
        const pOrganizations = this.$store.state.globalState.globalOrganizationData
        if (pOrganizations && pOrganizations[0].children.length > 0) {
          pOrganizations[0].children.forEach(portfolio => {
            if (portfolio && portfolio.children.length > 0) {
              portfolio.children.forEach(program => {
                if (program && program.children.length > 0 && program.title === selectedNav.title) {
                  program.children.forEach(project => {
                    projectLists.push(project.title)
                  })
                }
              })
            }
          })
        }
      } else if (selectedNav.type === 'project') {
        projectLists.push(selectedNav.title)
      }
      return projectLists
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async handleSave() {
      // this.$store.commit('globalState/SUBMIT_LINK_PROJECT')
      // console.log("wes:", this.data, "selectedProjects", this.selectedProjects)
      const payloads = {
        selected_wes: this.data,
        selected_projects: this.selectedProjects
      }
      await this.$store.dispatch('globalState/submit_link_project', payloads)
      // this.showToast('success', 'Success Link Projects.')
      this.$refs['my-modal'].hide()
    },
    showToast(variant, title) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title,
          icon: 'BellIcon',
          text: null,
          variant,
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
