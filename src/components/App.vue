<template>
  <div>
    <h1>{{ message }}</h1>
    <Palette></Palette>
    <Canvas></Canvas>
  </div>
</template>

<script>
import store from '../store';
import { mapState, mapActions } from 'vuex';
import Canvas from './Canvas.vue';
import Palette from './Palette.vue';

export default {
  components: { Canvas, Palette },
  data() {
    return {
      message: 'PixelCraft'
    };
  },
  mounted() {
    this.$store.dispatch('setup');
  },
  watch: {
    canvas: function () {
      console.log('watching canvas');
    }
  }
};
</script>

<style lang="less">
body {
  font-family: 'Titillium Web', sans-serif;
}
</style>
