<template>
  <div class="empty-layout">
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.empty-layout {
  background-color: #55c5ff;
  width: 100%;
  height: 100vh;
 
  padding-top: 15%;
}
</style>