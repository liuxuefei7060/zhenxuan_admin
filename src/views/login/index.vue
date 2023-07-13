<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>换来来到硅谷甄选</h2>
          <el-form-item prop="username">
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
          <el-form-item prop="password">
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
import { getTimeMsg } from '@/utils/time'

let $router = useRouter()

// 收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let loading = ref(false)
//获取el-form实例
let loginForms = ref()
let userStore = useUserStore()

const validateUsername = (rule: any, value: string, callback: any) => {
  // console.log(rule, value, callback)
  if (value.length > 0) {
    callback()
  } else {
    callback(new Error('用户名不能为空'))
  }
}

//定义表单需要的规则对象
let rules = {
  // required 代表一定要校验的
  // min
  // max
  // message 提示信息
  // trigger 出发时机  blur  失去焦点   change 内容改变
  username: [
    // { required: true, message: '用户名不能为空', trigger: 'blur' },
    { trigger: 'change', validator: validateUsername },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: '密码的长度至少6位',
      trigger: 'change',
    },
  ],
}

const login = async () => {
  //保证全部表单项校验通过再发送请求
  await loginForms.value.validate()

  // console.log("login")
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    ElNotification({
      type: 'success',
      message: `${getTimeMsg()}`,
      title: 'Hello ' + loginForm.username,
    })
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
