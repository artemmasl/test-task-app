<template>
  <div class="login-form">
    <b-card>
      <b-form @submit.prevent="submitHandler">
        <b-form-group id="input-group-1" label="Эл. почта" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            placeholder="Введите email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Пароль" label-for="input-2">
          <b-form-input
            placeholder="Введите пароль"
            type="password"
            v-model="password"
            :state="password? !$v.password.$invalid : null"
            id="text-password"
            aria-describedby="password-help-block"
            required
          />
          <b-form-text id="password-help-block">Пароль должен быть больше 6 символов</b-form-text>
        </b-form-group>
        <b-button type="submit" variant="primary" class="margin-right">Войти</b-button>
        <b-button type="submit" variant="success" to="/Registr" class="ml-3">Зарегистрироваться</b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>
<style scoped>
</style>
