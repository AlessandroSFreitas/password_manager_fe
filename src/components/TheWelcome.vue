<template>
  <header>
    <div>
      <img alt="Vue logo" src="../assets/pngegg.png" width="150" height="150" />
    </div>

    <div class="wrapper">
      <Greetings msg="Password Manager" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Greetings from '@/components/Greetings.vue';

export default defineComponent ({
    name: 'TheWelcome',
    components: {
        Greetings,
    },
})
</script>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: grid;
    place-items: center;
  }

  header .wrapper {
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
