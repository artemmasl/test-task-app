<template>
  <div class="home">
    <!-- <div>
      <img alt="logo" src="../assets/finger.png" title="Я научу тебя, как печатать быстрее с помощью метода слепой печати"/>
    </div>
    <div class="welcome-text col-xs-12 col-sm-5 col-sm-offset-7 col-md-6 col-md-offset-6">
      <h1>Печатай быстрее</h1>
      <p>Научись быстро печатать с клавиатурным тренажером Ratatype. А уроки слепой печати помогут тебе использовать все 10 пальцев</p>

      <b-button to="/test">Начать печатать</b-button>
    </div> -->
    <Navbar  />
    <section class="centerBlue">
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PageContainer",
  components: {
    Navbar
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  margin: 0 auto;
}
.centerBlue {
  width: 100%;
  background-color: #55c5ff;
}
/* .home {
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  .welcome-text {
    color: #fff;
  }
} */
</style>
