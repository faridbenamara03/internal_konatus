<<<<<<< HEAD
import ability from './ability'

export const canNavigate = to => to.matched.some(route => ability.can(route.meta.action || 'read', route.meta.resource))

export const _ = undefined
=======
import ability from './ability'

export const canNavigate = to => to.matched.some(route => ability.can(route.meta.action || 'read', route.meta.resource))

export const _ = undefined
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
