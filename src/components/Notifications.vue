<template>
    <div class="notification">
        <article class="message"
            :class="context[notification.type]"
            v-for="notification in notifications" :key="notification.id"
        >
            <div class="message-header">
              <p>{{ notification.title }}</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ notification.text }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { store } from '@/store/index';
import { Notificationtype } from '@/interfaces/INotification';

export default defineComponent ({
    name: 'Notifications',
    data() {
        return {
            context: {
                [Notificationtype.SUCCESS]: 'is-success',
                [Notificationtype.WARNING]: 'is-warning',
                [Notificationtype.ERROR]: 'is-danger',
            }
        }
    },
    setup() {
        const notification_store = store
        return {
            notifications: computed(() => notification_store.state.notifications)
        }
    }
})
</script>

<style scoped>
.notification {
    width: 300px;
    padding: 0px;
    background-color: #181818;
}
</style>
