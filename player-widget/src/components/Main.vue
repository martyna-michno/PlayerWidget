<template>
  <div class="main">
    <div class="music-panel">
      <div class="layer" />
      <div class="shadow-top"></div>
      <div class="shadow-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
.main {
  width: 360px;
  height: 480px;
  border-radius: 29px;
  background: #e7e6ed;
}

.music-panel {
  position: relative;
  border-radius: 27px 27px 0 0;
  height: 337px;
  width: 360px;
  background-image: url("../assets/girls.jpg");
  background-size: cover;
}

.layer {
z-index: 1;
  border-radius: 27px 27px 0 0;
  background-color: #544282;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shadow-top {
  border-radius: 27px 27px 0 0;
  height: 65px;
  width: 360px;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
}

.shadow-bottom {
  height: 65px;
  width: 360px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.5;
}

</style>