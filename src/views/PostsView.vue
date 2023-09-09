<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li><RouterLink to="/postDetail/1">Post 1</RouterLink></li>
      <li><RouterLink to="/postDetail/2">Post 2</RouterLink></li>
      <li><RouterLink to="/postDetail/3">Post 3</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { vAutofocus } from '../directives/vAutofocus';
</script>

<style>

</style>
