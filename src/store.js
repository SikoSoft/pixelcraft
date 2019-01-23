import Vue from 'vue';
import Vuex from 'vuex';
import { patterns } from './data/patterns.json';

Vue.use(Vuex);

const dim = {r: 32, c: 32};

const state = {
  dim,
  cellSize: 10,
  canvas: [... new Array(dim.r)].map(v => [...new Array(dim.r)].map(v => '')),
  activePattern: patterns[1],
  mouseDown: false
};
//state.canvas = [... new Array(state.dim.r)].map(v => [...new Array(state.dim.c)].map(v => ''));

const mutations = {
  setCellValue (state, { r, c, pattern }) {
    //console.log("setCellValue", r, c, pattern);
    state.canvas[r].splice(c, 1, pattern);
  },
  setActivePattern (state, { pattern }) {
   //console.log("setActivePattern", pattern);
    state.activePattern = pattern;
  },
  resetCanvas (state) {
    //console.log('resetCanvas');
    for (let r = 0; r < state.dim.r; r++) {
      for (let c = 0; c < state.dim.c; c++) {
        state.canvas[r].splice(c, 1, '');
      }
    }
    //Vue.set(state, 'canvas', [... new Array(state.dim.r)].map(v => [...new Array(state.dim.c)].map(v => '')));
  },
  newCanvas (state) {
    Vue.set(state, 'canvas', [... new Array(dim.r)].map(v => [...new Array(dim.r)].map(v => '')));
  },
  mouseDown (state, { down }) {
    state.mouseDown = down;
  },
  setDim (state, { axis, value }) {
    state.dim[axis] = parseInt(value);
  },
  setCellSize (state, { size }) {
    state.cellSize = size;
  }
};

const actions = {
  setCellValue ({ commit, state }, { r, c }) {
    commit('setCellValue', { r, c, pattern: state.activePattern });
  },
  setActivePattern ({ commit }, { pattern }) {
    commit('setActivePattern', { pattern });
  },
  resetCanvas ({ commit }) {
    commit('resetCanvas');
  },
  setDim ({ commit }, { axis, value }) {
    commit('setDim', { axis, value });
    commit('newCanvas');
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
