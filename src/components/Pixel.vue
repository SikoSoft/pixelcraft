<template>
  <td
    @click="setCellValue({r, c})"
    @mouseover="mouseOver"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    v-bind:style="{ backgroundColor: cellValue, height: `${$store.state.cellSize}px`, width: `${$store.state.cellSize}px` }"></td>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  props: ['r', 'c'],
  methods: {
    mouseOver () {
      if (this.$store.state.mouseDown) {
        this.setValueToActive();
      }
    },
    mouseDown () {
      this.$store.commit('mouseDown', { down: true });
      this.setValueToActive();
    },
    mouseUp () {
      //this.$store.commit('mouseDown', { down: false });
    },
    setValueToActive () {
      this.$store.commit('setCellValue', {
        r: this.r, c: this.c, pattern: this.$store.state.activePattern
      });
    },
    ...mapActions([
      'setCellValue'
    ]),
  },
  computed: {
    cellValue: function() {
      const canvas = this.$store.getters.canvas;
      return typeof(canvas[this.r]) !== 'undefined' && typeof(canvas[this.r][this.c]) !== 'undefined'
        ? canvas[this.r][this.c] : '';
    }
  }
/*
  computed: mapGetters([
    'cellValue'
  ])
*/
}
</script>

<style lang="less">
td {
  border: 1px #fff solid;
  background-color: #efefef;
}
</style>
