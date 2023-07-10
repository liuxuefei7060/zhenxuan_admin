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
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
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
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

let $router = useRouter()

// 收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let loading = ref(false)
let userStore = useUserStore()

const login = async () => {
  // console.log("login")
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    ElNotification({ type: 'success', message: '登录成功' })
    $router.push('/')
  } catch (error) {
    ElNotification({ type: 'error', message: '登录失败' })
  } finally {
    loading.value = false
  }
}
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
