<template>
  <v-container>
    <v-row align="center" justify="center">
      <!-- <video-player ref="videoPlayer"
        class="vjs-custom-skin"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @ready="onPlayerReady($event)">
      </video-player> -->
      <img name="main" id="main" border="0" width="640" height="480" src="http://192.168.1.110/cgi-bin/fwstream.cgi?FwModId=0&AppKey=0x0450f000&PortId=0&PauseTime=10&FwCgiVer=0x0001">
      <!-- <div class="video-container">
        <video id="video" width="400" height="300" autoplay></video>
        <canvas id="canvas" width="400" height="300"></canvas>
      </div> -->
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
      },
      poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg'
    }
  }),
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  mounted(){
    this.init()
    //this.playingVideo()
  },
  methods:{
    init() {
      const loading = this.$vs.loading()
      const src =  'http://192.168.1.110/cgi-bin/fwstream.cgi?FwModId=0&AppKey=0x0450f000&PortId=0,1,2&PauseTime=10&FwCgiVer=0x0001'//'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
      //this.playVideo(src)
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
    },

    playingVideo() {
      var canvas = document.getElementById('canvas'),
          context = canvas.getContext('2d'),
          video = document.getElementById('video'),
          vendorUrl = window.URL || window.webkitURL;
        
      navigator.getMedia = navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
      navigator.getMedia({
        video:true,
        audio:false
      }, (stream) => {
        console.log(stream)
        video.srcObject = stream
        console.log(video)
        video.play();
      }, (error) =>{
        console.log(error)
      });

      video.addEventListener('play', () => {
        this.draw(video, context, 400, 300);
      }, false);
    },

    draw(video, context, width, height) {
      console.log(video)
      context.drawImage(video, 0, 0, width, height);
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
  video{
    background-color: black;
  }
</style>

 