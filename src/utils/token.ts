export const TOKEN_SET = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

export const TOKEN_GET = () => {
  let token = localStorage.getItem('TOKEN')
  return token ? token : ''
}
