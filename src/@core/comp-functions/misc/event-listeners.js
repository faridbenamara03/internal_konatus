<<<<<<< HEAD
import { ref, onUnmounted } from '@vue/composition-api'

export const useScrollListener = () => {
  const scrolledTo = ref(null)

  const scrollHandler = () => {
    scrolledTo.value = window.scrollY
  }

  window.addEventListener('scroll', scrollHandler)
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return {
    scrolledTo,
  }
}

export const _ = null
=======
import { ref, onUnmounted } from '@vue/composition-api'

export const useScrollListener = () => {
  const scrolledTo = ref(null)

  const scrollHandler = () => {
    scrolledTo.value = window.scrollY
  }

  window.addEventListener('scroll', scrollHandler)
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return {
    scrolledTo,
  }
}

export const _ = null
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
