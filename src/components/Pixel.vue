<template>
  <td
    @click="setCellValue({r, c, v})"
    v-bind:style="{ backgroundColor: $store.getters.cellValue(r, c) }"></td>
</template>

<script>
//import store from '../store';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  //name: "Pixel",
  //store,

  props: ['r', 'c', 'v'],
  methods: mapActions([
    'setCellValue'
  ]),
  // computed: mapGetters([
  //   'cellValue'
  // ]),
  /*
    pixelClick: function () {
      console.log('cellClick', this.r, this.c, this.v);
    }
  },
  */
  data: () => ({
    canvas: []
  })
}
</script>

<style lang="less">

</style>
