//登录接口需要携带参数ts类型
export interface LoginForm {
  username: string
  password: string
}

interface DataType {
  token: string
}

//登录接口返回数据类型
export interface LoginResponseData {
  code: number
  data: DataType
}

interface UserInfo {
  userid: number
  avatar: string
  username: string
  password: string
  des: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface User {
  checkUser: UserInfo
}

//定义服务器返回的用户相关的数据类型
export interface UserResponseData {
  code: number
  data: User
}
