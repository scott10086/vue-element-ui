// import api from '~/api';

const state = () => ({
    userInfo: null
});

const getters = {
    getUserInfo: (state, getters, rootState) => {
        return state.userInfo || JSON.parse(sessionStorage.getItem('userInfo'));
    }
}

const mutations = {
    setUserInfo(_state, _userInfo) {
        _state.userInfo = _userInfo;
        sessionStorage.setItem('userInfo', JSON.stringify(_userInfo));
    }
}

const actions = {
    login({ dispatch, state, commit }, params) {
        window.$cpsHttp.post(api.login.url, params).then( data => {
            commit("setUserInfo", data.result);
        });
    },
    logout({ dispatch, state, commit }) {
        commit("setUserInfo", {});
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
