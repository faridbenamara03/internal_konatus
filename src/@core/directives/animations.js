<<<<<<< HEAD
export const heightFade = {
  /* eslint-disable no-param-reassign */
  inserted(el, binding) {
    const height = `${el.offsetHeight}px`

    if (binding.modifiers.appear) {
      el.style.overflow = 'hidden'
      el.style.maxHeight = '0px'
      el.style.opacity = 0

      // Focus the element
      setTimeout(() => {
        el.style.maxHeight = height
        el.style.opacity = 1
        setTimeout(() => {
          el.style.overflow = 'unset'
        }, 300)
      }, 100)
    } else {
      el.style.maxHeight = height
    }
  },
  unbind(el) {
    if (el.style === undefined) return
    el.style.overflow = 'hidden'
    el.style.maxHeight = '0px'
    el.style.opacity = 0
  },
  /* eslint-enable no-param-reassign */
}

export const temp = 2
=======
export const heightFade = {
  /* eslint-disable no-param-reassign */
  inserted(el, binding) {
    const height = `${el.offsetHeight}px`

    if (binding.modifiers.appear) {
      el.style.overflow = 'hidden'
      el.style.maxHeight = '0px'
      el.style.opacity = 0

      // Focus the element
      setTimeout(() => {
        el.style.maxHeight = height
        el.style.opacity = 1
        setTimeout(() => {
          el.style.overflow = 'unset'
        }, 300)
      }, 100)
    } else {
      el.style.maxHeight = height
    }
  },
  unbind(el) {
    if (el.style === undefined) return
    el.style.overflow = 'hidden'
    el.style.maxHeight = '0px'
    el.style.opacity = 0
  },
  /* eslint-enable no-param-reassign */
}

export const temp = 2
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
