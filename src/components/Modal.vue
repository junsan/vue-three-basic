<template>
    <teleport to=".modal-container">
      <div class="modal" v-if="modelValue">
        <h4>Modal</h4>
        <slot name="title"></slot>
        <h6>{{ subtitle }}</h6>
        <slot></slot>
        <button @click="$emit('update:modelValue', false)">Hide modal</button>  
      </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue'

const slot = useSlots()

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    subtitle: {
        type: String,
        default: 'No title'
    }
})

const emit = defineEmits(['hide', 'update:modelValue'])

console.log(props.subtitle)
//console.log(slot.title())

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