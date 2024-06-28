<template>
  <div class="Block">
    <div
      class="portf-row portf-bold portf-table-header portf-uppercase"
      style="font-size: xx-large;"
    >
      <div class="part2">
        <div>
          Unit
        </div>
        <div>
          List Team
        </div>
        <div>
          <b-button
            v-b-modal.modal-addUnit
            class="blockButtonDeb"
          >
            <img
              class="buttonStyleDeb"
              :src="require('@/assets/images/button/add.svg')"
              alt=""
            >
          </b-button>
        </div>
      </div>
    </div>
    <div
      v-for="(unit,index) in team"
      :key="index"
      class="parent"
    >
      <div
        class="parent-header"
        @click="toggleChildren(index)"
      >
        <div style="display: flex; align-items: center;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="{ 'feather-chevron-down': !isClicked[index], 'feather-chevron-rotate': isClicked[index] }"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {{ unit.unit_name }}
        </div>
        <div class="number">
          <div v-if="unit.teams.length>0 && unit.teams[0].team_id !== null">
            {{ unit.teams.length }}
          </div>
          <div v-else>
            0
          </div>
        </div>
        <div>
          <b-button
            v-b-modal.modal-updateUnit
            class="blockButtonUnit"
            @click="openUpdateUnitModal(unit)"
          >
            <img
              class="buttonStyleUnit"
              :src="require('@/assets/images/button/crayon.svg')"
              alt=""
            >
          </b-button>
          <b-button
            v-b-modal.modal-addTeam
            class="blockButtonUnit"
            @click="openAddTeamModal(unit)"
          >
            <img
              class="buttonStyleUnit"
              :src="require('@/assets/images/button/add.svg')"
              alt=""
            >
          </b-button>
          <b-button
            class="blockButtonUnit"
            @click="deleteUnit(unit.unit_id)"
          >
            <img
              class="buttonStyleUnit"
              :src="require('@/assets/images/button/delete.svg')"
              alt=""
            >
          </b-button>
        </div>
      </div>
      <div
        v-if="unit.teams.length>0 && unit.teams[0].team_id !== null"
        class="children"
        :style="{ display: childrenVisible[index] ? 'flex' : 'none', flexDirection: 'column'}"
      >
        <div
          v-for="(teams, teamIndex) in unit.teams"
          :key="teamIndex"
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <div>{{ teams.team_name }}</div>
          <div>{{ teams.job_name }}</div>
          <div style="justify-content: end;">
            <b-button
              v-b-modal.modal-updateTeam
              class="blockButton"
              @click="openUpdateTeamModal(teams,unit)"
            >
              <img
                class="buttonStyle"
                :src="require('@/assets/images/button/crayon.svg')"
                alt=""
              >
            </b-button>
            <b-button
              class="blockButton"
              @click="deleteTeam(teams.team_id)"
            >
              <img
                class="buttonStyle"
                :src="require('@/assets/images/button/delete.svg')"
                alt=""
              >
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <UnitAdd
      :orga-data="team"
      :fetch-data-orga="fetchDataTeam"
    />
    <UnitUpdate
      :selected-unit="selectedUnit"
      :fetch-data-orga="fetchDataTeam"
    />
    <TeamAdd
      :selected-unit="selectedUnit"
      :fetch-data-orga="fetchDataTeam"
    />
    <TeamUpdate
      :selected-team="selectedTeam"
      :selected-unit="selectedUnit"
      :fetch-data-orga="fetchDataTeam"
    />
  </div>
</template>
<script>
import axios from 'axios'
import { BButton } from 'bootstrap-vue'
import UnitAdd from '../../modals/UnitAddModal.vue'
import UnitUpdate from '../../modals/UnitUpdateModal.vue'
import TeamAdd from '../../modals/TeamAddModal.vue'
import TeamUpdate from '../../modals/TeamUpdateModal.vue'

export default {
  components: {
    BButton,
    UnitAdd,
    UnitUpdate,
    TeamAdd,
    TeamUpdate
  },
  data() {
    return {
      team: [],
      teamBrut: [],
      childrenVisible: [],
      isClicked: [],
      selectedUnit: null,
      selectedTeam: null,
      }
    },
  mounted() {
    this.fetchDataTeam()
  },
  methods: {
    groupDataByUnitId(data) {
      const groupedData = {}

      data.forEach(item => {
          // Initialize the array for this unit_id if it doesn't exist
          if (!groupedData[item.unit_id]) {
              groupedData[item.unit_id] = {
                  unit_id: item.unit_id,
                  unit_name: item.unit_name,
                  unit_cost: item.unitcost, // assuming `unitcost` exists on all items
                  organization_id: item.organization_id,
                  organization_name: item.organization_name,
                  teams: []// This will hold all teams under this unit
              }
          }

          // Push team details into the corresponding unit's team array
          groupedData[item.unit_id].teams.push({
              team_id: item.team_id,
              team_name: item.team_name,
              team_libelle: item.team_libelle,
              job_name: item.job_name,
              opt_skillset: item.opt_skillset
          })
      })
      // Optionally, you might want to turn this into an array if needed for frontend processing:
      return Object.values(groupedData)
  },
    formatPriority(priority) {
      return priority ? priority.charAt(0).toUpperCase() : '' // Returns the first letter capitalized, or an empty string if priority is empty or null.
    },

    async fetchDataTeam() {
      try {
        const response = await axios.get('/new-base/organisationjob/data')
        console.log("retour server", response)
        this.team = this.groupDataByUnitId(response.data)
        this.childrenVisible = Array(this.team.length).fill(false)
          this.isClicked = Array(this.team.length).fill(false)
        console.log("retour team modifie", this.team)
      } catch (error) {
        console.error('Error fetching orga data', error)
      }
    },
    toggleChildren(index) {
      this.$set(this.childrenVisible, index, !this.childrenVisible[index])
      this.$set(this.isClicked, index, !this.isClicked[index])
      console.log("children visible:", this.childrenVisible)
    },
    openUpdateUnitModal(unit) {
      this.selectedUnit = unit
    },
    openAddTeamModal(unit) {
      this.selectedUnit = unit
    },
    openUpdateTeamModal(team, unit) {
      this.selectedTeam = team
      this.selectedUnit = unit
    },
    async deleteTeam(teamId) {
      try {
        await axios.delete(`/new-base/team/delete/${teamId}`)
        await this.fetchDataTeam()
      } catch (error) {
        console.error('Error fetching orga data', error)
      }
    },
    async deleteUnit(unitId) {
      try {
        await axios.delete(`/new-base/unit/delete/${unitId}`)
        await this.fetchDataTeam()
      } catch (error) {
        console.error('Error fetching orga data', error)
      }
    },
  },
}
</script>
<style scoped>
.Block {
    width: 100%;
    min-width: 200px; /* Taille minimale en largeur */
    min-height: 300px; /* Taille minimale en hauteur */
    margin: auto;
    background-color: #283046;
    border-collapse: separate;
    border-radius: 10px; /* Arrondir les coins */
    overflow: hidden;
    color: white;
    flex: auto;
    border-spacing: 10px 14px;
    flex-direction: column;
}
.parent-header {
  font-size: x-large;
  background-color: #303952;
  display: flex;
  align-items: center;
  justify-content: space-between
}
.part2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.children {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button_child {
  width: 40%;
  margin-top: 10px;
}
.feather-chevron-rotate {
  transform: rotate(0deg);
}
.feather-chevron-down {
  transform:rotate(270deg);
}
.number {
  align-items: center;
  justify-content: center;
}
.buttonStyle{
  border:none !important;
  background: #283046;
    display: flex;
    width: 40px;
    height: 31px;
    padding-left: 0px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
  }
  .blockButton {
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  }
  .buttonStyleDeb{
  border:none !important;
  background: #283046;
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
  .blockButtonDeb{
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  }
  .buttonStyleUnit{
  border:none !important;
  background: #303952;
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
  .blockButtonUnit{
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  }
</style>
