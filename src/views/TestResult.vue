<template>
  <div>
    <b-card title="Результат">
      <b-card-text> Точность {{ $route.params.resultTest.accuracy }}</b-card-text>
      <b-card-text> Скорость {{ $route.params.resultTest.speed }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "TestResult",
};
</script>
<style lang="scss" scoped>

</style>
