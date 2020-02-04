<template>
  <div class="background" />
</template>

<script>
export default {

    name: 'Background'

}
</script>

<style lang="scss" scoped>

.background {
    position: fixed;
    top: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
}

</style>