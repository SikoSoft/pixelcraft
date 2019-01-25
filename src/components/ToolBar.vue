<template>
  <div id="pc-toolbar">
    <button @click="resetCanvas">{{ $strings.reset }}</button>
    <Dimension/>
    <PixelSize/>
    <Swapper/>
  </div>
</template>

<script>
import Dimension from './Dimension.vue';
import PixelSize from './PixelSize.vue';
import Swapper from './Swapper.vue';
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    message: "Tool bar"
  }),
  components: { Dimension, PixelSize, Swapper },
  mounted () {
    //console.log("mounted", this.$strings);
  },
  methods: mapMutations(['resetCanvas'])
};
</script>

<style lang="less">

</style>