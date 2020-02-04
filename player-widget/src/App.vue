<template>
  <div id="app">
    Hello!
    <Background />
  </div>
</template>

<script>

import Background from '@/components/Background.vue'

export default {
  name: 'app',
  components: {
    Background
  }
}
</script>

<style lang="scss">

body {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
