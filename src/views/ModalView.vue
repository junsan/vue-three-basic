<template>
  <div>
    <h1>Modal</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    <Modal v-if="showModal"></Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)

</script>
 