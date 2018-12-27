<template>
  <td
    @click="setCellValue({r, c})"
    @mouseover="mouseOver"
    v-bind:style="{ backgroundColor: $store.getters.cellValue(r, c) }"></td>
</template>

<script>
//import store from '../store';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  props: ['r', 'c', 'v'],
  methods: {
    mouseOver: () => {
      console.log("mouseOver");
    },
    ...mapActions([
      'setCellValue'
    ]),
  }
  // computed: mapGetters([
  //   'cellValue'
  // ])
}
</script>

<style lang="less">

</style>
