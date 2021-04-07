import Vue from "vue";
import Vuex from "vuex";
import user from './user';
import leftTree from './leftTree';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user,
        leftTree
    }
});