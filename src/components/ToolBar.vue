<template>
  <div id="pc-toolbar">
    <button @click="resetCanvas">{{ $strings.reset }}</button>
    <Dimension/>
  </div>
</template>

<script>
import Dimension from './Dimension.vue';
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    message: "Tool bar"
  }),
  components: { Dimension },
  mounted () {
    //console.log("mounted", this.$strings);
  },
  methods: mapMutations(['resetCanvas'])
};
</script>

<style lang="less">

</style>