<template>
  <div class="org-demand-view">
    <div class="org-row org-bold org-table-header org-uppercase">
      <div class="part1">
        <div class="header mr-1">
          {{ c_fields_a[0] }}
        </div>
        <div class="child1 mr-1">
          {{ c_fields_a[1] }}
        </div>
        <div class="child2 mr-1">
          {{ c_fields_a[2] }}
        </div>
      </div>
      <div class="part2">
        <div class="data-child mr-1 org-uppercase" v-for="(team, index) in c_teams" :key="index">
          {{ team.title }}
        </div>
      </div>
    </div>
    <div v-for="(item, index) in c_data_a" :key="index">
      <div class="org-row org-sub-header org-bold org-table-row org-uppercase color-white header-shadow-btm row-header-bg">
        {{ item.title }}
      </div>
      <div v-for="(item1, index1) in item.children" :key="index1">
        <div class="org-row org-bold org-sub-header org-table-row org-uppercase color-white row-header-bg border-btm-lgt" :class="{'inner-sdw': index1 === 0}">
          <div class="part1">
            <div class="header mr-1" v-on:click="onCollapseCLick(index1)" style="cursor:pointer">
              <feather-icon :icon="c_opened === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
              {{ item1.title }}
            </div>
            <div class="child1 mr-1">
              {{ item1.gate }}
            </div>
            <div class="child2 mr-1">
              {{ item1.next_gate }}
            </div>
          </div>
          <div class="part2">
            <div v-for="(item2, index2) in item1.data" :key="index2" class="data-child mr-1">
              {{ item2 }}
            </div>
          </div>
        </div>
        <div v-if="index1 === c_opened">
          <div v-for="(item3, index3) in item1.children" :key="index3" class="org-row org-table-row font-14 border-bottom-dm">
            <div class="part1">
              <div class="header mr-1 pl-4 org-bold">
                {{ item3.title }}
              </div>
              <div class="child1 mr-1">
                {{ item3.gate }}
              </div>
              <div class="child2 mr-1">
                {{ item3.next_gate }}
              </div>
            </div>
            <div class="part2">
              <div v-for="(item4, index4) in item3.data" :key="index4" class="data-child mr-1">
                {{ item4 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="org-row org-sub-header org-table-row color-white row-header-bg border-btm-lgt color-cyan">
      <div class="part1">
        <div class="header mr-1 org-uppercase">
          Total Team capacity
        </div>
        <div class="child1 mr-1">
          <div class="d-flex" style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;">
            <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
              Info
            </div>
            <div>
              <feather-icon icon="PlusIcon" style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;" />
            </div>
          </div>
        </div>
        <div class="child2 mr-1">
          <div class="d-flex" style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;">
            <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
              Info
            </div>
            <div>
              <feather-icon icon="PlusIcon" style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;" />
            </div>
          </div>
        </div>
      </div>
      <div class="part2">
        <div v-for="(item5, index5) in c_total_data" :key="index5" class="data-child mr-1">
          {{ item5 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      opened: 0,
    }
  },
  computed: {
    c_opened() {
      return this.opened
    },
    c_teams() {
      return this.$store.state.databaseState.teamData
    },
    c_fields_a() {
      return this.$store.state.orgnizationState.fields
    },
    c_data_a() {
      return this.$store.state.orgnizationState.unitDemandData
    },
    c_total_data() {
      return this.$store.state.orgnizationState.total_data
    }
  },
  methods: {
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashborad-org-demand.scss';
</style>
