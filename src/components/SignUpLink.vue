<template>
    <div class="signup">
        <router-link to="/signup">{{ msg }}</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'SignUpLink',
    props: {
        msg: String,
    }
})
</script>

<style scoped>
.signup {
    margin: auto;
    padding: 10px;
}
</style>
