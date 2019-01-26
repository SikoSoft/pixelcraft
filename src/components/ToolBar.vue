<template>
  <div id="pc-toolbar" v-if="$store.state.toolBarOpen">
    <button @click="hideToolBar">{{ $strings.hideToolBar }}</button>
    <button @click="resetCanvas">{{ $strings.reset }}</button>
    <Dimension />
    <PixelSize />
    <Swapper />
  </div>
  <div id="pc-toolbar-gone" v-else>
    <button @click="showToolBar">{{ $strings.showToolBar }}</button>
  </div>
</template>

<script>
import Dimension from './Dimension.vue';
import PixelSize from './PixelSize.vue';
import Swapper from './Swapper.vue';
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    message: "Tool bar"
  }),
  components: { Dimension, PixelSize, Swapper },
  mounted () {
    //console.log("mounted", this.$strings);
  },
  methods: mapMutations(['resetCanvas', 'showToolBar', 'hideToolBar'])
};
</script>

<style lang="less">

</style>