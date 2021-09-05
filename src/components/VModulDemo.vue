<template>
  <div class="input-number-demo">
    <h2>实现一个简单的 v-model 指令</h2>
    <div>
      <input v-model2="age" type="text">
      <p>{{ age }}</p>
    </div>

    <h2>让 v-model2 指令支持 .trim 修饰符（自动过滤用户输入的首尾空白字符）</h2>
    <div>
      <input v-model2.trim="age2" type="text">
      <p>{{ age2 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age: 1,
      age2: 12,
      number: '',
    }
  }
}
</script>