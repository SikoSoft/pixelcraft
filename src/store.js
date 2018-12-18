import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  dim: {r: 32, c: 32},
  cellSize: 16,
  canvas: []
};
state.canvas = [... new Array(state.dim.r)].map(v => [...new Array(state.dim.c)].map(v => ''));

const mutations = {
  setupEmptyCanvas (state) {
    //console.log("setupEmptyCanvas");
    //state.canvas = [... new Array(state.dim.r)].map(v => [...new Array(state.dim.c)].map(v => ''));
  },
  setCellValue (state, { r, c, v }) {
    console.log("setCellValue", r, c, v);
    state.canvas[r][c] = v;
  }
};

const actions = {
  setup ({ commit, state }) {
    //commit('setupEmptyCanvas');
  },
  setCellValue ({ commit, state }, { r, c, v }) {
    commit('setCellValue', { r, c, v });
  }
};

const getters = {
  cellValue: (state) => (r, c) => {
    //console.log("running getters", r, c);
    return typeof(state.canvas[r]) !== 'undefined' && typeof(state.canvas[r][c]) !== 'undefined'
      ? state.canvas[r][c] : '';
  }
};

console.log("store initial state during construction", state);
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
