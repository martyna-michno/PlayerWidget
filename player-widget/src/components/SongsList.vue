<template>
  <div class="wrapper">
    <div class="back">
      <font-awesome-icon icon="reply" @click="changeComponent"/>
    </div>
    <p class="title">Playlist</p>
    <div v-for="(song, index) in songs" :key="index" class="song-container">
      <div class="song-info">
        <p class="first">{{song.time}} | {{song.artist}}</p>
        <p class="second">{{song.title}}</p>
      </div>
      <div class="icons">
        <div class="shuffle">
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
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 360px;
  height: 480px;
  border-radius: 29px;
  background: #f3f4f8;
  position: relative;
  overflow: scroll;
}

.back {
  position: absolute;
  color: #60558f;
  background: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 21px;
  top: 20px;
  cursor:pointer;
}

.title {
  text-align: center;
  margin-top: 31px;
  color: purple;
}

.fav {
  color: #ed5e74;
  margin-left: 12px;
}

.shuffle {
  color: #60558f;
}
.icons {
    display: flex;
    align-items: center;

}
.song-container {
    display: flex;
    border-bottom: 1px solid #d3d5de;
    width: 280px;
    margin-left: 27px;
    padding: 25px 0 25px 0;
    justify-content: space-between
}

.first{
    color: #88858f;
    font-size: 9px;
    margin: 0
}
.second {
    color: #56466e;
    font-size: 12px;
    margin: 7px 0px 0px 0px;
}
</style>