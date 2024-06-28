<<<<<<< HEAD
<template>
  <b-modal
    id="modal-loader"
    ref="loader-modal"
    v-model="loadershow"
    title="Import file"
    centered
    no-fade
    hide-backdrop
    static
    @hide="hideLoaderModal"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Import file
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideLoaderModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div
      id="loader-2"
      class="loader"
    >
      <span />
      <span />
      <span />
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideLoaderModal"
      >
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<style scoped>
/* ALL LOADERS */
.loader {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
}

#loader-2 span {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #d86929;
  margin: 35px 5px;
}

#loader-2 span:nth-child(1) {
  animation: bounce 1s ease-in-out infinite;
}

#loader-2 span:nth-child(2) {
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader-2 span:nth-child(3) {
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce {

  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>

<script>
import { BButton, BModal } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    }
  },
  computed: {
    loadershow() {
      return this.$store.state.teamState.loaderModalShow
    }
  },
  methods: {
    hideLoaderModal() {
      this.$refs["loader-modal"].hide()
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
=======
<template>
  <b-modal
    id="modal-loader"
    ref="loader-modal"
    v-model="loadershow"
    title="Import file"
    centered
    no-fade
    hide-backdrop
    static
    @hide="hideLoaderModal"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Import file
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideLoaderModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div
      id="loader-2"
      class="loader"
    >
      <span />
      <span />
      <span />
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideLoaderModal"
      >
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<style scoped>
/* ALL LOADERS */
.loader {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
}

#loader-2 span {
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #d86929;
  margin: 35px 5px;
}

#loader-2 span:nth-child(1) {
  animation: bounce 1s ease-in-out infinite;
}

#loader-2 span:nth-child(2) {
  animation: bounce 1s ease-in-out 0.33s infinite;
}

#loader-2 span:nth-child(3) {
  animation: bounce 1s ease-in-out 0.66s infinite;
}

@keyframes bounce {

  0%,
  75%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25% {
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
</style>

<script>
import { BButton, BModal } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    }
  },
  computed: {
    loadershow() {
      return this.$store.state.teamState.loaderModalShow
    }
  },
  methods: {
    hideLoaderModal() {
      this.$refs["loader-modal"].hide()
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
