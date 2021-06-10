<template>
  <div id="app">
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
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
.container {
  width: 100%;
  position: relative;
  margin: 0 auto;
}
.centerBlue {
  width: 100%;
    background-color: #55c5ff;
}
</style>
