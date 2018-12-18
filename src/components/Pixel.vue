<template>
  <td
    @click="setCellValue({r, c, v})"
    v-bind:style="{ backgroundColor: $store.getters.cellValue(r, c) }"></td>
</template>

<script>
//import store from '../store';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  props: ['r', 'c', 'v'],
  methods: mapActions([
    'setCellValue'
  ]),
  // computed: mapGetters([
  //   'cellValue'
  // ])
}
</script>

<style lang="less">

</style>
