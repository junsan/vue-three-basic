<template>
  <h1>Pinia</h1>
  <div class="home"><h2>Pinia</h2></div>
  <h2>{{ counter.data.title }}</h2>
  <button @click="counter.decrement(2)">--</button> &nbsp;
  <button @click="counter.decrement(1)">-</button> &nbsp;
  <span> {{ counter.count }} </span> &nbsp;
  <button @click="counter.increment(1)">+</button> &nbsp;
  <button @click="counter.increment(2)">++</button>
  <br><br>
  <span>Counter is </span>
  <br><br>
  <h4>Edit My Title</h4>
  <input type="text" />
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

</script>