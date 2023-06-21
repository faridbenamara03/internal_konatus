<template>
    <b-modal id="portfolio-reporting-plan-update" ref="my-modal" title="Create New" centered no-fade hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button @click="hideModal" variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideModal">Cancel</b-button>
        <b-button variant="primary" @click="onUpdate" >Update</b-button>
      </template>
    </b-modal>
  </template>

  <script>
  import {
    BButton, BModal,
  } from 'bootstrap-vue'

  export default {
    components: {
      BButton,
      BModal,
    },
    methods: {
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      onUpdate() {
          this.$emit('onUpdate')
          this.$refs['my-modal'].hide()
      },
    },
  }
  </script>

  <style lang="scss">
  .optionBlock {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
  }

  @import '@core/scss/vue/pages/dashboard-portfolio.scss';
  </style>
