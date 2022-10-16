<template>
  <b-modal id="modal-add-resource" ref="add-resource-modal" centered hide-backdrop content-class="shadow" hide-header hide-footer size="sm">
    <b-card-text>
      <div class="d-flex mb-1">
        <div style="width:100px">
          <b-avatar size="100" variant="primary" text="BV" />
        </div>
        <div style="width:calc(100% - 100px);display:flex">
          <div style="margin-top:auto;margin-bottom:auto;margin-left:16px">
            <div style="margin-bottom:6px;">
              <b>Paul Michel</b>
            </div>
            <div style="margin-bottom:6px;">
              TEAMS
            </div>
            <div>
              <b-badge pill variant="light-success">
                Paid
              </b-badge>
            </div>
          </div>
        </div>
      </div>
      <div style="font-size:10px;" class="mb-1">
        <div class="mb-1">
          <div><b style="color:#20C997">PRIMARY</b></div>
          <div>
            Developer
          </div>
        </div>
        <div class="mb-1">
          <div><b style="color:#00BBF5">SECONDARY</b></div>
          <div>
            Internal Test
          </div>
        </div>
        <div>
          <div><b style="color:#D68232">BEST EFFORT</b></div>
          <div style="height:14.5px">

          </div>
        </div>
      </div>
      <div>
        <div class="mb-1">
          <b-button block variant="primary" @click="updateResourceAssignState">Assign</b-button>
        </div>
        <div>
          <b-button block variant="outline-danger">Delete</b-button>
        </div>
      </div>
    </b-card-text>
  </b-modal>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
import {
  BModal, VBModal, BAvatar, BBadge, BButton
  // BCardText, BRow, BCol
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BModal,
    BAvatar,
    BBadge,
    BButton,
    // BCardText,
    // BRow,
    // BCol
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    hideModal() {
      this.$refs['add-resource-modal'].hide()
    },
    updateResourceAssignState() {
      this.$store.commit('teamState/RESOURCE_ADD')
    }
  }
}
</script>
