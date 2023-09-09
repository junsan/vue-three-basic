<template>
    <teleport to=".modal-container">
      <div class="modal">
        <h4>Modal</h4>
            <slot name="title"></slot>
            <slot></slot>
        <button>Hide modal</button>  
      </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue'

const slot = useSlots()

console.log(slot.title())

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