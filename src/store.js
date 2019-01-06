import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  dim: {r: 32, c: 32},
  cellSize: 16,
  canvas: [... new Array(32)].map(v => [...new Array(32)].map(v => '')),
  activePattern: ''
};
//state.canvas = [... new Array(state.dim.r)].map(v => [...new Array(state.dim.c)].map(v => ''));

const mutations = {
  setCellValue (state, { r, c, pattern }) {
    console.log("setCellValue", r, c, pattern);
    const canvas = JSON.parse(JSON.stringify(state.canvas));
    canvas[r][c] = pattern;
    Vue.set(state, 'canvas', [...canvas]);
  },
  setActivePattern (state, { pattern }) {
    console.log("setActivePattern", pattern);
    state.activePattern = pattern;
  }
};

const actions = {
  setCellValue ({ commit, state }, { r, c }) {
    commit('setCellValue', { r, c, pattern: state.activePattern });
  },
  setActivePattern ({ commit }, { pattern }) {
    commit('setActivePattern', { pattern });
  }
};

const getters = {
  canvas: state => state.canvas,
  cellValue: (state) => (r, c) => {
    return typeof(state.canvas[r]) !== 'undefined' && typeof(state.canvas[r][c]) !== 'undefined'
      ? state.canvas[r][c] : '';
  },
  activePattern: (state) => {
    return state.activePattern;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
