<<<<<<< HEAD
<template>
  <b-card-code
    title="Drag and Drop support"
  >
    <b-card-text>
      <span>Drop mode is enabled by default. It can disabled by setting the </span>
      <code>no-drop</code>
      <span>prop. </span>
    </b-card-text>

    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      no-drop
    />

    <template #code>
      {{ codeDragDrop }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeDragDrop } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      codeDragDrop,
    }
  },
}
</script>
=======
<template>
  <b-card-code
    title="Drag and Drop support"
  >
    <b-card-text>
      <span>Drop mode is enabled by default. It can disabled by setting the </span>
      <code>no-drop</code>
      <span>prop. </span>
    </b-card-text>

    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      no-drop
    />

    <template #code>
      {{ codeDragDrop }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeDragDrop } from './code'

export default {
  components: {
    BCardCode,
    BFormFile,
    BCardText,
  },
  data() {
    return {
      codeDragDrop,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
