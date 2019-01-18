<template>
  <div @mouseup="onMouseUp">
    <h1>{{ message }}</h1>
    <ToolBar/>
    <Palette/>
    <Canvas/>
  </div>
</template>

<script>
import store from '../store';
import Canvas from './Canvas.vue';
import Palette from './Palette.vue';
import ToolBar from './ToolBar.vue';

export default {
  components: { Canvas, Palette, ToolBar },
  methods: {
    onMouseUp () {
      this.$store.commit('mouseDown', { down: false });
    }
  },
  data() {
    return {
      message: 'PixelCraft'
    };
  }
};
</script>

<style lang="less">
body {
  font-family: Abel, sans-serif;
}
h1 {
  display: none;
}
button {
  padding: 5px;
  margin: auto;
  border-radius: 4px;
  font-family: Abel;
  font-size: 16px;
  border: 1px #d80 solid;
  background-color: #f9c9a9;
  color: #000;
  cursor: pointer;
}
</style>
