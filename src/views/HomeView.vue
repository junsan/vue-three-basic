<template>
  <div class="home"><h1>{{ data.title }}</h1></div>
  <button @click="decreaseCounter">-</button>
  <span> {{ data.counter }} </span>
  <button @click="increaseCounter">+</button>
  <br><br>
  <h4>Edit My Title</h4>
  <input v-model="data.title" type="text" />
</template>

<script setup>
import { ref, reactive } from 'vue'

const counter = ref(0)
const counterTitle = ref('My Counter:')

const data = reactive({
  counter: 10,
  title: 'Counter'
})

const increaseCounter = () => {
  data.counter++
}

const decreaseCounter = () => {
  data.counter--
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
