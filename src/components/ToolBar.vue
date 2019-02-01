<template>
  <div id="pc-toolbar-open" v-if="$store.state.toolBarOpen">
    <button @click="hideToolBar">{{ $strings.hideToolBar }}</button>
    <button @click="resetCanvas">{{ $strings.reset }}</button>
    <ToggleButtons />
    <Dimension />
    <PixelSize />
    <Swapper />
  </div>
  <div id="pc-toolbar-closed" v-else>
    <button @click="showToolBar">{{ $strings.showToolBar }}</button>
  </div>
</template>

<script>
import ToggleButtons from './ToggleButtons.vue'
import Dimension from './Dimension.vue';
import PixelSize from './PixelSize.vue';
import Swapper from './Swapper.vue';
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    message: "Tool bar"
  }),
  components: { ToggleButtons, Dimension, PixelSize, Swapper },
  mounted () {
    //console.log("mounted", this.$strings);
  },
  methods: mapMutations(['resetCanvas', 'showToolBar', 'hideToolBar'])
};
</script>

<style lang="less">
#pc-toolbar-open {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9990;
  width: 300px;
  background-color: #fff;
  box-shadow: -3px 0 5px rgba(0,0,0,0.3);
  padding: 10px;
}

#pc-toolbar-closed {
  position: fixed;
  top: 10px;
  right: 10px;
  height: 10px;
}
</style>