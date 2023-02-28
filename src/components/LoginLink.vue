<template>
    <div class="login">
        <router-link to="/">{{ msg }}</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'LoginLink',
    props: {
        msg: String,
    }
})
</script>

<style scoped>
.login {
    margin: auto;
    padding: 10px;
}
</style>
