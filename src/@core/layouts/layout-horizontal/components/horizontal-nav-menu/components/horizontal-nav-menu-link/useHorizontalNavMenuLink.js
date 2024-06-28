<<<<<<< HEAD
import { ref } from '@vue/composition-api'
import { isNavLinkActive, navLinkProps } from '@core/layouts/utils'

export default function useHorizontalNavMenuLink(item) {
  const isActive = ref(false)

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
=======
import { ref } from '@vue/composition-api'
import { isNavLinkActive, navLinkProps } from '@core/layouts/utils'

export default function useHorizontalNavMenuLink(item) {
  const isActive = ref(false)

  const linkProps = navLinkProps(item)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    linkProps,
    updateIsActive,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
