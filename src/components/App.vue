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
input, textarea, select, button {
  padding: 5px;
  margin: auto;
  border-radius: 4px;
  font-family: Abel;
  font-size: 16px;
  border: 1px #d80 solid;
  text-transform: uppercase;
  outline: none;
}
button {
  background: linear-gradient(to top, #f9c9a9, #fddbcc);
  color: #000;
  cursor: pointer;
}

</style>
