<template>
  <div class="about section" id="about">
    <div class="about__inner -wrap">
      <div class="about__info">
        <h2>Developer</h2>
        <h4>Bay Area, CA</h4>
        <h5>
          Software Developer @
          <br />
          <a href="http://www.lioninteractive.com/">Lion Interactive</a>
        </h5>
        <h5>
          Independent Contractor & Consulting @
          <br />
          <a href="#">Onionalive</a>
        </h5>
      </div>
      <div class="about__music">
        <h4>What I've been listening to:</h4>
        <ul class="listening-to">
          <li v-for="(song, key) in songs" :key="key">
            <a v-bind:href="song.url">{{ song.name }}</a>
            - {{ song.artist['#text'] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      songs: []
    };
  },
  mounted: function() {
    let self = this;
    let url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=s101391&api_key=b2da2d6c867fffcccbce1f31f8211cca&limit=5&format=json";

    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function(songs) {
        console.log(songs.recenttracks.track);
        self.songs = songs.recenttracks.track;
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }
};
</script>

<style scoped lang="scss">
.listening-to {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;

  list-style: none;
  margin: 0;
  padding: 0;

  text-align: left;
}

.about__music {
  text-align: right;
}

.about__inner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  text-align: left;
}
</style>
