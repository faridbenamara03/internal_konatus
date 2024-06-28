<<<<<<< HEAD
<template>
  <b-card-code title="Input Groups with Buttons">
    <b-row>
      <b-col
        lg="6"
        class="mb-1"
      >
        <!-- button on right -->
        <b-input-group>
          <b-form-input placeholder="Button on right" />
          <b-input-group-append>
            <b-button variant="outline-primary">
              GO
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col lg="6">
        <!-- button on both side -->
        <b-input-group>
          <b-input-group-prepend>
            <b-button variant="outline-primary">
              <feather-icon icon="SearchIcon" />
            </b-button>
          </b-input-group-prepend>
          <b-form-input placeholder="Button on both side" />
          <b-input-group-append>
            <b-button variant="outline-primary">
              Search !
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeButton }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { codeButton } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      codeButton,
    }
  },
}
</script>
=======
<template>
  <b-card-code title="Input Groups with Buttons">
    <b-row>
      <b-col
        lg="6"
        class="mb-1"
      >
        <!-- button on right -->
        <b-input-group>
          <b-form-input placeholder="Button on right" />
          <b-input-group-append>
            <b-button variant="outline-primary">
              GO
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-col lg="6">
        <!-- button on both side -->
        <b-input-group>
          <b-input-group-prepend>
            <b-button variant="outline-primary">
              <feather-icon icon="SearchIcon" />
            </b-button>
          </b-input-group-prepend>
          <b-form-input placeholder="Button on both side" />
          <b-input-group-append>
            <b-button variant="outline-primary">
              Search !
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <template #code>
      {{ codeButton }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend, BRow, BCol, BButton,
} from 'bootstrap-vue'
import { codeButton } from './code'

export default {
  components: {
    BCardCode,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      codeButton,
    }
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
