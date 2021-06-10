<template>
  <div class="home">
    <div>
      <img
        alt="logo"
        src="../assets/finger.png"
        title="Я научу тебя, как печатать быстрее с помощью метода слепой печати"
      />
    </div>
    <div
      class="
        welcome-text
        col-xs-12 col-sm-5 col-sm-offset-7 col-md-6 col-md-offset-6
      "
    >
      <h1>Печатай быстрее</h1>
      <p>
        Научись быстро печатать с клавиатурным тренажером Ratatype. А уроки
        слепой печати помогут тебе использовать все 10 пальцев
      </p>

      <b-button to="/test">Начать печатать</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContainer",
  components: {  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  .welcome-text {
    color: #fff;
  }
}
</style>
