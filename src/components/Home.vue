<template>
    <div class="home">
        <NavBar />
        <h1>Home</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
    name: 'Home',
    components: {
        NavBar,
    },
})
</script>

<style scoped>
</style>
