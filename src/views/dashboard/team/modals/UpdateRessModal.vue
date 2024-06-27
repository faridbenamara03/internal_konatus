<template>
  <b-modal
    id="modal-updateRes"
    v-model="isOpen"
    centered
    hide-backdrop
    no-close-on-backdrop
    no-close-on-esc
    content-class="shadow"
    title-class="text-white"
    header-bg-variant="dark"
    header-text-variant="white"
    modal-class="my-modal"
  >
    <template v-if="activeTab === 'tab1'">
      <h3 class="mb-3">
        Ressource Information
      </h3>
      <div>{{ selectedRessource.nomRessource }}</div>
      <div class="mt-3">
        Contract: Begin date - {{ selectedRessource.resbegin }}, End date - {{ selectedRessource.resend }}
      </div>
      <div>
        Activity: {{ selectedRessource.fteValue }}
      </div>
      <div>
        <input
          v-model="startdate"
          type="date"
          class="form-control my-2"
        >
        <b-button
          variant="primary"
          @click="updateStartDate"
        >
          Update Start Date
        </b-button>
      </div>
      <div>
        <input
          v-model="enddate"
          type="date"
          class="form-control my-2"
        >
        <b-button
          variant="primary"
          @click="updateEndDate"
        >
          Update End Date
        </b-button>
      </div>
      <div>
        <input
          v-model="activity"
          type="number"
          class="form-control my-2"
        >
        <b-button
          variant="primary"
          @click="updateActivity"
        >
          Update Activity
        </b-button>
      </div>
      <div>{{ messageinsert }}</div>
    </template>

    <template v-if="activeTab === 'tab2'">
      <h3 class="mb-3">
        Skillset Information
      </h3>
      <div
        v-for="(skillset, index) in selectedRessource.skillsets"
        :key="index"
      >
        {{ skillset.name }}: {{ skillset.skill_name }} - Cap: {{ skillset.skillsetcap }}
      </div>
      <div v-if="activeTab === 'tab2'">
        <div
          v-for="(skillset, index) in selectedRessource.skillsets"
          :key="'skillset-' + index"
        >
          <b-card class="mb-2">
            <b-form @submit.prevent="updateTblRess(skillset.selectedOption, skillset.skillsetValue,skillset.id)">
              <b-form-group
                label="Skillset Name:"
                horizontal
              >
                {{ skillset.name }}
                {{ skillset.id }}
              </b-form-group>
              <b-form-group
                label="Skillset Value:"
                horizontal
              >
                <b-form-input
                  v-model="skillset.skillsetValue"
                  type="number"
                  required
                  placeholder="Enter skillset value"
                />
              </b-form-group>
              <b-form-select
                v-model="skillset.selectedOption"
                :options="['Principal', 'Secondary', 'Best Effort', '------']"
                required
              />
              <b-button
                type="submit"
                variant="primary"
                class="mt-2"
              >
                Update
              </b-button>
              <b-button
                variant="danger"
                class="mt-2 ml-2"
                @click="deleteSkill(skillset.id, selectedRessource.idRessource)"
              >
                Delete
              </b-button>
            </b-form>
          </b-card>
        </div>
        <div v-if="newSkill.length > 0">
          <h4 class="text-white mt-4 mb-4">
            Skillset not attributed
          </h4>
          <div
            v-for="(skill, index) in newSkill"
            :key="index"
            class="mb-3"
          >
            <b-card>
              <b-form @submit.prevent="insertTress(skill)">
                <b-form-group
                  label="Skillset Name:"
                  label-for="skillset-name"
                >
                  {{ skill.skillset_name }}
                </b-form-group>
                <b-form-select
                  id="skillset-option"
                  v-model="skill.selectedOption"
                  :options="['Principal', 'Secondary', 'Best Effort', '------']"
                  required
                />
                <b-form-input
                  id="skillset-value"
                  v-model="skill.skillsetValue"
                  type="number"
                  placeholder="Enter skillset value"
                  required
                />
                <b-button
                  type="submit"
                  variant="success"
                  class="mt-2"
                >
                  Insert
                </b-button>
              </b-form>
            </b-card>
          </div>
        </div>
        <b-button
          variant="info"
          @click="switchTab"
        >
          Go Back to General Info
        </b-button>
      </div>
    </template>
    <!-- Ici changer la logique du test pour tester en fonction de si la db a un skillset 1 ou non 0 -->
    <b-button
      v-if="activeTab === 'tab1' && selectedRessource.opt_skillset === 1"
      variant="info"
      @click="switchTab"
    >
      Next Tab
    </b-button>
  </b-modal>
</template>

<script>
import {
  BModal, BButton, BFormInput, BFormGroup, BFormSelect, BCard,
BForm
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BModal,
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BCard
  },
  props: {
    selectedRessource: {
      type: Object,
      default: null,
    },
    infoTeam: {
      type: Array,
      default: null,
    },
    fetchDataR: {
      type: Function,
      default: null,
    },
    fetchDataT: {
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      isOpen: true,
      startdate: '',
      enddate: '',
      activity: '',
      activeTab: 'tab1',
      messageinsert: '',
      newSkill: []
    }
  },
  mounted() {
    this.insertMissingSkillsets()
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    switchTab() {
      this.activeTab = this.activeTab === 'tab1' ? 'tab2' : 'tab1'
    },
    updateStartDate() {
      axios.put(`/new-base/ressources_startdate/update/${this.selectedRessource.idRessource}`, {
        start_date: this.startdate,
      }).then(response => {
        this.messageinsert = response.data.message
        this.fetchDataR()
      })
    },
    updateEndDate() {
      axios.put(`/new-base/resources/update/${this.selectedRessource.idRessource}`, {
        name: this.selectedRessource.nomRessource,
        idteam: this.selectedRessource.idteam,
        activity: this.selectedRessource.fteValue,
        start_date: this.selectedRessource.resbegin,
        end_date: this.enddate,
      }).then(response => {
        this.messageinsert = response.data.message
        this.fetchDataR()
      })
    },
    updateActivity() {
      axios.put(`/new-base/resources/update/${this.selectedRessource.idRessource}`, {
        name: this.selectedRessource.nomRessource,
        idteam: this.selectedRessource.idteam,
        activity: this.activity,
        start_date: this.selectedRessource.resbegin,
        end_date: this.selectedRessource.resend,
      }).then(response => {
        this.messageinsert = response.data.message
        this.fetchDataR()
      })
    },
    deleteSkill(skillId, idressource) {
      console.log("id ress et idskill a supprimer", idressource, skillId)
      axios.delete(`/new-base/teamressource/delete/${idressource}/${skillId}`).then(response => {
        const index = this.selectedRessource.skillsets.findIndex(s => s.id === skillId)
        if (index !== -1) {
          this.selectedRessource.skillsets.splice(index, 1)
        }
        this.messageinsert = response.data.message
      })
    },
    async insertTress(skill) {
      // Extract values from the skill object
      const { selectedOption, skillsetValue } = skill
      const skillsetId = skill.skillset_id // Ensure these property names match those in your data model

      // Determine activity ID based on the selected option
      let idActivitSkill
      switch (selectedOption) {
        case 'Principal':
          idActivitSkill = 1
          break
        case 'Secondary':
          idActivitSkill = 2
          break
        case 'Best Effort':
          idActivitSkill = 3
          break
        case '------':
          idActivitSkill = 4
          break
        default:
          idActivitSkill = 4
          break
      }

      console.log("Selected Option:", selectedOption)
      console.log("Skillset Value:", skillsetValue)
      console.log("idActivitSkill Value:", idActivitSkill)
      console.log("idteam:", this.selectedRessource.idteam)
      console.log("idressource:", this.selectedRessource.idRessource)
      console.log("id du skill", skillsetId)

      const url = `/new-base/team_ressources/add`

      try {
        await axios.post(url, {
          idressource: this.selectedRessource.idRessource,
          idteam: this.selectedRessource.idteam,
          idskillseet: skillsetId,
          idActivitSkill,
          capacityBySkillset: skillsetValue,
        })
        this.fetchDataR()
        this.fetchDataT()
      } catch (error) {
        console.error('Error inserting skillset data:', error)
        this.messageinsert = 'An error occurred while inserting skillset data.'
      }
    },

    async insertMissingSkillsets() {
      // Retrieve the skillsets assigned to the selected resource
      const selectedSkillsets = this.selectedRessource.skillsets.map(skillset => skillset.id)

      console.log('Selected Skillsets:', selectedSkillsets)

      // Retrieve all available skillsets from infoTeam
      const allSkillsets = this.infoTeam[0].skillsets

      console.log('All Skillsets:', allSkillsets)

      // Identify missing skillsets (those in infoTeam but not in selectedRessource)
      const missingSkillsets = allSkillsets.filter(skillset => !selectedSkillsets.includes(skillset.skillset_id))

      console.log('Missing Skillsets:', missingSkillsets)
      // Update newSkill data property with missing skillsets
      this.newSkill = missingSkillsets
      console.log('newSkill:', this.newSkill)

      // Optionally, refresh data or update UI after inserting missing skillsets
      this.fetchDataR()
      this.fetchDataT()
    },
    async updateTblRess(selectedOption, skillsetValue, skillsetId) {
      console.log("Update function called with:", selectedOption, skillsetValue, skillsetId)
      let idActivitSkill
      switch (selectedOption) {
        case 'Principal':
          idActivitSkill = 1
          break
        case 'Secondary':
          idActivitSkill = 2
          break
        case 'Best Effort':
          idActivitSkill = 3
          break
        case '------':
        default:
          idActivitSkill = 4
          break
      }

      console.log("Selected Option:", selectedOption)
      console.log("Skillset Value:", skillsetValue)
      console.log("idActivitSkill Value:", idActivitSkill)
      console.log("idteam:", this.selectedRessource.idteam)
      console.log("idressource:", this.selectedRessource.idRessource)

      try {
        await axios.put(`/new-base/teamRessource/skillset/update/${this.selectedRessource.idRessource}/${skillsetId}`, {
          idteam: this.selectedRessource.idteam,
          idActivitSkill,
          capacityBySkillset: skillsetValue
        })
        this.fetchDataR()
        this.fetchDataT()
      } catch (error) {
        console.error('Erreur lors de la mise à jour des données :', error)
        this.messageinsert = 'Une erreur s\'est produite lors de la mise à jour des données.'
      }
    },
  }
}
</script>
