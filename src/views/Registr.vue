<template>
  <div class="login-form">
    <b-card>
      <b-form @submit.prevent="submitHandler">
        <b-form-group id="name" label="Введите имя" label-for="input-1">
          <b-form-input id="name" v-model="name" placeholder="Введите имя" required></b-form-input>
        </b-form-group>
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
          />
          <b-form-text
            id="password-help-block"
          >Ваш пароль должен состоять из 8-20 символов, содержать буквы и цифры и не должен содержать пробелов, специальных символов или эмодзи.</b-form-text>
        </b-form-group>

        <b-button type="submit" variant="primary">Войти</b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>
import { minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  validations: {
    password: { minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/");
      } catch (e) {}
    }
  }
};
</script>
<style scoped>
.login-form {
  margin-top: 30px;
}
</style>
