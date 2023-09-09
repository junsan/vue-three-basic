<template>
  <h1>{{  title }}</h1>
  <div class="home"><h2>{{ data.title }}</h2></div>
  <button @click="decreaseCounter(2)">--</button> &nbsp;
  <button @click="decreaseCounter(1)">-</button> &nbsp;
  <span> {{ data.counter }} </span> &nbsp;
  <button @click="increaseCounter(1, $event)">+</button> &nbsp;
  <button @click="increaseCounter(2)">++</button>
  <br><br>
  <span>Counter is {{  addOrEven }}</span>
  <br><br>
  <h4>Edit My Title</h4>
  <input v-model="data.title" type="text" v-autofocus />
</template>

<script setup>
import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'

const title = 'My Non Reactive Title'

onMounted(() => {
  console.log('Do something for Title')
})

const counter = ref(0)
const counterTitle = ref('My Counter:')

const data = reactive({
  counter: 10,
  title: 'Counter'
})

watch(() => data.counter, (newCount, oldCount) => {
  if(newCount === 20) alert('Hi')
})

const addOrEven = computed(() => {
  if(data.counter  % 2 === 0) return 'Even'
  return 'Odd' 
})

const increaseCounter = (counter, e) => {
  data.counter += counter
}

const decreaseCounter = counter => {
  data.counter -= counter
}

onMounted(() => {
  console.log('Do something for Counter')
})


onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

</script>


<!-- <script>
 import { ref } from 'vue'

 export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
 }
</script> -->

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter++
      },
      decreaseCounter() {
        this.counter--
      }
    },
    directives: {
      autofocus: {
        mounted(el) {
          el.focus()
        }
      }
    }
  }
</script> 
