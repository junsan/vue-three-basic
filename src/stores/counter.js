import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(10)
  const data = reactive({
    title: 'Data from Pinia'
  })
  const doubleCount = computed(() => count.value * 2)
  
  function increment(amount) {
    count.value += amount
  }

  const decrement = (amount) => {
    count.value -= amount
  }

  return { count, data, doubleCount, increment, decrement }
})
