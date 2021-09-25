<template>
  <v-container>
    <v-row align="center" justify="center">
      <video-player ref="videoPlayer"
        class="vjs-custom-skin"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @ready="onPlayerReady($event)">
      </video-player>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
    
  },
  
  data:() => ({
    playerOptions: {
      autoplay: true,
      controls: true,
      controlBar: {
        timeDivider: false,
        durationDisplay: false
      }
      // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
    }
  }),
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init() {
      const loading = this.$vs.loading()
      const src = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
      this.playVideo(src)
      loading.close()
    },

    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerReady (player) {
      console.log('player ready!', player)
      this.player.play()
    },
    playVideo: function (source) {
      const video = {
        withCredentials: false,
        type: 'application/x-mpegurl',
        src: source
      }
      this.player.reset() // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
      this.player.src(video)
      // this.player.load()
      this.player.play()
    }
    
  }
}
</script>
<style lang="scss">
  .player {
    position: absolute !important;
    width: 100%;
    height: 60%;
  }
  .vjs-custom-skin {
    height: 60% !important;
  }
</style>

 