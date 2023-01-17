<template>
    <div class="login">
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="username" placeholder="Username">
                <span class="icon is-small is-left">
                    <FontAwesomeIcons icon="fa-solid fa-user" />
                </span>
            </p>
        </div>

        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password">
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FontAwesomeIcons from '@/components/icons/FontAwesomeIcons.vue';

export default defineComponent({
    name: 'Login',
    components: {
        FontAwesomeIcons,
    }
})
</script>

<style scoped>
.login {
    margin: auto;
    padding: 10px;
}
</style>
