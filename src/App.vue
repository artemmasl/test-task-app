<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import messages from "./utils/messages";
import EmptyLayout from "./layouts/EmptyLayout";
import MainLayout from "./layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
    error() {
      return this.$store.getters.error;
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  },
  watch: {
    error(fbError) {
      this.$swal({
        icon: "error",
        text: messages[fbError.code] || "Что-то пошло не так"
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
