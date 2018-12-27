<template>
  <div id="pc-palette">
    <ul>
      <PalettePattern v-for="pattern in patterns"
        v-bind:key="pattern"
        v-bind:pattern="pattern">
      </PalettePattern>
    </ul>
  </div>
</template>

<script>
import PalettePattern from './PalettePattern.vue';

const patterns = [
  '',
  '#f00',
  '#0f0',
  '#00f',
  '#ff0',
  '#0ff',
  '#f0f'
];

export default {
  components: { PalettePattern },
  data(){
    return {
      patterns
    }
  }
};
</script>

<style lang="less">
#pc-palette {
  background-color: #efefef;
  //min-height: 50px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>