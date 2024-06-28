<<<<<<< HEAD
import { $themeBreakpoints } from '@themeConfig'

export default {
  watch: {
    $route() {
      if (this.$store.state.app.windowWidth < $themeBreakpoints.xl) {
        this.isVerticalMenuActive = false
      }
    },
  },
}
=======
import { $themeBreakpoints } from '@themeConfig'

export default {
  watch: {
    $route() {
      if (this.$store.state.app.windowWidth < $themeBreakpoints.xl) {
        this.isVerticalMenuActive = false
      }
    },
  },
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
