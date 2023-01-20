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
            await loginService.post(this.username, this.password)
        }
    },
    async mounted() {
        await loginService.get()
    }
})
</script>

<style scoped>
.login {
    margin: auto;
    padding: 10px;
}
</style>
