<template>
  <div>
    <img src="../assets/logo.png" width="100" height="100" class="img"><br/>
    随机增加:
    <Counter :number="number"></Counter>
  </div>
</template>
<script>
import Counter from './Counter';
export default {
  components: {
    Counter
  },
  methods: {
    handleAddRandom(num) {
      this.number += num;
    }
  },
  data() {
    return {
      number: 0
    }
  },
  created() {
    this.$bus.on('add', this.handleAddRandom);
  },
  beforeDestroy() {
    this.$bus.off('add', this.handleAddRandom);
  }
}
</script>
<style scoped>
.img:hover{
  opacity: 0.7;
  margin-top: 4px;
}
</style>