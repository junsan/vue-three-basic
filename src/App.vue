<script setup>

</script>

<template>
  <div>
    Username: @{{ user.name }}, Network Status: <span :style="{ color: online ? 'green' : 'red'}">{{ online ? 'online' : 'offline' }}</span> 
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modal">Modal</RouterLink>
    <RouterLink to="/pinia">Pinia</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>

  <!-- <RouterView :user="user" /> -->
  <RouterView />
</template>

<script setup>
import { reactive, provide } from 'vue'
import { useOnline } from '@vueuse/core'

const online = useOnline()

const user = reactive({
  name: 'M',
  email: 'm@info.com'
})

provide('user', user)

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
