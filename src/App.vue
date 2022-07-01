<template>
  <div id="app">
    <RootPage />
  </div>
</template>

<script>
import RootPage from "./components/RootPage.vue";

export default {
  name: "App",
  components: {
    RootPage,
  },
};
</script>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
</style>
