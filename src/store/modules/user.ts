import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import { UserState } from './type'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'), //用户的唯一标识
    }
  },
  actions: {
    async userLogin(data: LoginForm) {
      console.log('-----登录请求------------', data)
      let result = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
        localStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
      return result
    },
  },
  getters: {},
})

export default useUserStore
