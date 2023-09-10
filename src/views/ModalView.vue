<template>
  <div>
    <h1>Modal</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    Show dark modal? <input type="checkbox" v-model="showDarkModal" >
    <br><br>
    <component :user="user" subtitle="My SubTitle" v-model="showModal" :is="showDarkModal ? DarkModal : Modal" >
      <template v-slot:title>My Modals</template>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quibusdam laboriosam, quisquam recusandae, quos amet vero voluptatum doloremque expedita aut labore repudiandae, sint rem ex voluptatibus aspernatur magnam atque vel.</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import DarkModal from '@/components/DarkModal.vue'

const showModal = ref(false)
const showDarkModal = ref(false)

const props = defineProps({
  user: {
    type: Object
  }  
})

</script>
 