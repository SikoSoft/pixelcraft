<template>
  <td
    @click="setCellValue({r, c})"
    @mouseover="mouseOver"
    v-bind:style="{ backgroundColor: cellValue }"></td>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  props: ['r', 'c'],
  methods: {
    mouseOver: () => {
      //console.log("mouseOver");
    },
    ...mapActions([
      'setCellValue'
    ]),
  },
  computed: {
    cellValue() {
      const canvas = this.$store.state.canvas;
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

</style>
