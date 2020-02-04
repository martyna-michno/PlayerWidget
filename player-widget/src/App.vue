<template>
  <div id="app">
    <Background />
    <SongsList />
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
// import Main from "@/components/Main.vue";
import SongsList from "@/components/SongsList.vue";

export default {
  name: "app",
  components: {
    Background,
    SongsList
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
