import { defineStore } from 'pinia'

export interface IHomeState {
  home: Object
}
const { $apiFetch } = useNuxtApp()

export const useHomeStore = defineStore('home', {
  state: (): IHomeState => ({
    home: [],
  }),
  getters: {
    getHome(state){
        return state.home
      }
  },
  actions: {
    async get() {
      try {
        const data = await $apiFetch('/api/user/services')
          this.home = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }

    },
    refresh () {
      get()
    },
  },
})
