<template>
  <div class="posts">
    <h1>Counter</h1>
    <button type="button"  class="btn-counter" :class="{ 'yellow' : counter.oddOrEven === 'Odd'}" @click="counter.increment(5)" > {{ counter.count }}</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

</script>

<style>
.btn-counter {
  font-size: 40px;
  width: 100px;
  background-color:aqua;
}
.btn-counter.yellow {
  background-color: yellow;
}
</style>
