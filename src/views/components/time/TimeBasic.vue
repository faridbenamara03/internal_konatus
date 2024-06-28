<<<<<<< HEAD
<template>
  <b-card-code title="Time Basic">
    <b-card-text>
      <span>BootstrapVue's custom </span>
      <code>&lt;b-time&gt;</code>
      <span>
        component generates a WAI-ARIA compliant time selection widget, which can be used to control other components,
        or can be used to create customized time picker inputs.
      </span>
    </b-card-text>

    <b-time locale="en" />

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BTime, BCardText,
} from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTime,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Time Basic">
    <b-card-text>
      <span>BootstrapVue's custom </span>
      <code>&lt;b-time&gt;</code>
      <span>
        component generates a WAI-ARIA compliant time selection widget, which can be used to control other components,
        or can be used to create customized time picker inputs.
      </span>
    </b-card-text>

    <b-time locale="en" />

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BTime, BCardText,
} from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTime,
  },
  data() {
    return {
      codeBasic,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
