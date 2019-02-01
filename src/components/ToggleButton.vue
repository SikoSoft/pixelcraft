<template>
  <button @click="toggle({modeType: mode})" :class="[ $store.state.modes[mode] ? 'on' : 'off' ]">
    <i :class="[ 'fas', faMap[mode] ]"></i>
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      faMap: {
        line: 'fa-slash',
        circle: 'fa-circle',
        square: 'fa-square'
      }
    };
  },
  props: ['mode'],
  methods: mapActions({toggle: 'toggleMode'})
};
</script>

<style lang="less" scoped>
button {
  height: 32px;
  width: 32px;
  margin-right: 4px;
  &.on {
    background: linear-gradient(to top, rgb(108, 236, 198), rgb(169, 243, 200));
  }
  &.off {
    background: linear-gradient(to top, rgb(168, 81, 78), rgb(233, 68, 68));
  }
}
</style>
