<template>
  <div class="main">
      <div class="music-panel">
          <div class="layer">

          </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'Main'
}
</script>

<style lang="scss" scoped>
.main {
    width: 360px;
    height: 480px;
    border-radius: 29px;
    background: white;
}

.music-panel{
    position: relative;
    border-radius: 27px 27px 0 0;
    height: 337px;
    width: 360px;
    background-image: url('../assets/girls.jpg');
    background-size: cover;
}

.layer {
    border-radius: 27px 27px 0 0;
    background-color: #544282;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}


</style>