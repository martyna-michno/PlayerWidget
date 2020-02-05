<template>
  <div class="wrapper">
    <div class="music-panel">
      <div class="pink-layer" />
      <div class="shadowbox-top" />
      <div class="small-static-icons">
        <div class="small-static-icon">
          <font-awesome-icon icon="exchange-alt" />
        </div>
        <div class="small-static-icon">
          <font-awesome-icon icon="random" />
        </div>
        <div class="small-static-icon">
          <font-awesome-icon icon="redo-alt" />
        </div>
      </div>
      <div class="menu-icon" @click="changeComponent">
        <font-awesome-icon icon="bars" />
      </div>
      <div class="shadowbox-bottom" />
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
      if (this.idx < this.songs.length - 1) {
        this.idx++;
      } else {
        this.idx;
      }
    },
    prev: function() {
      if (this.idx == 0) {
        this.idx;
      } else {
        this.idx--;
      }
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
$photo-layer: #544282;

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

.wrapper {
  @include size(360px, 480px, 29px);
  background: $main-color;
}

.music-panel {
  @include size(360px, 337px, 27px 27px 0 0);
  position: relative;
  background-image: url("../assets/girls.jpg");
  background-size: cover;
}

.pink-layer {
  @include size(100%, 100%, 27px 27px 0 0);
  @include position-top-left(absolute, 0, 0);
  background: $photo-layer;
  opacity: 0.4;
}

.shadowbox-top {
  @include size(360px, 65px, 27px 27px 0 0);
  @include position-top-left(absolute, 0, 0);
  background: black;
  opacity: 0.5;
}

.shadowbox-bottom {
  @include size(360px, 65px, 0);
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.5;
}

.small-static-icons {
  @include flex(normal, center);
  margin-left: 133px;
  height: 65px;
  position: relative;
  color: white;
}

.small-static-icon {
  padding-right: 25px;
  cursor: pointer;
}

.menu-icon {
  @include position-top-right(absolute, 26px, 20px);
  height: 65px;
  cursor: pointer;
  color: #85889f;
}

.volume-line {
  @include size(260px, 7px, 0);
  background: white;
  border-right: 100px solid $red-details;
  position: relative;
}

.volume-icon {
  @include flex(center, center);
  @include size(21px, 21px, 50%);
  @include position-top-right(absolute, -7px, -5px);
  background: $main-button;
  color: $purple-details;
  font-size: 10px;
  cursor: pointer;
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
  cursor: pointer;
}

.shuffle-icon {
  @include flex(center, center);
  @include size(36px, 36px, 50%);
  color: $purple-details;
  background: $main-button;
  cursor: pointer;
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