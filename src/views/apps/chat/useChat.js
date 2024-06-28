<<<<<<< HEAD
export default function useChat() {
  const resolveAvatarBadgeVariant = status => {
    if (status === 'online') return 'success'
    if (status === 'busy') return 'danger'
    if (status === 'away') return 'warning'
    return 'secondary'
  }

  return {
    resolveAvatarBadgeVariant,
  }
}
=======
export default function useChat() {
  const resolveAvatarBadgeVariant = status => {
    if (status === 'online') return 'success'
    if (status === 'busy') return 'danger'
    if (status === 'away') return 'warning'
    return 'secondary'
  }

  return {
    resolveAvatarBadgeVariant,
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
