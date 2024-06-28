<<<<<<< HEAD
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    plugins: {
      type: Array,
      default: null,
    },
    styles: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options, this.plugins, this.styles)
  },
}
</script>
=======
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    plugins: {
      type: Array,
      default: null,
    },
    styles: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options, this.plugins, this.styles)
  },
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
