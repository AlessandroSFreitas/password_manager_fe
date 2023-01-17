<template>
    <div class="signup">
        <!-- link para a pagina de signup -->
        <a><p>{{ msg }}</p></a>
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
