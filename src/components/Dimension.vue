<template>
  <fieldset id='pc-dimension'>
    <legend>{{ $strings.canvasSize }}</legend>
    <input type="text" v-model="r" class="number"/>
    <input type="text" v-model="c" class="number"/>
  </fieldset>
</template>

<script>
export default {
  computed: {
    r: {
      get: function(){
        return this.$store.state.dim.r;
      },
      set: function(newR) {
        this.$store.dispatch('setDim', { axis: 'r', value: newR });
      }
    },
    c: {
      get: function(){
        return this.$store.state.dim.c;
      },
      set: function(newC) {
        this.$store.dispatch('setDim', { axis: 'c', value: newC });
      }
    }
  },
};
</script>

<style lang="less" scoped>

</style>
