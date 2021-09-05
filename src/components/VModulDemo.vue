<template>
  <div class="input-number-demo">
    <h2>实现一个简单的 v-model 指令</h2>
    <div>
      <input v-model2.number="age" type="text">
      <p>{{ age }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age: 1
    }
  }
}
</script>