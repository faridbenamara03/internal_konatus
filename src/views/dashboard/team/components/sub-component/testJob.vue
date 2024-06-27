<template>
  <div class="container">
    <div class="postitle">
      <h1 class="title">
        Job List
        <b-button
          v-b-modal.modal-addJob
          class="buttonBlock"
        >
          <img
            class="logoStyle"
            :src="require('@/assets/images/button/add.svg')"
            alt=""
          >
        </b-button>
      </h1>
      <ul>
        <li
          v-for="(job, index) in groupedData"
          :key="index"
        >
          <h2
            class="Jobname"
            @click="toggleSkillsets(index)"
          >
            > {{ job.job_name }}
            <b-button
              v-b-modal.modal-updateJob
              class="buttonBlock"
              @click="openUpdateJobModal(job)"
            >
              <img
                class="logoStyle"
                :src="require('@/assets/images/button/crayon.svg')"
                alt=""
              >
            </b-button>
            <b-button
              v-b-modal.modal-addSkill
              class="buttonBlock"
              @click="openAddSkillModal(job)"
            >
              <img
                class="logoStyle"
                :src="require('@/assets/images/button/add.svg')"
                alt=""
              >
            </b-button>
            <b-button
              class="buttonBlock"
              @click="deleteJob(job.job_id)"
            >
              <img
                class="logoStyle"
                :src="require('@/assets/images/button/delete.svg')"
                alt=""
              >
            </b-button>
          </h2>
          <ul v-show="childrenVisible[index]">
            <li
              v-for="(skillset,skillIndex) in job.skillsets"
              :key="skillIndex"
            >
              <div
                v-if="skillset.skill_name && orgaInfo[0].opt_skillset == 0 "
                class="content"
              >
                Skill Name: {{ skillset.skill_name }}
                <b-button
                  v-b-modal.modal-updateSkill
                  class="buttonBlock"
                  @click="openUpdateSkillModal(skillset)"
                >
                  <img
                    class="logoStyleSkill"
                    :src="require('@/assets/images/button/crayon.svg')"
                    alt=""
                  >
                </b-button>
                <b-button
                  class="buttonBlockSkill"
                  @click="deleteSkill(skillset.id)"
                >
                  <img
                    class="logoStyleSkill"
                    :src="require('@/assets/images/button/delete.svg')"
                    alt=""
                  >
                </b-button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <JobAdd
      :orga-info="orgaInfo"
    />
    <SkillAdd
      :job="selectedJob"
    />
    <UpdateJob
      :job="selectedJob"
    />
    <UpdateSkill
      :skill="selectSkill"
    />
  </div>
</template>
<script>
import axios from 'axios'
import { BButton } from 'bootstrap-vue'
import JobAdd from '../../modals/JobAddModal.vue'
import SkillAdd from '../../modals/SkillAddModal.vue'
import UpdateJob from '../../modals/JobUpdateModal.vue'
import UpdateSkill from '../../modals/SkillUpdateModal.vue'

export default {
  components: {
    BButton,
    JobAdd,
    SkillAdd,
    UpdateJob,
    UpdateSkill
  },
  props: {
    teamId: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      groupedData: [],
      childrenVisible: [],
      showModalAddJob: false,
      showModalUpdateJob: false,
      showModalUpdateSkill: false,
      showModalAddSkill: false,
      selectedJobname: null,
      selectSkill: null,
      selectedJob: null,
      selectSkillId: null,
      orgaInfo: [],
    }
  },
  mounted() {
    this.fetchData()
    this.fetchOrgaData()
  },
  methods: {
    toggleSkillsets(index) {
      this.$set(this.childrenVisible, index, !this.childrenVisible[index])
    },
    async fetchData() {
    try {
      const response = await axios.get('/new-api/skillsets_jobs')
      console.log("response brut", response.data.data)
      this.groupedData = this.groupByJob(response.data.data)
      console.log("recup", this.groupedData) // Log grouped data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  },
    groupByJob(data) {
    const groups = {}
    data.forEach(item => {
      if (!groups[item.job_id]) {
        groups[item.job_id] = {
          job_id: item.job_id,
          job_name: item.job_name,
          skillsets: []
        }
      }
      groups[item.job_id].skillsets.push({
        skill_name: item.skill_name,
         skillset_id: item.skillset_id
      })
    })
    return Object.values(groups) // This will return an array with a single group if found
    },
    async fetchOrgaData() {
      try {
        const response = await axios.get('/new-api/organisation')
        this.orgaInfo = response.data.data
        console.log("orgaInfo", this.orgaInfo)
      } catch (error) {
        console.error('Error fetching orga data', error)
      }
    },
    openAddSkillModal(job) {
      this.selectedJob = job
    },
    openUpdateJobModal(job) {
      this.selectedJob = job
    },
    openUpdateSkillModal(skill) {
      this.selectSkill = skill
    },
  },
}
</script>
<style scoped>
  .title {
    font-size: xx-large;
    text-align: center;
  }
  .container {
    display: inline-block;
  }
  .Jobname {
    background-color: #303952; /* Couleur de fond */
    padding: 5px; /* Espacement intérieur */
    display: block; /* Pour que le fond s'adapte à la taille du texte */
    margin-bottom: 20px; /* Espacement entre les éléments */
    margin-top: 20px;
    font-size: larger;
  }
  .content {
    font-size: medium;
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: start;
  }
  .buttonBlock {
    border:none !important;
    background: none !important;
    padding: 0;
    outline: none
  }
  .logoStyle {
    width: 50px;
    height: 31px;
    border: none;
  }
  .buttonBlockSkill {
    border:none !important;
    background: none !important;
    padding: 0;
    outline: none
  }
  .logoStyleSkill {
    width: 40px;
    height: 28px;
    border: none;
  }
  ul {
    list-style-type: none;
  }
</style>
