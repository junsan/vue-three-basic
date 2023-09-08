<template>
  <div class="home"><h1>Home</h1></div>
  <button @click="decreaseCounter">-</button>
  <span> {{ counter }} </span>
  <button @click="increaseCounter">+</button>
</template>

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
    }
  }
</script>
