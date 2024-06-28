<<<<<<< HEAD
// We haven't added icon's computed property because it makes this mixin coupled with UI
export const togglePasswordVisibility = {
  data() {
    return {
      passwordFieldType: 'password',
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}

export const _ = null
=======
// We haven't added icon's computed property because it makes this mixin coupled with UI
export const togglePasswordVisibility = {
  data() {
    return {
      passwordFieldType: 'password',
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}

export const _ = null
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
