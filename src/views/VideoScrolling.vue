<template>
  <div class="container" ref="container">
    <div class="video">
      <video width="100%" ref="video" preload>
        <source src="../assets/galaxy-s22-ultra_highlights_design-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 100
    };
  },
  mounted() {
    this.registerVideo();
  },
  methods: {
    registerVideo(bound, video) {
      bound = this.$refs.container;
      video = this.$refs.video;
      const scrollVideo = () => {
        if (video.duration) {
          const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      };
      requestAnimationFrame(scrollVideo);
    }
  }
};
</script>
<style scoped>
.container {
  min-height: 250vh;
}
.video {
  position: fixed;
}
.lorem {
  max-height: 500px;
}
</style>
