<template>
  <div id="app">
    <background />
    <keep-alive>
    <component v-bind:is="component" v-on:changeComponent="updateComponent($event)"></component>
    </keep-alive>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Main from "@/components/Main.vue";
import SongsList from "@/components/SongsList.vue";

export default {
  name: "app",
  components: {
    background: Background,
    "main-view": Main,
    "songs-list": SongsList
  },
  data() {
    return {
      component: "main-view"
    };
  },
  methods: {
    updateComponent: function(newComponent) {
      this.component = newComponent;
    }
  }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Rambla:400,700&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rambla", sans-serif;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
