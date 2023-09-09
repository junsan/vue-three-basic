<template>
  <div class="post-detail">
    <h1>Post Detail</h1>
    <p>This post is an id of {{  $route.params.id }}</p>
    <br>
    <button @click="showPostId">Show Post Id</button>
    <br><br>
    <button @click="goToHome">Home</button>
    <br><br>
    <button @click="goToPostFour">Go to Post 4</button>
    <br><br>
    <p><RouterLink to="/posts">Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(route.params.id)
}

const goToHome = () => {
  router.push('/')
}

const goToPostFour = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 4
    }
  })
}

</script>

<style>

</style>
