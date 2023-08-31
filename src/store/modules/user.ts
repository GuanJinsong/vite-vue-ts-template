import store from '@/store/index.ts'
import { defineStore } from 'pinia'

type User = {
  username: string
}

const userStore = defineStore({
  id: 'user',
  state: (): User => ({
    username: '',
  }),
  actions: {
    SET_USERNAME(username: string) {
      this.username = username
    },
  },
})

export default function useUserStore() {
  return userStore(store)
}
