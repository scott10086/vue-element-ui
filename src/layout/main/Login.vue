<template>
  <div class="container">
    <el-container>
      <el-header id="headerId">Header</el-header>
      <el-main>
        <div :style="{minHeight:minMainHeigtht}">
          <login></login>
        </div>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Login from "_l/structure/login-form/Login"

export default {
  data() {
    return {
      minMainHeigtht:'',
    }
  },
  components:{
    Login
  },
  methods:{
    initMinMainHeight(){
      const topHeight = document.getElementById('headerId').offsetHeight;
      const windowHeight = window.innerHeight;
      this.minMainHeigtht = windowHeight - topHeight - 100 +'px';
    }
  },
  mounted() {
    this.initMinMainHeight();
  },
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
