<<<<<<< HEAD
import { ref } from '@vue/composition-api'
import { isNavGroupActive } from '@core/layouts/utils'

export default function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  const isOpen = ref(false)

  const updateGroupOpen = val => {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val
  }

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavGroupActive(item.children)
  }

  return {
    isOpen,
    isActive,
    updateGroupOpen,
    updateIsActive,
  }
}
=======
import { ref } from '@vue/composition-api'
import { isNavGroupActive } from '@core/layouts/utils'

export default function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  const isOpen = ref(false)

  const updateGroupOpen = val => {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val
  }

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavGroupActive(item.children)
  }

  return {
    isOpen,
    isActive,
    updateGroupOpen,
    updateIsActive,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
