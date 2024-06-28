<<<<<<< HEAD
<template>
  <div class="d-flex justify-content-center">
    <feather-icon
      v-if="item.type !== 'program'"
      :icon="icon"
    />
    <feather-icon
      v-else
      icon="BookIcon"
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
        case 'company':
          this.icon = 'PackageIcon'
          break
        case 'organization':
          this.icon = 'GlobeIcon'
          break
        case 'organization-unit':
          this.icon = 'GlobeIcon'
          break
        case 'portfolio':
          this.icon = 'HomeIcon'
          break
        case 'project':
          this.icon = 'FolderPlusIcon'
          break
        case 'subproject':
          this.icon = 'FolderPlusIcon'
          break
        case 'team':
          this.icon = 'UsersIcon'
          break
        case 'unit':
          this.icon = 'LayersIcon'
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
=======
<template>
  <div class="d-flex justify-content-center">
    <feather-icon
      v-if="item.type !== 'program'"
      :icon="icon"
    />
    <feather-icon
      v-else
      icon="BookIcon"
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
        case 'company':
          this.icon = 'PackageIcon'
          break
        case 'organization':
          this.icon = 'GlobeIcon'
          break
        case 'organization-unit':
          this.icon = 'GlobeIcon'
          break
        case 'portfolio':
          this.icon = 'HomeIcon'
          break
        case 'project':
          this.icon = 'FolderPlusIcon'
          break
        case 'subproject':
          this.icon = 'FolderPlusIcon'
          break
        case 'team':
          this.icon = 'UsersIcon'
          break
        case 'unit':
          this.icon = 'LayersIcon'
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
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
