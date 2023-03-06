<template>
  <div class="greetings">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Greetings',
    props: {
        msg: String,
    }
})
</script>

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
  color: #2a7afe;
  background-color: #181818;
  letter-spacing: .1em;
  text-shadow:
    0 -1px 0 #181818,
    0 1px 0 #2571ee,
    0 2px 0 #2571ee,
    0 3px 0 #2571ee,
    0 4px 0 #282828,
    0 5px 0 #262626,
    0 6px 0 #242424,
    0 7px 0 #222,
    0 8px 0 #202020,
    0 9px 0 #1e1e1e,
    0 10px 0 #1c1c1c,
    0 11px 0 #1a1a1a,
    0 12px 0 #181818,
    0 13px 0 #161616,
    0 14px 0 #141414,
    0 15px 0 #121212,
    0 22px 30px rgba(145, 144, 137, 0.9);
}
</style>
