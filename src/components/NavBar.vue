<template>
    <nav>
      <a href="#">
        Home
        <spam></spam>
      </a>
      <a href="#">
        About
        <spam></spam>
      </a>
      <a href="#">
        Services
        <spam></spam>
      </a>
      <a href="#">
        Contact
        <spam></spam>
      </a>
      <a href="#">
        Logout
        <spam></spam>
      </a>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'NavBar',
})
</script>

<style scoped>
nav {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
}

nav a {
  color: #ccc;
  font-size: 20px;
  transition: all 0.2s;
  display: inline-block;
}

nav a:hover {
  color: #fff;
  transform: scale(1.1);
}

nav a>span {
  background: #fff;
  border-radius: 10px;
  height: 2px;
  width: 0%;
  display: block;
  transition: all 0.2s;
}

nav a:hover>span {
  width: 100%;
}
</style>
