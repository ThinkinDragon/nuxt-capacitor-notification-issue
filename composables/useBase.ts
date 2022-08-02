export function useBase() {
  function localize(name) {
    localStorage.setItem('user', JSON.stringify({ name }))
  }

  function getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  function removeUser() {
    localStorage.removeItem('user')
  }

  const isLoggedIn = computed(() => {
    if (process.client) {
      return !!localStorage.getItem('user')
    }
  })

  return { localize, getUser, removeUser, isLoggedIn }
}
