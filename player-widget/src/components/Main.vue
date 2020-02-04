<template>
  <div class="main">
    <div class="music-panel">
      <div class="layer" />
      <div class="shadow-top" />
      <div class="icons">
        <div class="icon">
          <font-awesome-icon icon="exchange-alt" />
        </div>
        <div class="icon">
          <font-awesome-icon icon="random" />
        </div>
        <div class="icon">
          <font-awesome-icon icon="redo-alt" />
        </div>
      </div>
      <div class="menu-icon" @click="changeComponent">
        <font-awesome-icon icon="bars" />
      </div>
      <div class="shadow-bottom" />
      <div class="song-information">
        <p class="song-artist">{{songs[idx].artist}}</p>
        <p class="song-title">{{songs[idx].title}}</p>
      </div>
    </div>
    <div class="volume-line">
      <div class="volume-icon">
        <font-awesome-icon icon="volume-up" />
      </div>
    </div>
    <div class="buttons">
      <div class="shuffle-icon">
        <font-awesome-icon icon="share-alt" />
      </div>
      <div class="switch-icon backward-icon">
        <font-awesome-icon icon="step-backward" @click="prev" />
      </div>
      <div class="playing-icon" @click="playing=!playing">
        <span v-if="playing">
          <font-awesome-icon icon="pause" />
        </span>
        <span v-else>
          <font-awesome-icon icon="play" />
        </span>
      </div>
      <div class="switch-icon forward-icon" @click="next">
        <font-awesome-icon icon="step-forward" />
      </div>
      <div class="favourite-icon">
        <font-awesome-icon icon="heart" />
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/data.js";
import { bus } from "@/main.js";

export default {
  name: "Main",
  data() {
    return {
      playing: true,
      songs: list,
      idx: 0
    };
  },
  methods: {
    changeComponent: function() {
      this.$emit("changeComponent", "songs-list");
    },
    next: function() {
      this.idx++;
    },
    prev: function() {
      this.idx--;
    }
  },
  created() {
    bus.$on("changeSong", data => {
      this.idx = data;
    });
  }
};
</script>

<style lang="scss" scoped>
$main-color: #eeeff5;
$main-button: white;
$red-details: #ed5e74;
$purple-details: #60558f;

@mixin flex($justify: normal, $align: normal) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}
@mixin size($width, $height, $border-radius) {
  width: $width;
  height: $height;
  border-radius: $border-radius;
}

@mixin position-top-left($position, $top, $left) {
  position: $position;
  top: $top;
  left: $left;
}

@mixin position-top-right($position, $top, $right) {
  position: $position;
  top: $top;
  right: $right;
}

.main {
  @include size(360px, 480px, 29px);
  background: $main-color;
}

.music-panel {
  @include size(360px, 337px, 27px 27px 0 0);
  position: relative;
  background-image: url("../assets/girls.jpg");
  background-size: cover;
}

.layer {
  @include size(100%, 100%, 0);
  @include position-top-left(absolute, 0, 0);
  border-radius: 27px 27px 0 0;
  background-color: #544282;
  opacity: 0.4;
}

.shadow-top {
  @include size(360px, 65px, 27px 27px 0 0);
  @include position-top-left(absolute, 0, 0);
  background: black;
  opacity: 0.5;
}

.shadow-bottom {
  @include size(360px, 65px, 0);
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.5;
}

.icons {
  @include flex(normal, center);
  margin-left: 133px;
  height: 65px;
  position: relative;
  z-index: 5;
  color: white;
}

.icon {
  padding-right: 25px;
}

.menu-icon {
  @include position-top-right(absolute, 26px, 20px);
  height: 65px;
  cursor: pointer;
  z-index: 5;
  color: #8d91ca;
}

.volume-line {
  @include size(260px, 7px, 0);
  background: white;
  border-right: 100px solid $red-details;
  position: relative;
}

.volume-icon {
  @include flex(center, center);
  @include size(20px, 20px, 50%);
  @include position-top-right(absolute, -5px, -5px);
  background: $main-button;
  color: $purple-details;
  font-size: 10px;
}

.buttons {
  @include flex(center, center);
  @include size(360px, 133px, 0);
}

.switch-icon {
  @include flex(center, center);
  @include size(36px, 36px, 50%);
  background: $purple-details;
  color: $main-button;
  cursor: pointer;
}

.backward-icon {
  margin-left: 44px;
}

.forward-icon {
  margin-right: 44px;
}

.favourite-icon {
  @include flex(center, center);
  @include size(36px, 36px, 50%);
  color: $red-details;
  background: $main-button;
}

.shuffle-icon {
  @include flex(center, center);
  @include size(36px, 36px, 50%);
  color: $purple-details;
  background: $main-button;
}
.playing-icon {
  @include flex(center, center);
  @include size(52px, 52px, 50%);
  background: $purple-details;
  font-size: 20px;
  margin: 0 18px;
  color: $main-button;
  border: 2px solid #3c355a;
  cursor: pointer;
}

.song-information {
  text-align: center;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
}
.song-artist {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
  color: white;
}

.song-title {
  font-size: 14px;
  margin: 0;
  color: white;
}
</style>