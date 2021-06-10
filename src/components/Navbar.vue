<template>
  <header class="centerBlue">
    <b-container>
      <b-navbar id="nav">
        <b-navbar-brand>
          <b-link to="/" style="background: none !important">
            <img alt="logo" src="../assets/logo.png"/>
          </b-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/"> Тренажер </b-nav-item>
            <b-nav-item to="/about"> Тестирование </b-nav-item>
            <b-nav-item> Обучение </b-nav-item>
            <b-nav-item> Рейтинг </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  padding: 18px 20px 19px;
  border-radius: 10px;
  font-weight: 700;
  z-index: 1000;
  background-color: #2ea3f8;
  background-image: -o-linear-gradient(top, #39b5fa, #2ea3f8);
  background-image: linear-gradient(to bottom, #39b5fa, #2ea3f8);
  border-top: 1px solid #73ccfb;
  box-shadow: #48a8d9 0 1px 2px;

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
