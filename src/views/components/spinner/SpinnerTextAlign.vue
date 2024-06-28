<<<<<<< HEAD
<template>
  <b-card-code
    title="Text Alignment"
  >
    <b-card-text>Using text alignment utility classes:</b-card-text>

    <div class="text-center">
      <b-spinner
        variant="primary"
        label="Text Centered"
      />
    </div>

    <template #code>
      {{ codeTextAlign }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeTextAlign } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeTextAlign,
    }
  },
}
</script>
=======
<template>
  <b-card-code
    title="Text Alignment"
  >
    <b-card-text>Using text alignment utility classes:</b-card-text>

    <div class="text-center">
      <b-spinner
        variant="primary"
        label="Text Centered"
      />
    </div>

    <template #code>
      {{ codeTextAlign }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BSpinner, BCardText } from 'bootstrap-vue'
import { codeTextAlign } from './code'

export default {
  components: {
    BCardCode,
    BSpinner,
    BCardText,
  },
  data() {
    return {
      codeTextAlign,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
