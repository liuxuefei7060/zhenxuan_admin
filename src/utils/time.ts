export const getTimeMsg = () => {
  let hour = new Date().getHours()
  let msg = ''
  if (hour <= 9) {
    msg = '早上好'
  } else if (hour <= 12) {
    msg = '上午好'
  } else if (hour <= 18) {
    msg = '下午好'
  } else {
    msg = '晚上好'
  }
  console.log(msg)
  return msg
}
