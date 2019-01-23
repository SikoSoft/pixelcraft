<template>
  <fieldset>
    <legend>{{ $strings.pixelSize }}</legend>
    <input type="text" v-model="size" class="number"/>
  </fieldset>
</template>

<script>
export default {
  computed: {
    size: {
      get: function () {
        return this.$store.state.cellSize;
      },
      set: function(newSize) {
        this.$store.commit('setCellSize', { size: newSize });
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>
