<template>
  <div>
    <div class="header">
      <h2>Scroll Progress</h2>
      <div class="progress-container">
        <div class="progress-bar" :style="scrollProgressStyles"></div>
      </div>
    </div>
    <b-container class="container">
      <b-row>
        <b-icon-heart-fill class="heart-beating h1" />
      </b-row>
      <b-row>
        <b-icon-heart-fill class="heart-moving h1" />
      </b-row>
      <b-row>
        <!-- <svg width="100" class="scroll-animation" height="100" viewBox="0 0 24 24" :style="svgStyles">
        <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
      </svg> -->
        <img :style="svgStyles" class="scroll-animation" src="../assets/logo.png" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { BIconHeartFill } from 'bootstrap-vue';
export default {
  name: 'Home',
  components: {
    BIconHeartFill
  },
  data() {
    return {
      scrollPercentage: 0,
      scrollProgress: 0
    };
  },
  methods: {
    scrollAnmiations() {
      this.handleScroll();
      this.scrollProgressCalc();
    },
    handleScroll() {
      this.scrollPercentage = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * -1;
    },
    scrollProgressCalc() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = (winScroll / height) * 100;
    }
  },
  computed: {
    svgStyles() {
      return {
        'animation-delay': this.scrollPercentage + 's'
      };
    },
    scrollProgressStyles() {
      return {
        width: this.scrollProgress + '%'
      };
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollAnmiations);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollAnmiations);
  }
};
</script>
<style scoped>
.container {
  min-height: 250vw;
}
.scroll-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;

  animation: rotate 1s linear infinite;
  animation-play-state: paused;

  animation-iteration-count: 1;
  animation-fill-mode: both;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.heart-beating {
  animation: beating 500ms infinite;
}

@keyframes beating {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.heart-moving {
  animation: moving 500ms infinite;
}

@keyframes moving {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}

.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}

.header h2 {
  text-align: center;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: #04aa6d;
  width: 0%;
}

.content {
  padding: 100px 0;
  margin: 50px auto 0 auto;
  width: 80%;
}
</style>
