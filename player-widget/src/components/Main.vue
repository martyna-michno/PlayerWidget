<template>
  <div class="main">
    <div class="music-panel">
      <div class="layer" />
      <div class="shadow-top"></div>
      <div class="icons">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'exchange-alt']" />
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'random']" />
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'redo-alt']" />
        </div>
      </div>
      <div class="menu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div class="shadow-bottom"></div>
    </div>
    <div class="volume-line">
      <div class="volume">
        <font-awesome-icon :icon="['fas', 'volume-up']" />
      </div>
    </div>
    <div class="buttons">
      <div class="shuffle">
        <font-awesome-icon icon="share-alt" />
      </div>
      <div class="switch back">
        <font-awesome-icon icon="step-backward" />
      </div>
      <div class="music" @click="playing=!playing">
        <span v-if="playing"><font-awesome-icon icon='pause' /></span>
        <span v-else><font-awesome-icon icon='play' /></span>
      </div>
      <div class="switch forward">
        <font-awesome-icon icon="step-forward" />
      </div>
      <div class="fav">
        <font-awesome-icon icon="heart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      playing: true
    };
  },
  methods: {
    hello: function() {
      console.log('hello')
    }

  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 360px;
  height: 480px;
  border-radius: 29px;
  background: lightgray;
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

.icons {
  color: white;
  display: flex;
  margin-left: 133px;
  align-items: center;
  height: 65px;
  position: relative;
  z-index: 100;
}

.icon {
  padding-right: 25px;
}

.menu {
  color: #8d91ca;
  position: absolute;
  top: 26px;
  right: 20px;
  height: 65px;
}

.volume-line {
  height: 7px;
  width: 260px;
  background: white;
  border-right: 100px solid #ed5e74;
  position: relative;
}

.volume {
  color: #60558f;
  font-size: 10px;
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 133px;
  width: 360px;
}
.switch {
  background: #60558f;
  color: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  margin-left: 44px;
}

.forward {
  margin-right: 44px;
}

.fav {
  color: #ed5e74;
  background: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shuffle {
  color: #60558f;
  background: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.music {
  font-size: 20px;
  background: #60558f;
  color: white;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #3c355a;
  margin: 0 18px;
  cursor: pointer;
}
</style>