<template>
  <input type="text" v-model="value" class="number"/>
</template>

<script>
export default {
  props: ['stateKey'],
  computed: {
      value: {
        get: function () {
          return this.$store.state[this.stateKey];
        },
        set: function (value) {
          this.$store.dispatch('setNumber', { stateKey: this.stateKey, value });
        }
    }
  },
  mounted () {
    console.log("mounted!", this.stateKey);
    this.$store.dispatch('registerNumberField', { stateKey: this.stateKey });
  }
};
</script>

<style lang="less" scoped>

</style>
