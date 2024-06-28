<<<<<<< HEAD
<template>
  <b-modal id="modal-no-backdrop" ref="team-detail-modal" hide-backdrop content-class="shadow" title="TeamB Details"
    hide-footer size="lg">
    <template #modal-header>
      <h5 class="modal-title">
        TeamB Details
      </h5>
      <div class="modal-actions">
        <b-button variant="outline-primary" @click="hideModal">
          <feather-icon icon="XIcon" size="18" />
        </b-button>
      </div>
    </template>
    <b-card-text>
      <div class="p-1 mb-1" style="width:100%;text-align:center;background-color:#FFF2">
        PHP Back-end W01
      </div>
      <div class="d-flex mb-1" style="justify-content:space-between;">
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#BD2020;margin-top:4px;margin-right:5px;" />
          <div>Spent</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#82AD3D;margin-top:4px;margin-right:5px;" />
          <div>Normal</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#804806;margin-top:4px;margin-right:5px;" />
          <div>Extended</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#6A0737;margin-top:4px;margin-right:5px;" />
          <div>Max</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#3A7A9E;margin-top:4px;margin-right:5px;" />
          <div>Engaged</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#1A5779;margin-top:4px;margin-right:5px;" />
          <div>Real Estimated</div>
        </div>
      </div>
      <div style="position:relative">
        <b-row no-gutters>
          <b-col cols="5" class="p-1" v-on:mouseover="handlemouseover"
            style="background-color:#82AD3D;text-align:end;cursor:pointer;">80</b-col>
          <b-col cols="5" class="p-1" style="background-color:#804806;text-align:end;cursor:pointer;">60</b-col>
          <b-col cols="2" class="p-1" style="background-color:#6A0737;text-align:end;cursor:pointer;">120</b-col>
        </b-row>
        <b-row no-gutters style="margin-top:3px">
          <b-col cols="6" class="p-1" style="background-color:#3A7A9E;text-align:end;cursor:pointer;">96</b-col>
          <b-col cols="1" class="p-1" style="background-color:#1A5779;text-align:end;cursor:pointer;">120</b-col>
        </b-row>
        <div style="width:100%;height:50px;" />
        <div style="position:absolute;top:0px;left:334px;height:108px;border-right:#BD2020 4px solid;">
          <div class="rounded d-flex" style="background-color:#BD2020;position:relative;top:105px;left:24px">
            <div class="mr-1 ml-1" style="margin:auto;margin-top:4px;margin-bottom:4px;">
              96
            </div>
          </div>
        </div>
        <!-- <div style="width:5px;height:100%;background-color:red;position:absolute"></div> -->
      </div>
      <div class="mt-1">
        <div class="containerSelf">
          <div class="pt-1 pb-1 rounded-left pl-1 pr-1" style="width: 300px">
            Team Member
          </div>
          <div class="containerSelf p-0" style="width: calc(100% - 300px)">
            <div class="sub-main pt-1 pb-1">
              Worked/Capacity
            </div>
            <div class="sub-main pt-1 pb-1">
              Normal Capacity
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div class="pt-1 pb-1 pl-1 pr-1 containerSelf" style="background-color:#333A4F;margin:0.5px;width: 300px">
            <div>
              Travis Roach
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div class="containerSelf p-0" style="width: calc(100% - 300px)">
            <div class="sub-main pt-1 pb-1" style="background-color:#6A0737;margin:0.5px;">
              4
            </div>
            <div class="sub-main pt-1 pb-1" style="background-color:#333A4F;margin:0.5px;">
              8
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div class="pt-1 pb-1 pl-1 pr-1 containerSelf" style="background-color:#333A4F;margin:0.5px;width: 300px">
            <div>
              Ciaran Bradford
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div class="containerSelf p-0" style="width: calc(100% - 300px)">
            <div class="sub-main pt-1 pb-1" style="background-color:#804806;margin:0.5px;">
              8
            </div>
            <div class="sub-main pt-1 pb-1" style="background-color:#333A4F;margin:0.5px;">
              20
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div class="pt-1 pb-1 pl-1 pr-1 containerSelf" style="background-color:#333A4F;margin:0.5px;width: 300px">
            <div>
              George Logan
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div class="containerSelf p-0" style="width: calc(100% - 300px)">
            <div class="sub-main pt-1 pb-1" style="background-color:#82AD3D;margin:0.5px;">
              40
            </div>
            <div class="sub-main pt-1 pb-1" style="background-color:#333A4F;margin:0.5px;">
              40
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div class="pt-1 pb-1 pl-1 pr-1 containerSelf" style="background-color:#333A4F;margin:0.5px;width: 300px">
            <div>
              Angelica Russo
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div class="containerSelf p-0" style="width: calc(100% - 300px)">
            <div class="sub-main pt-1 pb-1" style="background-color:#82AD3D;margin:0.5px;">
              40
            </div>
            <div class="sub-main pt-1 pb-1" style="background-color:#333A4F;margin:0.5px;">
              40
            </div>
          </div>
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
  BModal, VBModal, BCardText, BButton, BRow, BCol
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BModal,
    BCardText,
    BButton,
    BRow,
    BCol
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
    handlemouseover() {
      console.log(111111223)
    },
    hideModal() {
      this.$refs['team-detail-modal'].hide()
    }
  }
}
</script>
=======
<template>
  <b-modal
    id="modal-no-backdrop"
    ref="team-detail-modal"
    hide-backdrop
    content-class="shadow"
    title="TeamB Details"
    hide-footer
    size="lg"
  >
    <template #modal-header>
      <h5 class="modal-title">
        TeamB Details
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <b-card-text>
      <div
        class="p-1 mb-1"
        style="width:100%;text-align:center;background-color:#FFF2"
      >
        PHP Back-end W01
      </div>
      <div
        class="d-flex mb-1"
        style="justify-content:space-between;"
      >
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#BD2020;margin-top:4px;margin-right:5px;" />
          <div>Spent</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#82AD3D;margin-top:4px;margin-right:5px;" />
          <div>Normal</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#804806;margin-top:4px;margin-right:5px;" />
          <div>Extended</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#6A0737;margin-top:4px;margin-right:5px;" />
          <div>Max</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#3A7A9E;margin-top:4px;margin-right:5px;" />
          <div>Engaged</div>
        </div>
        <div class="d-flex">
          <div style="height:14px;width:14px;background-color:#1A5779;margin-top:4px;margin-right:5px;" />
          <div>Real Estimated</div>
        </div>
      </div>
      <div style="position:relative">
        <b-row no-gutters>
          <b-col
            cols="5"
            class="p-1"
            style="background-color:#82AD3D;text-align:end;cursor:pointer;"
            @mouseover="handlemouseover"
          >80</b-col>
          <b-col
            cols="5"
            class="p-1"
            style="background-color:#804806;text-align:end;cursor:pointer;"
          >
            60
          </b-col>
          <b-col
            cols="2"
            class="p-1"
            style="background-color:#6A0737;text-align:end;cursor:pointer;"
          >
            120
          </b-col>
        </b-row>
        <b-row
          no-gutters
          style="margin-top:3px"
        >
          <b-col
            cols="6"
            class="p-1"
            style="background-color:#3A7A9E;text-align:end;cursor:pointer;"
          >
            96
          </b-col>
          <b-col
            cols="1"
            class="p-1"
            style="background-color:#1A5779;text-align:end;cursor:pointer;"
          >
            120
          </b-col>
        </b-row>
        <div style="width:100%;height:50px;" />
        <div style="position:absolute;top:0px;left:334px;height:108px;border-right:#BD2020 4px solid;">
          <div
            class="rounded d-flex"
            style="background-color:#BD2020;position:relative;top:105px;left:24px"
          >
            <div
              class="mr-1 ml-1"
              style="margin:auto;margin-top:4px;margin-bottom:4px;"
            >
              96
            </div>
          </div>
        </div>
        <!-- <div style="width:5px;height:100%;background-color:red;position:absolute"></div> -->
      </div>
      <div class="mt-1">
        <div class="containerSelf">
          <div
            class="pt-1 pb-1 rounded-left pl-1 pr-1"
            style="width: 300px"
          >
            Team Member
          </div>
          <div
            class="containerSelf p-0"
            style="width: calc(100% - 300px)"
          >
            <div class="sub-main pt-1 pb-1">
              Worked/Capacity
            </div>
            <div class="sub-main pt-1 pb-1">
              Normal Capacity
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div
            class="pt-1 pb-1 pl-1 pr-1 containerSelf"
            style="background-color:#333A4F;margin:0.5px;width: 300px"
          >
            <div>
              Travis Roach
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div
            class="containerSelf p-0"
            style="width: calc(100% - 300px)"
          >
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#6A0737;margin:0.5px;"
            >
              4
            </div>
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#333A4F;margin:0.5px;"
            >
              8
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div
            class="pt-1 pb-1 pl-1 pr-1 containerSelf"
            style="background-color:#333A4F;margin:0.5px;width: 300px"
          >
            <div>
              Ciaran Bradford
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div
            class="containerSelf p-0"
            style="width: calc(100% - 300px)"
          >
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#804806;margin:0.5px;"
            >
              8
            </div>
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#333A4F;margin:0.5px;"
            >
              20
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div
            class="pt-1 pb-1 pl-1 pr-1 containerSelf"
            style="background-color:#333A4F;margin:0.5px;width: 300px"
          >
            <div>
              George Logan
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div
            class="containerSelf p-0"
            style="width: calc(100% - 300px)"
          >
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#82AD3D;margin:0.5px;"
            >
              40
            </div>
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#333A4F;margin:0.5px;"
            >
              40
            </div>
          </div>
        </div>

        <div class="containerSelf">
          <div
            class="pt-1 pb-1 pl-1 pr-1 containerSelf"
            style="background-color:#333A4F;margin:0.5px;width: 300px"
          >
            <div>
              Angelica Russo
            </div>
            <div>
              <feather-icon icon="ChevronUpIcon" />
            </div>
          </div>
          <div
            class="containerSelf p-0"
            style="width: calc(100% - 300px)"
          >
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#82AD3D;margin:0.5px;"
            >
              40
            </div>
            <div
              class="sub-main pt-1 pb-1"
              style="background-color:#333A4F;margin:0.5px;"
            >
              40
            </div>
          </div>
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
  BModal, VBModal, BCardText, BButton, BRow, BCol
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BModal,
    BCardText,
    BButton,
    BRow,
    BCol
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
    handlemouseover() {
      console.log(111111223)
    },
    hideModal() {
      this.$refs['team-detail-modal'].hide()
    }
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
