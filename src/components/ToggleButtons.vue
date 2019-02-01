<template>
  <fieldset>
    <ToggleButton
      v-for="mode in modes"
      :key="mode"
      :mode="mode"
      />
  </fieldset>
</template>

<script>
import ToggleButton from './ToggleButton.vue';

export default {
  components: { ToggleButton },
  data() {
    return {
      modes: ['line', 'circle', 'square']
    }
  }
};
</script>

<style lang="less" scoped>
.toggle-buttons {

}
</style>
