<template>
  <div class="helloWorld">
    <teleport to="#AppBox">
      <h1 class="modal" :style="{ color: color }" @click="setColor">Hello Modal</h1>
    </teleport>
    <h1 @click="say">{{ msg }}</h1>
    dog{{ dog }}dog
  </div>
</template>

<script>
import { inject, ref } from 'vue'
export default {
  name: 'HelloWorld',
  inheritAttrs: false,
  props: {
    msg: String
  },
  created() {
    console.log('this.$attrs', this.$attrs)
  },
  setup(props, context) {
    let dog = inject('dog')
    console.log('dogdogdogdogdog', dog)
    let { emit, attr } = context
    console.log('props', props, 'context', context, 'attr', attr)
    function say() {
      emit('say', 'helloworld')
    }
    let color = ref('red')
    function setColor() {
      color.value = 'green'
    }
    return {
      say,
      dog,
      color,
      setColor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.modal {
}
</style>
