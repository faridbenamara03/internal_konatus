<template>
  <div class="d-flex justify-content-center">
    <feather-icon
      v-if="item.type !== 'root' && item.type !== 'program'"
      :icon="icon"
    />
    <custom-icon
      v-else
      :name="item.type"
    />
  </div>
</template>

<script>
export default {
  name: 'NavMenuIcon',
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: Boolean,
  },
  data() {
    return {
      icon: '',
    }
  },
  mounted() {
    if (this.item.type) {
      switch (this.item.type) {
        case 'portfolio':
          this.icon = 'HomeIcon'
          break
        case 'project':
          this.icon = 'FolderPlusIcon'
          break
        case 'team':
          this.icon = 'UsersIcon'
          break
        case 'user':
          this.icon = 'UserIcon'
          break
        default:
          break
      }
    } else {
      this.icon = 'BriefcaseIcon'
    }
  },
}
</script>
