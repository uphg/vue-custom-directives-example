<template>
  <div>
    <h2>Vue 内置指令案例</h2>
    <VModulDemo v-if="inputVisible" />
    <button @click="inputVisible = !inputVisible">销毁 input 组件</button>
  </div>
</template>
<script>
import VModulDemo from './components/VModulDemo.vue'
export default {
  components: { VModulDemo },
  data() {
    return {
      inputVisible: true
    }
  }
}
</script>