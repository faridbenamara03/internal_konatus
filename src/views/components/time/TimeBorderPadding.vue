<<<<<<< HEAD
<template>
  <b-card-code title="Border and padding">
    <b-card-text>
      Fancy a time control with a border with padding? Use Bootstrap's border and padding utility classes to add borders
      and padding:
    </b-card-text>

    <b-time
      class="border rounded p-2"
      locale="en"
    />

    <template #code>
      {{ codeBorderPadding }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTime, BCardText } from 'bootstrap-vue'
import { codeBorderPadding } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTime,
  },
  data() {
    return {
      codeBorderPadding,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Border and padding">
    <b-card-text>
      Fancy a time control with a border with padding? Use Bootstrap's border and padding utility classes to add borders
      and padding:
    </b-card-text>

    <b-time
      class="border rounded p-2"
      locale="en"
    />

    <template #code>
      {{ codeBorderPadding }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTime, BCardText } from 'bootstrap-vue'
import { codeBorderPadding } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTime,
  },
  data() {
    return {
      codeBorderPadding,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
