<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/pngegg.png" width="150" height="150" />

    <div class="wrapper">
      <Greetings msg="Password Manager" />
    </div>
  </header>

  <main>
    <Login />
    <SignUpLink msg="Have you an account? Try sign up!" />
  </main>
</template>

<script setup lang="ts">
import Login from '@/components/Login.vue';
import Greetings from '@/components/Greetings.vue';
import SignUpLink from '@/components/SignUpLink.vue';
import Notifications from '@/components/Notifications.vue';
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
