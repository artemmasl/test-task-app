<template>
  <div>
    <h1>Описание работ над проектом.</h1>

    <b-card title="Результат">
      <b-card-text> Точность {{ $route.params.resultTest.accuracy }}</b-card-text>
      <b-card-text> Скорость {{ $route.params.resultTest.speed }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TestResult",
  computed: {},
  methods: {
    test() {
      console.log(this.$router);
    },
  },
};
</script>
<style lang="scss" scoped></style>
