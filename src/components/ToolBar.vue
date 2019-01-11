<template>
  <div id="pc-toolbar">
    <button @click="resetCanvas">{{ $strings.reset }}</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    message: "Tool bar"
  }),
  mounted () {
    //console.log("mounted", this.$strings);
  },
  methods: mapMutations(['resetCanvas'])
};
</script>

<style lang="less">

</style>