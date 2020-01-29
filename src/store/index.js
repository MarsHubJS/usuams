import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
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
    },
    resetLoginInfo(state) {
      state.loginInfo.username = "";
      state.loginInfo.uid = "";
      state.loginInfo.type = "";
      state.loginInfo.depa = "";
    }
  },
  actions: {
    logout(context) {
      context.commit("resetLoginInfo");
      sessionStorage.clear();
      router.push("/login");
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
