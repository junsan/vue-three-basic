<template>
  <div class="home"><h1>Home</h1></div>
  <button @click="decreaseCounter">-</button>
  <span> {{ counter }} </span>
  <button @click="increaseCounter">+</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
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
