<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <button type="button"  class="btn-counter" :class="{ 'yellow' : oddOrEven === 'Odd'}" @click="increaseCounter(5)"> {{ data.counter }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { userCounter } from '@/use/useCounter'

const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  },
  {
    id: 3,
    title: 'Post 3'
  }
])

const { data, increaseCounter, oddOrEven } = userCounter()

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
