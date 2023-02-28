<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/pngegg.png" width="150" height="150" />

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
.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
