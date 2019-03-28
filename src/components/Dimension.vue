<template>
  <fieldset id="pc-dimension">
    <legend>{{ $strings.canvasSize }}</legend>
    <NumberField stateKey="canvasY"/>
    <NumberField stateKey="canvasX"/>
  </fieldset>
</template>

<script>
import NumberField from "./NumberField.vue";

export default {
  components: { NumberField }
};
</script>

<style lang="less" scoped>
</style>
