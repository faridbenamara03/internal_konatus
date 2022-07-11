<template>
  <div class="d-flex justify-content-center">
    <feather-icon
      v-if="!isCustomIcon"
      :icon="icon"
    />
    <custom-icon
      v-if="isCustomIcon"
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
      isCustomIcon: false,
    }
  },
  mounted() {
    if (this.item.type) {
      switch (this.item.type) {
        case 'root':
          this.isCustomIcon = true
          break
        case 'portfolio':
          this.icon = 'HomeIcon'
          break
        case 'program':
          this.isCustomIcon = true
          break
        case 'project':
          this.icon = 'FolderPlusIcon'
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
