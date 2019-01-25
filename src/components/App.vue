<template>
  <div @mouseup="onMouseUp">
    <h1>{{ $strings.title }}</h1>
    <ToolBar/>
    <Palette v-bind:patternClickTarget="`activePattern`" />
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
  }
};
</script>

<style lang="less">
body {
  font-family: Abel, sans-serif;
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
  &.number {
    width: 32px;
    text-align: center;
    &:focus {
      box-shadow: 0 0 5px rgba(0, 0, 5px, 0.7);
      background-color: rgb(235, 255, 235);
    }
  }
}
button {
  background: linear-gradient(to top, #f9c9a9, #fddbcc);
  color: #000;
  cursor: pointer;
}
fieldset {
  border: 1px rgba(0, 0, 0, 0.3) solid;
  border-radius: 4px;
  legend {
    text-transform: uppercase;
  }
}
</style>
