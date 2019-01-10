import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import strings from './data/strings.json';

Vue.mixin({
  beforeCreate () {
    this.$strings = strings;
    console.log("set strings");
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
