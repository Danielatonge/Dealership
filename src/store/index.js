import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    item: {},
  },
  mutations: {
    SET_ITEM(state, item) {
      state.item = item;
    },
  },
  actions: {
    async loadItem({ commit }) {
      const response = await fetch(`api/item`);
      const data = await response.json();
      commit("SET_ITEM", data);
    },
  },
  getters: {
    getMachine: (state) => {
      return state.item.machine;
    },
    getData: (state) => {
      return state.item.data;
    },
  },
  modules: {},
});
