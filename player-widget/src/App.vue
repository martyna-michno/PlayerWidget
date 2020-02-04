<template>
  <div id="app">
    <Background />
    <Main />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Main from "@/components/Main.vue";

export default {
  name: "app",
  components: {
    Background,
    Main
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
