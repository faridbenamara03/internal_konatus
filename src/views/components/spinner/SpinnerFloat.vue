<<<<<<< HEAD
<template>
  <b-card-code title="Float">
    <b-card-text>Using float utility classes:</b-card-text>
    <div class="clearfix">
      <b-spinner
        class="float-right"
        label="Floated Right"
      />
    </div>

    <template #code>
      {{ codeFloat }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeFloat } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeFloat,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Float">
    <b-card-text>Using float utility classes:</b-card-text>
    <div class="clearfix">
      <b-spinner
        class="float-right"
        label="Floated Right"
      />
    </div>

    <template #code>
      {{ codeFloat }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeFloat } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeFloat,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
