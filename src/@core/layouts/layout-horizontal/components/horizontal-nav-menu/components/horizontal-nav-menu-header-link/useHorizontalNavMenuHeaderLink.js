<<<<<<< HEAD
import { ref } from '@vue/composition-api'
import { isNavLinkActive } from '@core/layouts/utils'

export default function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    updateIsActive,
  }
}
=======
import { ref } from '@vue/composition-api'
import { isNavLinkActive } from '@core/layouts/utils'

export default function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    updateIsActive,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
