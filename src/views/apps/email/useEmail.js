<<<<<<< HEAD
export default function useEmail() {
  const resolveLabelColor = label => {
    if (label === 'personal') return 'success'
    if (label === 'company') return 'primary'
    if (label === 'important') return 'warning'
    if (label === 'private') return 'danger'
    return 'secondary'
  }

  return {
    resolveLabelColor,
  }
}
=======
export default function useEmail() {
  const resolveLabelColor = label => {
    if (label === 'personal') return 'success'
    if (label === 'company') return 'primary'
    if (label === 'important') return 'warning'
    if (label === 'private') return 'danger'
    return 'secondary'
  }

  return {
    resolveLabelColor,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
