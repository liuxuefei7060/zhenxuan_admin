import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 配置element的国际化
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入全局样式
import '@/style/index.scss'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, { locale: zhCn })
console.log(import.meta.env)
//将应用挂在到挂载点上
//svg插件需要配置代码
import 'virtual:svg-icons-register'
//注册全局
// import Svgicon from '@/components/Svgicon/index.vue'
import allComponent from '@/components'
app.use(allComponent)
// app.component('Svgicon', Svgicon)

// import axios from 'axios'

// axios({
//     url:'/api/user/login',
//     method:'post',
//     data:{
//         username:'admin',
//         password:'111111'
//     }
// })

app.mount('#app')
