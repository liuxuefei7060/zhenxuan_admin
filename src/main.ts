import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 配置element的国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, { locale: zhCn })
//将应用挂在到挂载点上
app.mount('#app')
