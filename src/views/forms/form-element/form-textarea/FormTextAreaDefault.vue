<<<<<<< HEAD
<template>
  <b-card-code
    title="Default"
  >
    <b-card-text>
      Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and
      contextual states.
    </b-card-text>
    <label for="textarea-default">Textarea</label>
    <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="3"
    />

    <template #code>
      {{ codeDefault }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeDefault } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea,
  },
  data() {
    return {
      codeDefault,
    }
  },
}
</script>
=======
<template>
  <b-card-code
    title="Default"
  >
    <b-card-text>
      Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and
      contextual states.
    </b-card-text>
    <label for="textarea-default">Textarea</label>
    <b-form-textarea
      id="textarea-default"
      placeholder="Textarea"
      rows="3"
    />

    <template #code>
      {{ codeDefault }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormTextarea, BCardText } from 'bootstrap-vue'
import { codeDefault } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormTextarea,
  },
  data() {
    return {
      codeDefault,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
