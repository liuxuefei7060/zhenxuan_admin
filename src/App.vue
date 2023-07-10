<template>
  <div>
    <router-view></router-view>
  </div>
  <!-- <div>
    asdf
    <h1>我是根硕</h1>
    <div>
      <el-button type="primary" :icon="Plus">主要模式</el-button>
      <Test></Test>
    </div>
  </div> -->
</template>

<script setup lang="ts">
// import { Plus } from '@element-plus/icons-vue'
// import Test from '@/components/Test.vue'
// const str = '我爱你祖国'
import { onMounted } from 'vue'
import request from '@/utils/request'
onMounted(() => {
  request({
    url: 'user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  })
})
</script>

<style scoped lang="scss">
// .box {
//   width: 400px;
//   height: 400px;
//   background: black;
//   h1 {
//     color: white;
//   }
// }
</style>
