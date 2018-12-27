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
  // data () {
  //   console.log(this.$store.getters.activePattern, this.pattern);
  //   return {
  //     isActive: this.$store.getters.activePattern === this.pattern
  //   };
  // },
  methods: mapActions([
    'setActivePattern'
  ]),
  computed: mapGetters([
    //'activePattern'
  ])
};
</script>

<style lang="less">
li {
  width: 24px;
  height: 24px;
  display: inline-block;
  border: 2px #888 solid;
  margin: 4px;
  opacity: 0.3;
  &.active {
    border: 2px #000 solid;
    opacity: 1;
  }
}
</style>