import axios from 'axios';
// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  console.log(data)
  json
  return new Promise((resolve, reject) => {
     axios.post('http://192.168.3.8:8099//register',data)
      .then(res=>{
        console.log('res=>',res);
        var userInfo=data;
      }).catch(res=>{
    })

    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`/login`,data)
      .then(res=>{
        console.log('res=>',res);
        var userInfo=data;
            commit('SET_USER_LOGIN_INFO', userInfo)
            sessionStorage.setItem('userInfo',userInfo)
            resolve(true);
      }).catch(res=>{
    })

  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  sessionStorage.removeItem('userInfo');
  sessionStorage.removeItem('encryptionKey');
  commit('SET_USER_LOGIN_INFO', '');
};
// 判断是否登陆
export const setLoginType = ({ commit }) => {
  var userInfo = Storage.getItem('userInfo');
  commit('USER_STATUS', userInfo);

};

// };
