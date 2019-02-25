<template>
  <header>
    <h1>{{ $strings.title }}</h1>
    <ToolBar />
  </header>
</template>

<script>
import ToolBar from './ToolBar.vue';

export default {
  components: { ToolBar }
};
</script>

<style lang="less" scoped>
header {
  height: 24px;
  line-height: 24px;
  h1 {
    margin: 0;
    font-size: 22px;
  }
}
</style>
