<template>
  <div>
    <div class="table_container">
      <table class="table_style">
        <thead>
          <tr class="bg-[#303952]">
            <th class="col_team">
              <div>
                <div>TeamKen:</div>
                <div class="skillBase2">
                  {{ team[0].teamName }}
                </div>
                <div>
                  <div>default Value:</div>
                  <div
                    v-if="skillBase"
                    class="skillBase"
                  >
                    <span>P
                      <span class="small-text">{{ skillBase[0].Value }}</span>
                    </span>
                    <span>S
                      <span class="small-text">{{ skillBase[1].Value }}</span>
                    </span>
                    <span>B
                      <span class="small-text">{{ skillBase[2].Value }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </th>
            <th class="col_job">
              <div> Job :</div>
              <div class="skillBase">
                {{ team[0].job_name }}
              </div>
              <div class="fte_ecart">
                Activity(%)
              </div>
            </th>
            <th
              v-for="(skillsetname, index) in team[0].skillsets"
              v-show="team[0].opt_skillset === 1"
              :key="index"
              class="skill_col"
            >
              <span class="nameskill">{{ skillsetname.skillset_name }}</span>
            </th>
            <th class="skill_col">
              <div class="text-lg">
                Option
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(ress, index) in ressource"
            :key="index"
            class="tr_align"
          >
            <td class="resource-name-cell">
              {{ ress.nomRessource }}
            </td>
            <td class="fte_cell">
              {{ ress.fteValue }}
            </td>
            <td
              v-for="(teamSkillset, sIndex) in team[0].skillsets"
              :key="sIndex"
              class="skill_col"
            >
              <!-- Match skillsets from resource with those defined in the team -->
              <template v-if="ress.opt_skillset === 1">
                <template v-if="ressSkillset = ress.skillsets.find(skillset => skillset.id === teamSkillset.skillset_id)">
                  <span class="skill_value_cell">
                    <span class="skill_libelle">{{ formatPriority(ressSkillset.skill_libelle) }}</span>
                    <div class="rectangle-136">
                      {{ ressSkillset.skillsetcap }}
                    </div>
                  </span>
                </template>
                <template v-else>
                  <!-- Empty cell if the skillset is not found -->
                  <span />
                </template>
              </template>
            </td>
            <td class="posButton">
              <span>
                <b-button
                  class="blockButton"
                  @click="handleSelectedRessourceUpdate(ress)"
                >
                  <img
                    class="buttonStyle"
                    :src="require('@/assets/images/button/crayon.svg')"
                    alt=""
                  >
                </b-button>
              </span>
              <span>
                <b-button
                  v-b-modal.modal-overload
                  class="blockButton"
                  @click="handleSelectedRessourceAddHour(ress)"
                >
                  <img
                    class="buttonStyle"
                    :src="require('@/assets/images/button/battery-charge.svg')"
                    alt=""
                  >
                </b-button>
              </span>
              <span>
                <b-button
                  class="blockButton"
                  @click="handleSelectedRessourceVac(ress)"
                >
                  <img
                    class="buttonStyle"
                    :src="require('@/assets/images/button/calendar.svg')"
                    alt=""
                  >
                </b-button>
              </span>
              <span>
                <b-button
                  class="blockButton"
                  @click="deleteRess(ress.idRessource)"
                >
                  <img
                    class="buttonStyle"
                    :src="require('@/assets/images/button/delete.svg')"
                    alt=""
                  >
                </b-button>
              </span>
            </td>
          </tr>
          <tr>
            <td class="add_button">
              <b-button
                v-b-modal.modal-team
                class="blockButton"
                @click="handleAddRess()"
              >
                <img
                  class="buttonStyle"
                  :src="require('@/assets/images/button/add.svg')"
                  alt=""
                >
              </b-button>
            </td>
          </tr>
        </tbody>
        <tfoot />
      </table>
    </div>
    <!-- Modal components and other relevant parts below -->
    <ModTblRess
      v-if="showModalRess"
      :selected-ressource="selectedRessource"
      :info-team="team"
      :fetch-data-r="fetchDataRess"
      :fetch-data-t="fetchDataTeam"
    />
    <ModTblOver
      v-if="showModalOver"
      :selected-ressource="selectedRessource"
      :fetch-data-r="fetchDataRess"
      :fetch-data-t="fetchDataTeam"
    />
    <ModVacancy
      v-if="showModalVac"
      :selected-ressource="selectedRessource"
      :fetch-data-r="fetchDataRess"
      :fetch-data-t="fetchDataTeam"
    />
    <ModAddRes
      v-if="showModalAdd"
      :selected-ressource="selectedRessource"
      :fetch-data-r="fetchDataRess"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { BButton } from 'bootstrap-vue'
import ModAddRes from '../../modals/ModAddRes.vue'
import ModVacancy from '../../modals/HolidaysModal.vue'
import ModTblOver from '../../modals/AddHoursModal.vue'
import ModTblRess from '../../modals/UpdateRessModal.vue'

export default {
  components: {
    ModAddRes,
    ModVacancy,
    ModTblOver,
    ModTblRess,
    BButton
  },
  props: {
    teamId: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      ressource: [],
      skillBase: [],
      team: [],
      selectedRessource: null,
      showModalRess: false,
      showModalOver: false,
      showModalVac: false,
      showModalAdd: false,
    }
  },
  computed: {
  },
  mounted() {
    this.fetchDataRess()
    this.fetchDefaultValue()
    this.fetchDataTeam()
  },
  methods: {
    fetchDataRess() {
      axios
        .get('/new-base/ecran10/list')
        .then(response => {
          const transformData = this.transformData(response.data)
          // voir si mettre this.ressource.value ?
          this.ressource = transformData // Corriger l'affectation des données
          console.log('Données récupérées:', this.ressource)
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des données :', error)
        })
    },
    transformData(data) {
      const transformedData = []
      data.forEach(item => {
        // Only add resources that match the teamId from props
        if (item.team_id === this.teamId) {
          let existingResource = transformedData.find(res => res.idRessource === item.resource_id)

          if (!existingResource) {
            existingResource = {
              idRessource: item.resource_id,
              nomRessource: item.resource_name,
              opt_skillset: item.opt_skillset,
              idteam: item.team_id,
              nomTeam: item.team_name,
              fteValue: item.fte,
              resbegin: item.resbegin,
              resend: item.resend,
              skillsetIds: [],
              skillsets: [],
              dates_holidays: [],
              dates_overload: [],
            }
            transformedData.push(existingResource)
          }

          if (item.vacstart && item.vacend) {
            this.addUniqueDate(existingResource.dates_holidays, {
              type: 'Vacation',
              start: item.vacstart,
              end: item.vacend,
              idres: item.resource_id,
              id: item.holidaysid,
            })
          }
          if (item.over_start && item.over_end) {
            this.addUniqueDate(existingResource.dates_overload, {
              type: 'Overload',
              start: item.over_start,
              end: item.over_end,
              value: item.over_value,
              idres: item.resource_id,
              id: item.add_hoursid,
            })
          }
          if (!existingResource.skillsetIds.includes(item.skillset_id)) {
            existingResource.skillsetIds.push(item.skillset_id)
            existingResource.skillsets.push({
              id: item.skillset_id,
              name: item.skillset_name,
              skill_name: item.skill_name,
              skill_libelle: item.skill_libelle,
              skillsetcap: item.skillsetcap,
            })
          }
        }
      })
      return transformedData
    },
    addUniqueDate(datesArray, newDate) {
      const isDateAlreadyPresent = datesArray.some(date => (
        date.type === newDate.type
        && date.start === newDate.start
        && date.end === newDate.end
        && date.value === newDate.value
      ))
      if (!isDateAlreadyPresent) {
        datesArray.push(newDate)
      }
    },
    transformDataTeam(data) {
      const transformedData = []
      data.forEach(item => {
        // Only process data for the specified teamId
        if (item.team_id === this.teamId) {
          const existingTeam = transformedData.find(team => team.idTeam === item.team_id)

          if (existingTeam) {
            // Check if the skillset_name already exists in the team's skillset list
            const existingSkillset = existingTeam.skillsets.find(skillset => skillset.skillset_id === item.skillset_id)

            // Add the skillset_name only if it does not already exist
            if (!existingSkillset) {
              existingTeam.skillsets.push({
                skillset_id: item.skillset_id,
                skillset_name: item.skillset_name,
              })
            }
          } else {
            // Create a new team entry if it doesn't exist in transformedData
            const newTeam = {
              organization_id: item.organization_id,
              organization_name: item.organization_name,
              opt_skillset: item.opt_skillset,
              idTeam: item.team_id,
              teamName: item.team_name,
              job_name: item.job_name,
              skillsets: [{
                skillset_id: item.skillset_id,
                skillset_name: item.skillset_name,
              }],
            }
            transformedData.push(newTeam)
          }
        }
      })
      return transformedData
    },

    fetchDataTeam() {
      axios
        .get('/new-base/organisation_skillset_R')
        .then(response => {
          const transformedData = this.transformDataTeam(response.data)
          this.team = transformedData
          console.log("retour liste team", this.team)
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des données :', error)
        })
    },
    fetchDefaultValue() {
      axios
        .get('/new-base/skillsetactivity/list')
        .then(response => {
          const defaultSkillvalue = response.data
          this.skillBase = defaultSkillvalue
          console.log("skill de base ", this.skillBase)
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des données :', error)
        })
    },
    formatPriority(priority) {
      return priority ? priority.charAt(0).toUpperCase() : ''
    },
    handleSelectedRessourceVac(ressource) {
      this.selectedRessource = ressource
      this.showModalVac = !this.showModalVac
      console.log("ressource selectionner", this.selectedRessource)
    },
    handleSelectedRessourceAddHour(ressource) {
      this.selectedRessource = ressource
      this.showModalOver = !this.showModalOver
      console.log("ressource selectionner", this.selectedRessource)
    },
    handleSelectedRessourceUpdate(ressource) {
      this.selectedRessource = ressource
      this.showModalRess = !this.showModalRess
      console.log("ressource selectionner", this.selectedRessource)
    },
    handleAddRess() {
      this.selectedRessource = this.team
      this.showModalAdd = !this.showModalAdd
      console.log("ressource selectionner", this.team)
      console.log("modal ouverte ?", this.showModalAdd)
    },
    async deleteRess(ressId) {
      console.log("la ressource d'id va etre delete", ressId)
      await axios.delete(`/new-base/ressourceAll/${ressId}`)
      await this.fetchDataRess()
    },
  }
}
</script>

<style scoped>
  .th_option {
  display: flex;
  align-items:center;
  justify-content: center;
  }
  .buttonpos {
    display: flex;
    justify-content: center;
  }

  .table_style {
    width: 100%;
    margin: auto;
    background-color: #283046;
    border-collapse: separate;
    border-radius: 10px; /* Ajoutez cette propriété pour arrondir les bords */
    overflow: hidden;
    color: white;
    flex: auto;
    border-spacing: 10px 14px;
  }
  .table_style  tbody td {
    position: relative;
    top: 5px;
  }
  .table_style tbody tr {
    align-items: start;
  }
  .table_style thead td {
    border-collapse: collapse;
  }
  .col_team {
    padding: 10px;
    text-align: left;
  }
  [dir] th.skill_col {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .small-text {
    width: auto;
    font-size: 12px; /* Taille de police des nombres */;
    margin-left: -5px;
  }
  .resource-name-cell {
    background-color: #7367F0;
    color: white; /* Couleur du texte */
    border: 1px solid #7367F0; /* Couleur de la bordure */
    width: 14%;
    align-items: center;
    text-align: center; /* Centre le texte horizontalement */
    line-height: auto; /* Ajuste la hauteur de ligne pour le centrage vertical */
    font-weight: bold;

  }
  .fte_ecart {
    margin-top: 15px;
  }
  .col_job {
    width:auto;
    text-align: center;
  }
  .fte_cell {
    display: inline-block;
    background-color: #7367F0;
    border: 1px solid #7367F0;
    justify-content: center;
    border-radius: 17px;
    line-height: 48px; /* Alignez le texte verticalement au centre */
    text-align: center;
    align-items: center;
    font-size:xx-large;
    margin-top: 8px;
  }
  .skill_value_cell
   {
    font-size: 32px;
    background-color: #7367F0;
    border: 1px solid #7367F0;
    border-radius: 19px;
    align-items: center;
    justify-content: center;
    display: inline-block;
     width: 65px;
     margin: 5px;
  }
  .skill_libelle {
    position: relative;
    left: 12px;
  }
  .rectangle-136 {
    display: inline-block; /* Permet au conteneur de s'adapter à la taille du contenu */
    padding: 2px; /* Ajoute de l'espace à l'intérieur du conteneur pour créer le carré */
    border-radius: 8px;
    font-size: 12px;
    color: white;
    background-color: #283046;
    position: relative;
    width: 25px;
    top: 5px;
    left: 17px;
  }
  .tr_align {
    text-align: center;
  }
  .tr_align .posButton {
  text-align: center; /* This will override the center alignment */
}
  .nameskill {
    background-color: #27294F;
    color: white; /* Couleur du texte */
    padding: 8px 12px; /* Ajustez les marges intérieures selon vos besoins */
    border: 1px solid #27294F; /* Couleur de la bordure */
    border-radius: 8px; /* Rayon des coins pour rendre le rectangle arrondi */
    display: inline-block; /* Permet d'ajuster la largeur automatiquement en fonction du contenu */
    align-items: left;
    font-size: larger;
    min-width: 100px; /* Largeur minimale */
    min-height: 40px; /* Hauteur minimale */
    text-align: center; /* Centre le texte horizontalement */
    line-height: auto; /* Ajuste la hauteur de ligne pour le centrage vertical */
    font-weight: bold;
  }
  .skillBase {
    background-color: #27294F;
    color: white; /* Couleur du texte */
    padding: 8px 12px; /* Ajustez les marges intérieures selon vos besoins */
    border: 1px solid #27294F; /* Couleur de la bordure */
    border-radius: 8px; /* Rayon des coins pour rendre le rectangle arrondi */
    display: inline-block; /* Permet d'ajuster la largeur automatiquement en fonction du contenu */
    align-items: left;
    min-width: 100px; /* Largeur minimale */
    min-height: 40px; /* Hauteur minimale */
    text-align: center; /* Centre le texte horizontalement */
    line-height: auto; /* Ajuste la hauteur de ligne pour le centrage vertical */
    font-weight: bold;
    font-size: 20px;
  }
  .skillBase2 {
    background-color: #27294F;
    color: white; /* Couleur du texte */
    padding: 8px 12px; /* Ajustez les marges intérieures selon vos besoins */
    border: 1px solid #27294F; /* Couleur de la bordure */
    border-radius: 8px; /* Rayon des coins pour rendre le rectangle arrondi */
    display: inline-block; /* Permet d'ajuster la largeur automatiquement en fonction du contenu */
    align-items: left;
    min-width: 100px; /* Largeur minimale */
    min-height: 40px; /* Hauteur minimale */
    text-align: center; /* Centre le texte horizontalement */
    line-height: auto; /* Ajuste la hauteur de ligne pour le centrage vertical */
    font-weight: bold;
    font-size: x-large;
  }

  .nameskill {
    background-color: #27294F;
    color: white; /* Couleur du texte */
    padding: 8px 12px; /* Ajustez les marges intérieures selon vos besoins */
    border: 1px solid #27294F; /* Couleur de la bordure */
    border-radius: 8px; /* Rayon des coins pour rendre le rectangle arrondi */
    display: inline-block; /* Permet d'ajuster la largeur automatiquement en fonction du contenu */
    align-items: left;
    min-width: 100px; /* Largeur minimale */
    min-height: 40px; /* Hauteur minimale */
    text-align: center; /* Centre le texte horizontalement */
    line-height: auto; /* Ajuste la hauteur de ligne pour le centrage vertical */
    font-weight: bold;
    font-size: x-large;
  }
  .buttonStyle{
  background-color: #283046;
  border: none;
  margin-top: -4px;
	margin-left: 0px;
	display: flex;
	width: 50px;
	height: 31px;
	padding-left: 0px;
	justify-content: flex-end;
	align-items: center;
	gap: 32px;
	flex-shrink: 0;
  }
  .blockButton {
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  }
  .add_button {
    text-align: center;
  }
</style>
