<<<<<<< HEAD
<template>
  <b-card-code title="Validation states">
    <b-card-text>
      <code>&lt;b-form-datepicker&gt;</code>
      <span> supports invalid and valid styling via the boolean </span>
      <code>state</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <label for="datepicker-invalid">Choose a date (invalid style)</label>
      <b-form-datepicker
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        id="datepicker-invalid"
        :state="false"
        class="mb-2"
      />
      <label for="datepicker-valid">Choose a date (valid style)</label>
      <b-form-datepicker
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        id="datepicker-valid"
        :state="true"
      />
    </div>

    <template #code>
      {{ codeValidation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeValidation } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codeValidation,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Validation states">
    <b-card-text>
      <code>&lt;b-form-datepicker&gt;</code>
      <span> supports invalid and valid styling via the boolean </span>
      <code>state</code>
      <span> prop.</span>
    </b-card-text>

    <div>
      <label for="datepicker-invalid">Choose a date (invalid style)</label>
      <b-form-datepicker
        id="datepicker-invalid"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        :state="false"
        class="mb-2"
      />
      <label for="datepicker-valid">Choose a date (valid style)</label>
      <b-form-datepicker
        id="datepicker-valid"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        :state="true"
      />
    </div>

    <template #code>
      {{ codeValidation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormDatepicker, BCardText } from 'bootstrap-vue'
import { codeValidation } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormDatepicker,
  },
  data() {
    return {
      codeValidation,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
