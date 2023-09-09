<template>
  <div>
    <h1>Modal</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    <Modal subtitle="My SubTitle" v-model="showModal">
      <template v-slot:title>My Modals</template>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam laboriosam, quisquam recusandae, quos amet vero voluptatum doloremque expedita aut labore repudiandae, sint rem ex voluptatibus aspernatur magnam atque vel.</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)

</script>
 