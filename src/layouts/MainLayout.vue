<template>
  <div class="main-layout">
    <Navbar />
    <section class="container">
      <router-view />
    </section>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  }
};
</script>
<style lang="scss">
.main-layout {
  min-height: 100vh;
  background: #dadada;
}
</style>