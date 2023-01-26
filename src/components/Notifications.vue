<template>
    <div class="notification">
        <article class="message is-success">
            <div class="message-header">
              <p>Hello World</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Lorem ipsum dolor sit amet!
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'Notifications',
})
</script>

<style scoped>
.notification {
    width: 300px;
    padding: 0px;
}
</style>
