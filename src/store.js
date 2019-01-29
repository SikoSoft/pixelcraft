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
  mouseDown: false,
  swapFrom: patterns[0],
  swapTo: patterns[0],
  toolBarOpen: false
};

const mutations = {
  setCellValue (state, { r, c, pattern }) {
    state.canvas[r].splice(c, 1, pattern);
  },
  setActivePattern (state, { pattern }) {
    state.activePattern = pattern;
  },
  resetCanvas (state) {
    for (let r = 0; r < state.dim.r; r++) {
      for (let c = 0; c < state.dim.c; c++) {
        state.canvas[r].splice(c, 1, '');
      }
    }
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
  },
  showToolBar (state) {
    state.toolBarOpen = true;
  },
  hideToolBar (state) {
    state.toolBarOpen = false;
  },
  toggleToolBar (state) {
    state.toolBarOpen = !state.toolBarOpen;
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
  },
  swap ({ commit, state }) {
    // ToDo: cleaner es6 way about this? probably not due to vue's
    // stupid reactivty with arrays... look into
    for (let r = 0; r < state.canvas.length; r++) {
      for (let c = 0; c < state.canvas[r].length; c++) {
        if (state.canvas[r][c] === state.swapFrom) {
          commit('setCellValue', {r, c, pattern: state.swapTo});
        }
      }
    }
  },
  hideToolBar ({ commit }) {
    commit("hideToolBar");
  },
  showToolBar ({ commit }) {
    commit("showToolBar");
  },
  toggleToolBar ({ commit }) {
    commit("toggleToolBar");
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
  },
  swapFrom: (state) => {
    return state.swapFrom;
  },
  swapTo: (state) => {
    return state.swapTo;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
