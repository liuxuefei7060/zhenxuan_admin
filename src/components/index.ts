import Svgicon from '@/components/Svgicon/index.vue'
import { App } from 'vue'

const allGloablComponent = { Svgicon }

//对外暴露对象
export default {
  //方法名务必叫install
  install(app: App) {
    // Object.keys(all).forEach((key) => {

    //     app.component(key, all[key])
    // })
    for (const [key, component] of Object.entries(allGloablComponent)) {
      app.component(key, component)
    }
  },
}
