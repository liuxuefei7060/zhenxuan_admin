<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>换来来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click=""
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
// 收集账号与密码的数据
let loginForm = reactive({ username: '', password: '' })
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  // background-color: red
  background: url('@/assets/images/background.jpg') no-repeat;

  .login_form {
    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      margin: 20px 0;
      color: white;
      font-size: 20px;
    }

    padding: 40px;
    width: 70%;
    top: 30vh;
    position: relative;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    .login_btn {
      width: 100%;
    }
  }
}
</style>
