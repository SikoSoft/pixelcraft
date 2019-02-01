<template>
  <li @click="handleClick(pattern)"
    :style="{ backgroundColor: pattern }"
    :class="{ active: $store.getters[clickTarget] === pattern}"
    >
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: [ 'pattern', 'clickTarget' ],
  methods: {
    handleClick (pattern) {
      this.$store.state[this.clickTarget] = pattern;
    }
  }
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