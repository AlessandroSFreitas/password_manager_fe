<template>
    <div>
        <font-awesome-icon :icon="icon" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export default defineComponent({
    name: 'FontAwesomeIcons',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
})
</script>
