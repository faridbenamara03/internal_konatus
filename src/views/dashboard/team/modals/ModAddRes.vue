<template>
  <b-modal
    id="modal-team"
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
    <template #modal-title>
      <div>Add a new ressource to the team : {{ selectedRessource[0].teamName }} </div>
    </template>
    <div>
      <b-form @submit.prevent="insertRess">
        <b-form-group
          label="Name"
          label-for="name-input"
        >
          Name
          <b-form-input
            id="name-input"
            v-model="name"
            type="text"
            placeholder="Enter a name"
            required
          />
        </b-form-group>

        <b-form-group
          label="Activity"
          label-for="activity-input"
        >
          Activity
          <b-form-input
            id="activity-input"
            v-model="activity"
            type="number"
            placeholder="Enter activity"
          />
        </b-form-group>

        <b-form-group
          label="Contract Start"
          label-for="start-date-input"
        >
          Contract Start
          <b-form-input
            id="start-date-input"
            v-model="startdate"
            type="date"
            placeholder="Enter start date"
            required
          />
        </b-form-group>

        <b-form-group
          label="End"
          label-for="end-date-input"
        >
          End of Contract
          <b-form-input
            id="end-date-input"
            v-model="enddate"
            type="date"
            placeholder="Enter end date"
          />
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
        >
          Insert
        </b-button>
      </b-form>
    </div>
    <div>
      <div v-if="selectedRessource[0].opt_skillset === 0">
        <b-card
          title="Skillset Information"
          class="my-3"
        >
          <b-row>
            <b-col
              v-for="(skillset, index) in selectedRessource[0].skillsets"
              :key="index"
              cols="12"
              md="6"
            >
              <b-form @submit.prevent="insertTeamRessourceDef(skillset.skillset_id, skillset.selectedOption, skillset.skillsetValue)">
                <b-form-group
                  label="Skillset Name:"
                  label-for="skillset-name"
                >
                  <b-form-input
                    id="skillset-name"
                    readonly
                    :value="skillset.skillset_name"
                  />
                </b-form-group>

                <b-form-group
                  label="Select Option:"
                  label-for="select-option"
                >
                  <b-form-select
                    id="select-option"
                    v-model="skillset.selectedOption"
                    :options="[{ value: null, text: 'Select an option' }, '------']"
                  />
                </b-form-group>

                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-2"
                >
                  Insert
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div v-if="selectedRessource[0].opt_skillset === 1">
        <b-card
          title="Skillset Information"
          class="my-3"
        >
          <b-row>
            <b-col
              v-for="(skillset, index) in selectedRessource[0].skillsets"
              :key="index"
              cols="12"
              md="6"
            >
              <b-form @submit.prevent="insertTeamRessource(skillset.skillset_id, skillset.selectedOption, skillset.skillsetValue)">
                <b-form-group
                  label="Skillset Name:"
                  label-for="skillset-name"
                >
                  <b-form-input
                    id="skillset-name"
                    readonly
                    :value="skillset.skillset_name"
                  />
                </b-form-group>

                <b-form-group
                  label="Select Option:"
                  label-for="select-option"
                >
                  <b-form-select
                    id="select-option"
                    v-model="skillset.selectedOption"
                    :options="['Principal', 'Secondary', 'Best Effort', '------']"
                  />
                </b-form-group>

                <b-form-group
                  label="Skillset Value:"
                  label-for="skillset-value"
                >
                  <b-form-input
                    id="skillset-value"
                    v-model="skillset.skillsetValue"
                    type="number"
                    placeholder="Enter skillset value"
                  />
                </b-form-group>

                <b-button
                  type="submit"
                  variant="primary"
                  class="mt-2"
                >
                  Insert
                </b-button>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <template #modal-footer>
      <b-button
        variant="info"
        @click="closeModal"
      >
        Got it, thanks!
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import {
  BCard, BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BFormSelect
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BFormSelect
  },
  props: {
    selectedRessource: {
      type: Array,
      default: null,
    },
    fetchDataR: {
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      isOpen: false,
      startdate: '',
      enddate: '',
      activity: '',
      overload: '',
      messageinsert: '',
      messagedelete: '',
      retrievedId: '',
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },

    async insertRess() {
      try {
        const params = {
          name: this.name,
          idteam: this.selectedRessource[0].idTeam,
          activity: this.activity,
          start_date: this.startdate,
          end_date: this.enddate,
        }

        const response = await axios.post('/new-base/ressource/add', params)
        this.retrievedId = response.data.id
        await this.fetchDataR()
      } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error)
        this.messageinsert = 'Une erreur s\'est produite lors de l\'insertion des données.'
      }
    },
    async insertTeamRessource(skillsetId, selectedOption, skillsetValue) {
      const idActivitSkill = this.determineIdActivitskill(selectedOption)
      console.log("retrieveId", this.retrievedId)
      try {
        const params = {
          idressource: this.retrievedId,
          idteam: this.selectedRessource[0].idTeam,
          idskillseet: skillsetId,
          idActivitSkill,
          capacityBySkillset: skillsetValue,
        }
        console.log("parametre", params)
        const response = await axios.post('/new-base/team_ressources/add', params)
        console.log("response", response)
        await this.fetchDataR()
        const { data } = response.data
        if (data.success) {
          this.messageinsert = data.message
          this.$emit('updateData') // Assuming there's an event to refresh data
        } else {
          this.messageinsert = `Erreur : ${data.message}`
        }
      } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error)
        this.messageinsert = 'Une erreur s\'est produite lors de l\'insertion des données.'
      }
    },

    determineIdActivitskill(selectedOption) {
      switch (selectedOption) {
        case 'Principal': return 1
        case 'Secondary': return 2
        case 'Best Effort': return 3
        case '------': return 4
        default: return 4
      }
    },
    async insertTeamRessourceDef(skillsetId, selectedOption) {
      const idActivitSkill = this.determineIdActivitskill(selectedOption)
      console.log("retrieveId", this.retrievedId)
      try {
        const params = {
          idressource: this.retrievedId,
          idteam: this.selectedRessource[0].idTeam,
          idskillseet: skillsetId,
          idActivitSkill,
          capacityBySkillset: 0,
        }
        console.log("parametre", params)
        const response = await axios.post('/new-base/team_ressources/add', params)
        console.log("response", response)
        await this.fetchDataR()
        const { data } = response.data
        if (data.success) {
          this.messageinsert = data.message
          this.$emit('updateData') // Assuming there's an event to refresh data
        } else {
          this.messageinsert = `Erreur : ${data.message}`
        }
      } catch (error) {
        console.error('Erreur lors de l\'insertion des données :', error)
        this.messageinsert = 'Une erreur s\'est produite lors de l\'insertion des données.'
      }
    },
  }
}
</script>
