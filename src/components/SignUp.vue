<template>
    <TheWelcome />
    <main>
        <div class="signup">
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
                    <p class="control has-icons-left">
                        <input v-model="confirm_password" class="input" type="password" placeholder="Confirm Password">
                        <span class="icon is-small is-left">
                            <FontAwesomeIcons icon="fa-solid fa-lock" />
                        </span>
                    </p>
                </div>

                <div class="field">
                    <p class="control">
                    <button class="button is-light">
                        Signup
                    </button>
                    </p>
                </div>
            </form>
        </div>
        <LoginLink msg="Already have an account? Sign in here" />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FontAwesomeIcons from '@/components/icons/FontAwesomeIcons.vue';
import signUpService from '@/services/signup.service.js';
import { store } from '@/store';
import { NOTIFY } from '@/store/mutations-type';
import { Notificationtype } from '@/interfaces/INotification';
import TheWelcome from '@/components/TheWelcome.vue';
import LoginLink from '@/components/LoginLink.vue';

export default defineComponent ({
    name: 'SignUp',
    components: {
        FontAwesomeIcons,
        signUpService,
        TheWelcome,
        LoginLink,
    },
    data() {
        return {
            username: '',
            password: '',
            confirm_password: '',
        }
    },
    methods: {
        async submit() {
            const response = await signUpService.post(
                this.username, this.password, this.confirm_password
            )

            if (response.status === 201) {
                this.notif_store.commit(NOTIFY, {
                    title: 'Successfully user created!',
                    text: response.data,
                    type: Notificationtype.SUCCESS
                })
                this.$router.push({ path: '/home' });
            } else {
                this.notif_store.commit(NOTIFY, {
                    title: 'Opss! Something went wrong.',
                    text: response.error.response.data,
                    type: Notificationtype.ERROR
                })
            }

            return {
                response
            }
        },
    },
    setup() {
        const notif_store = store

        return { notif_store }
    },
})
</script>

<style scoped>
.signup {
    margin: auto;
    padding: 10px;
}
</style>
