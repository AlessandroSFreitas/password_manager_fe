<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h3>{{ msg }}</h3>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1.3rem;
  color: #0080ff;
  margin: auto;
  padding: 10px;
  font-family: 'JetBrains Mono';
  font-size: 20px;
}

.greetings h3 {
  text-align: center;
}
</style>
