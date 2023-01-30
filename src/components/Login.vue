<template>
    <div class="login">
        <form @submit.prevent="submit">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="username" class="input" type="username" placeholder="Username">
                    <span class="icon is-small is-left">
                        <FontAwesomeIcons icon="fa-solid fa-user" />
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <FontAwesomeIcons icon="fa-solid fa-lock" />
                    </span>
                </p>
            </div>

            <div class="field">
                <p class="control">
                  <button class="button is-light">
                    Login
                  </button>
                </p>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FontAwesomeIcons from '@/components/icons/FontAwesomeIcons.vue';
import loginService from '@/services/login.service.js';
import { store } from '@/store/index';
import { NOTIFY } from '@/store/mutations-type';
import { Notificationtype } from '@/interfaces/INotification';

export default defineComponent({
    name: 'Login',
    components: {
        FontAwesomeIcons,
        loginService,
    },
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async submit() {
            const response = await loginService.post(this.username, this.password)

            if (response.status === 200) {
                this.notification_store.commit(NOTIFY, {
                    title: 'Successfully login!',
                    text: response.data,
                    type: Notificationtype.SUCCESS
                })
            } else {
                this.notification_store.commit(NOTIFY, {
                    title: 'Opss!',
                    text: response.error.response.data,
                    type: Notificationtype.ERROR
                })
            }

            return {
                response
            }
        }
    },
    async mounted() {
        await loginService.get()
    },
    setup() {
        const notification_store = store

        return {
            notification_store
        }
    },
})
</script>

<style scoped>
.login {
    margin: auto;
    padding: 10px;
}
</style>
