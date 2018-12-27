<template>
  <div id='pixelcraft-canvas'>
    <table>
      <tr v-for="row in $store.state.dim.r" v-bind:key="row-1">
        <Pixel v-for="column in $store.state.dim.c"
          v-bind:key="(row-1)+'.'+(column-1)"
          v-bind:r="row-1"
          v-bind:c="column-1"
          v-bind:v="`#f00`"></Pixel>
      </tr>
    </table>
  </div>
</template>

<script>
import Pixel from './Pixel.vue';

export default {
  components: { Pixel }
};
</script>

<style lang="less">
#pixelcraft-canvas {
  border: 1px #eee solid;
  padding: 10px;
  min-height: 200px;
  border-radius: 4px;
  table {
    border: 1px #ccc solid;
    background-color: #fff;
    min-height: 200px;
    box-sizing: border-box;
    margin: auto;
    //width: 100%;
    tr {
      td {
        min-width: 16px;
        height: 16px;
        margin: 2px;
        background-color: #efefef;
      }
    }
  }
}
</style>
