<template>
  <div id="pc-palette">
    <ul>
      <PalettePattern v-for="pattern in patterns"
        v-bind:key="pattern"
        v-bind:pattern="pattern"
        v-bind:clickHandler="patternClickHandler"/>
    </ul>
  </div>
</template>

<script>
import PalettePattern from './PalettePattern.vue';
import { patterns } from '../data/patterns.json';

export default {
  props: ['patternClickHandler'],
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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>