<<<<<<< HEAD
import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed,
  },
  getters: {},
  mutations: {
    UPDATE_VERTICAL_MENU_COLLAPSED(state, val) {
      state.isVerticalMenuCollapsed = val
    },
  },
  actions: {},
}
=======
import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed,
  },
  getters: {},
  mutations: {
    UPDATE_VERTICAL_MENU_COLLAPSED(state, val) {
      state.isVerticalMenuCollapsed = val
    },
  },
  actions: {},
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
