// 设置注册步骤
export const SET_SIGN_UP_SETP = (state, step) => {
  state.signUpStep = step;
};

// 设置登录弹框的状态
export const SET_LOGIN_MODEL = (state, step) => {
  state.modal10 = step;
};
// 判断用户是否实名认证
export const SET_USERINFO_TRUE = (state, step) => {
  state.dialogVisible = step;
};
// 设置用户的登录状态
export const SET_LOGIN_TYPE = (state, step) => {
  state.isLogin = step;
};

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, userInfo) => {
  state.userInfo = userInfo;
  if(userInfo&&userInfo!=='null') {
    state.isLogin = true
  }else{
    state.isLogin = false
  }
};

//更改用户状态信息
export const USER_STATUS=(state,userInfo)=>{
  if(userInfo&&userInfo!=='null'){
    state.userInfo=userInfo
    state.isLogin=true
  }else if (userInfo===null) {
    sessionStorage.setItem("userInfo",null)
    state.isLogin=false
  }
}

// 设置加载状态
export const SET_LOAD_STATUS = (state, status) => {
  state.isLoading = status;
};


