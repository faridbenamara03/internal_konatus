<<<<<<< HEAD
<template>
  <b-card-code title="Sizing">
    <div class="demo-vertical-spacing">

      <!-- large -->
      <b-input-group
        prepend="@"
        size="lg"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>

      <!-- default -->
      <b-input-group
        prepend="@"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>

      <!-- small -->
      <b-input-group
        size="sm"
        prepend="@"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup, BFormInput,
} from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Sizing">
    <div class="demo-vertical-spacing">

      <!-- large -->
      <b-input-group
        prepend="@"
        size="lg"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>

      <!-- default -->
      <b-input-group
        prepend="@"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>

      <!-- small -->
      <b-input-group
        size="sm"
        prepend="@"
      >
        <b-form-input placeholder="Username" />
      </b-input-group>
    </div>

    <template #code>
      {{ codeSize }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup, BFormInput,
} from 'bootstrap-vue'
import { codeSize } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
  },
  data() {
    return {
      codeSize,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
