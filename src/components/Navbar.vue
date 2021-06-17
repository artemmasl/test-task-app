<template>
  <header>
    <b-navbar id="nav">
      <b-navbar-brand>
        <b-link to="/" style="background: none !important">
          <img alt="logo" src="../assets/logo.png" />
        </b-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Тренажер</b-nav-item>
          <b-nav-item to="/work-plan">Рейтинг</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>{{name()}}</em>
          </template>
          <b-dropdown-item >Профиль</b-dropdown-item>
          <b-dropdown-item @click="logout">Выход</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  methods: {
    name() {
      return this.$store.getters.info.name;
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  }
};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  padding: 18px 20px 19px;
  font-weight: 700;
  z-index: 1000;
  background-color: #55c5ff;

  a.nav-link {
    color: white;
    border-radius: 15px;
    margin: 0 5px;
  }
  a.router-link-exact-active {
    background-color: #27a2e8;
    background-image: -o-linear-gradient(top, #29a5e8, #27a2e8);
    background-image: linear-gradient(to bottom, #29a5e8, #27a2e8);
  }
}
</style>
