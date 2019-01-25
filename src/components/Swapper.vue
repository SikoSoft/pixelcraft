<template>
  <fieldset>
    <legend>{{ $strings.swapPattern }}</legend>
    <Palette v-bind:patternClickTarget="`swapFrom`" />
    <Palette v-bind:patternClickTarget="`swapTo`" />
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
