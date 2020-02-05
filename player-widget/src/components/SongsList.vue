<template>
  <div class="wrapper">
    <div class="back-icon">
      <font-awesome-icon icon="reply" @click="changeComponent" />
    </div>
    <h2 class="title">Playlist</h2>
    <div v-for="(song, index) in songs" :key="index" class="song-container">
      <div class="songs-information">
        <span class="date-author-info">{{song.time}} | </span> 
         <span class="date-author-info">{{song.artist}}</span>
        <p class="song-title" @click="showSong(index)">{{song.title}}</p>
      </div>
      <div class="icons">
        <div class="share">
          <font-awesome-icon icon="share-alt" />
        </div>
        <div class="fav">
          <font-awesome-icon icon="heart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from "@/data.js";
import { bus } from "@/main.js";
export default {
  name: "SongList",
  data() {
    return {
      songs: list
    };
  },
  methods: {
    changeComponent: function() {
      this.$emit("changeComponent", "main-view");
    },
    showSong: function(index) {
      this.$emit("changeComponent", "main-view");
      bus.$emit("changeSong", index);
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #f3f4f8;
$details-color: #60558f;

@mixin flex($justify: normal, $align: normal) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

.wrapper {
  width: 360px;
  height: 480px;
  border-radius: 29px;
  background: $main-color;
  position: relative;
  overflow: scroll;
}

.back-icon {
  @include flex(center, center);
  position: absolute;
  left: 21px;
  top: 20px;
  background: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: $details-color;
  cursor: pointer;
}

.title {
  font-size: 20px;
  margin: 24px 0 10px 0;
  text-align: center;
  color: $details-color;
}

.fav {
  color: #ed5e74;
  margin-left: 12px;
  cursor: pointer;
}

.share {
  color: $details-color;
  cursor: pointer;
}

.icons {
  @include flex(normal, center);
  font-size: 10px;
}

.song-container {
  @include flex(space-between);
  border-bottom: 1px solid #d3d5de;
  width: 280px;
  margin-left: 27px;
  padding: 20px 0 20px 0;
}

.song-information {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.date-author-info {
  font-size: 12px;
  margin: 0 0 5px 0;
  color: #88858f;
}

.song-title {
  font-size: 16px;
  margin: 0;
  color: #56466e;
  cursor: pointer;
}
</style>