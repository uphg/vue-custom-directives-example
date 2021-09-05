import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* --- 实现 v-model 指令 */
let onInput

const bindModel = (el, binding, vnode) => {
  // 初始化指令时把默认值赋给 input
  el.value = binding.value

  // 获取绑定的 key 名称
  const { expression } = binding

  el.addEventListener('input', onInput = (e) => {
    console.log('我输入的内容是：')
    console.log(e.target.value)
    vnode.context[expression] = e.target.value
  })
}

const unbindModel = (el) => {
  el.removeEventListener('input', onInput)
  onInput = null
}

Vue.directive('model2', {
  inserted: bindModel, // 元素被插入到 DOM 中时
  update: bindModel, // 组件更新时
  unbind: unbindModel // 组件销毁时
})

new Vue({
  render: h => h(App),
}).$mount('#app')