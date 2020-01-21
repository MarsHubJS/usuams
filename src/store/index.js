import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginInfo: {
      username: "",
      uid: "",
      type: ""
    }
  },
  mutations: {
    setLoginInfo(state, { username, uid, type }) {
      state.loginInfo.username = username;
      state.loginInfo.uid = uid;
      state.loginInfo.type = type;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
