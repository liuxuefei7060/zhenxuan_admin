<template>
  <div class="box">
    <h1>我是根硕</h1>
    <div>
      <el-button type="primary" :icon="Plus">主要模式</el-button>

    </div>
  </div>
</template>

<script setup lang="ts">
import {Plus} from "@element-plus/icons-vue"
// const str = '我爱你祖国'
</script>

<style scoped lang="scss">
.box {
  width: 400px;
  height: 400px;
  // background: black;
  h1 {
    color: white;
  }
}
</style>
