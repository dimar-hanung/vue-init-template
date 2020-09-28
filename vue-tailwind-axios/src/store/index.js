import Vue from "vue";
import Vuex from "vuex";
import Photos from "./photos/photos"
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  modules: {
    Photos
  }
});
