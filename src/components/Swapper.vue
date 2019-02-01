<template>
  <fieldset>
    <legend>{{ $strings.swapPattern }}</legend>
    <Palette :patternClickTarget="`swapFrom`" />
    <Palette :patternClickTarget="`swapTo`" />
    <button @click="swap">{{ $strings.swap }}</button>
  </fieldset>
</template>

<script>
import Palette from './Palette.vue';
import { mapActions } from 'vuex';

export default {
  components: { Palette },
  methods: mapActions(['swap'])
};
</script>

<style lang="less" scoped>

</style>
