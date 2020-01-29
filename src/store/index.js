import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginInfo: {
      username: "",
      uid: "",
      type: "",
      depa: ""
    }
  },
  mutations: {
    setLoginInfo(state, { username, uid, type, depa }) {
      state.loginInfo.username = username;
      state.loginInfo.uid = uid;
      state.loginInfo.type = type;
      state.loginInfo.depa = depa;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
