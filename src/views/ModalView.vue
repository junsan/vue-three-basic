<template>
  <div>
    <h1>Modal</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    <teleport to=".modal-container">
      <div class="modal" v-if="showModal">
        <h4>Modal</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam laboriosam, quisquam recusandae, quos amet vero voluptatum doloremque expedita aut labore repudiandae, sint rem ex voluptatibus aspernatur magnam atque vel.</p>
        <button @click="showModal = false">Hide modal</button>  
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

</script>

<style>
.modal {
  background-color: bisque;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
 