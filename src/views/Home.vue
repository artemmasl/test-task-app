<template>
  <div class="home">
    <b-card title="Печатай быстрее" class="text-center" >
      <b-card-text > Научись быстро печатать с клавиатурным тренажером Ratatype. А уроки слепой печати помогут тебе использовать все 10 пальцев.</b-card-text> 
      <b-button variant="success" to="/test">Начать печатать</b-button>
    </b-card >
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.$store.dispatch("fetchInfo");
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15%;
}
</style>
