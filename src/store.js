import Vue from 'vue';
import Vuex from 'vuex';
import { patterns } from './data/patterns.json';

Vue.use(Vuex);

const state = {
  canvasX: 32,
  canvasY: 32,
  pixelSize: 10,
  pixelGutter: 1,
  canvas: [],
  activePattern: patterns[1],
  mouseDown: false,
  swapFrom: patterns[0],
  swapTo: patterns[0],
  toolBarOpen: false,
  numberFields: [],
  modes: {
    line: false,
    circle: false,
    square: false,
  }
};
state.canvas = [... new Array(state.canvasY)].map(v => [...new Array(state.canvasX)].map(v => ''));

const mutations = {
  setCellValue (state, { r, c, pattern }) {
    state.canvas[r].splice(c, 1, pattern);
  },
  setActivePattern (state, { pattern }) {
    state.activePattern = pattern;
  },
  resetCanvas (state) {
    for (let r = 0; r < state.canvasY; r++) {
      for (let c = 0; c < state.canvasX; c++) {
        state.canvas[r].splice(c, 1, '');
      }
    }
  },
  newCanvas (state) {
    Vue.set(state, 'canvas', [... new Array(state.canvasY)].map(v => [...new Array(state.canvasX)].map(v => '')));
  },
  mouseDown (state, { down }) {
    state.mouseDown = down;
  },
  showToolBar (state) {
    state.toolBarOpen = true;
  },
  hideToolBar (state) {
    state.toolBarOpen = false;
  },
  toggleToolBar (state) {
    state.toolBarOpen = !state.toolBarOpen;
  },
  setCellGutter (state, { cellGutter }) {
    state.cellGutter = cellGutter;
  },
  setNumber (state, { stateKey, value}) {
    console.log("setNumber", stateKey, value);
    state[stateKey] = value;
  },
  registerNumberField (state, { stateKey }) {
    state.numberFields.push(stateKey);
  },
  setMode (state, { modeType, isOn }) {
    state.modes[modeType] = isOn;
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
  },
  setNumber ({ commit, state }, { stateKey, value}) {
    if (state.numberFields.indexOf()) { // prevent state craziness
      commit("setNumber", { stateKey, value: parseInt(value) });
    }
  },
  registerNumberField ({ commit }, { stateKey }) {
    commit("registerNumberField", { stateKey });
  },
  toggleMode ({ commit, state }, { modeType }) {
    for (let m in state.modes) {
      if (m !== modeType) {
        commit("setMode", {modeType: m, isOn: false});
      }
    }
    commit("setMode", { modeType, isOn: state.modes[modeType] = !state.modes[modeType]});
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
