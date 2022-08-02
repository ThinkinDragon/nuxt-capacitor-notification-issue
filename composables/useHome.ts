export function useHome() {
  
const { $apiFetch } = useNuxtApp()

async function getHomeData() {
    return await $apiFetch('/api/user/services')
  }
  async function csrf() {
    return await $apiFetch('/sanctum/csrf-cookie')
  }
  return {getHomeData,csrf}
}