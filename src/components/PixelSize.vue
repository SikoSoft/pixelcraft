<template>
  <fieldset>
    <legend>{{ $strings.pixelSize }}</legend>
    <NumberField v-bind:stateKey="`pixelSize`" />
  </fieldset>
</template>

<script>
import NumberField from './NumberField.vue';

export default {
  components: { NumberField }
};
</script>

<style lang="less" scoped>

</style>
