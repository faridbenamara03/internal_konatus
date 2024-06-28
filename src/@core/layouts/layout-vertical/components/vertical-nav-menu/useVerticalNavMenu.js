<<<<<<< HEAD
import { ref, computed } from '@vue/composition-api'
import store from '@/store'

export default function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed({
    get: () => store.state.verticalMenu.isVerticalMenuCollapsed,
    set: val => {
      store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val)
    },
  })

  // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------
  const collapseTogglerIcon = computed(() => {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned'
    }
    return 'close'
  })

  const isMouseHovered = ref(false)

  const updateMouseHovered = val => {
    isMouseHovered.value = val
  }

  const toggleCollapsed = () => {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value
  }

  return {
    isMouseHovered,
    isVerticalMenuCollapsed,
    collapseTogglerIcon,
    toggleCollapsed,
    updateMouseHovered,
  }
}
=======
import { ref, computed } from '@vue/composition-api'
import store from '@/store'

export default function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed({
    get: () => store.state.verticalMenu.isVerticalMenuCollapsed,
    set: val => {
      store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val)
    },
  })

  // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------
  const collapseTogglerIcon = computed(() => {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned'
    }
    return 'close'
  })

  const isMouseHovered = ref(false)

  const updateMouseHovered = val => {
    isMouseHovered.value = val
  }

  const toggleCollapsed = () => {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value
  }

  return {
    isMouseHovered,
    isVerticalMenuCollapsed,
    collapseTogglerIcon,
    toggleCollapsed,
    updateMouseHovered,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
