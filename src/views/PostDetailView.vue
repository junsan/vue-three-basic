<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>This post is an id of {{  $route.params.id }}</p>
    <br>
    <button @click="showPostId">Show Post Id</button>
    <br><br>
    <p><RouterLink to="/posts">Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const showPostId = () => {
  alert(route.params.id)
}

</script>

<style>

</style>
