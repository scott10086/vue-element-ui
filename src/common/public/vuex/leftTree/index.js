/**
 * 缓存左树选中数据
 */
const state = () => ({
    checkIds: null,
    currentNodeInfo:null
});

const getters = {
    getCheckedIds: (_state, getters, rootState) => {
        return _state.checkIds || JSON.parse(sessionStorage.getItem('_checkIds')) || [];
    },
    getCheckedId: (_state, getters, rootState) => {
      const _checkIds = [...(_state.checkIds || JSON.parse(sessionStorage.getItem('_checkIds')))];
      return _checkIds[_checkIds.length - 1];
    },
    getCurrentNodeInfo: (_state, getters, rootState) => {
      return _state.currentNodeInfo || JSON.parse(sessionStorage.getItem('_currentNodeInfo')) || {};
    }
}

const mutations = {
    setCheckedIds(_state, _checkIds) {
        _state.checkIds = [..._checkIds];
        sessionStorage.setItem('_checkIds', JSON.stringify(_checkIds));
    },
    setCurrentNodeInfo(_state, _currentNodeInfo) {
        _state.currentNodeInfo = {..._currentNodeInfo};
        sessionStorage.setItem('_currentNodeInfo', JSON.stringify(_currentNodeInfo));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
