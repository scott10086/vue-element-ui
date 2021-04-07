<template>
  <div class="container">
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:22px;" >系统登录</h2>
    <el-form-item prop="t_user_account">
      <el-input type="text" v-model="loginForm.t_user_account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="t_user_password">
      <el-input type="password" v-model="loginForm.t_user_password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item >
      <el-col :span="12">
        <el-form-item prop="verify_code">
          <el-input type="test" v-model="loginForm.verify_code" auto-complete="off" placeholder="验证码, 单击图片刷新"
            style="width: 100%;">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="1">&nbsp;</el-col>
      <el-col :span="11">
        <el-form-item>
            <img class="pointer" :src="loginForm.src" @click="refreshCaptcha">
        </el-form-item>
      </el-col>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:47%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:47%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import crypto from 'crypto'
export default {
  name: 'Login',
  components:{
    // ThemePicker,
  },
  data() {
    return {
      loading: false,
      loginForm: {
        t_user_password: '',
        t_user_account: '',
        verify_code:'',
        verifyCodeId:'',
        src: ''
      },
      fieldRules: {
        t_user_account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        t_user_password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6', trigger: 'blur' }
        ],
        verify_code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login() {
    },
    refreshCaptcha: function(){
      // axios.get('/api/portal/getVerifyCode', {
      //   responseType: 'arraybuffer'
      // })
        this.$api.login.getVerifyCode().then(response => {

          this.loginForm.verifyCodeId=response.headers.verifycodeid
          return 'data:image/png;base64,' + btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        }).then(data => {
        this.loginForm.src = data
      })

    },
    reset() {
      this.$refs.loginForm.resetFields()
    },
  },
  created(){
   var that=this
   document.onkeydown=function(e){
     var key=window.event.keyCode
     if(key===13&&that.$router.currentRoute.path==="/login"){
       that.login()
     }
   }
  },
  mounted() {
    this.refreshCaptcha()
  },
  computed:{
    ...mapState({
      themeColor: state=>state.app.themeColor
    })
  }
}
</script>

<style lang="scss" scoped>
  .container{
 background: #ccc no-repeat;
    height:100%;
    width:100%;
    overflow: hidden;

    background-size:cover;或者background-size:100%;
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    z-index: 1000;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    /*box-shadow: 0 0 25px #cac6c6;*/
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  .pointer{
    width: 51%;
    height: 38px;
    padding-left: 10px;
  }
</style>
