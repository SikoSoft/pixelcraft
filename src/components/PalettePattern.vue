<template>
  <li @click="setActivePattern({pattern})"
    v-bind:style="{ backgroundColor: pattern }"
    v-bind:class="{ active: $store.getters.activePattern === pattern}">
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: [ 'pattern' ],
  methods: mapActions([
    'setActivePattern'
  ])
};
</script>

<style lang="less">
li {
  width: 24px;
  height: 24px;
  display: inline-block;
  border: 1px #888 solid;
  margin: 4px;
  opacity: 0.3;
  border-radius: 4px;
  &.active {
    border: 1px #000 solid;
    opacity: 1;
  }
}
</style>