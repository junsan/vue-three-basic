<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

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

</script>

<style>

</style>
