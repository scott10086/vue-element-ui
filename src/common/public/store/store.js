import "babel-polyfill";
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false, // 是否展示loading动画
    modal10:false,
    dialogVisible:false,
    isLogin:false,
    currentUser:null,
    tocken:'',
    orderBy: 'sale', // 根据什么字段排序,
    productServe:{     //产品与服务
      productServeDetail:[]
    },
    solution:{
      solutionDetail:[]
    },
    document:{
      documentDetail: []
    },
    userInfo: { // 用户信息
    },
    signUpStep: 0, // 登陆步骤
    marketing: { // 营销
      CarouselItems: [], // 轮播图
    },

  },
  getters,
  actions,
  mutations
});
