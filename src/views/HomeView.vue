<template>
  <h1>{{  title }}</h1>
  <div class="home"><h2>{{ data.title }}</h2></div>
  <button @click="decreaseCounter(2)">--</button>
  <button @click="decreaseCounter(1)">-</button>
  <span> {{ data.counter }} </span>
  <button @click="increaseCounter(1, $event)">+</button>
  <button @click="increaseCounter(2)">++</button>
  <br><br>
  <h4>Edit My Title</h4>
  <input v-model="data.title" type="text" />
</template>

<script setup>
import { ref, reactive } from 'vue'

const title = 'My Non Reactive Title'

const counter = ref(0)
const counterTitle = ref('My Counter:')

const data = reactive({
  counter: 10,
  title: 'Counter'
})

const increaseCounter = (counter, e) => {
  data.counter += counter
}

const decreaseCounter = counter => {
  data.counter -= counter
}

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

<!-- <script>
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
    }
  }
</script> -->
