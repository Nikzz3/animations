<template>
  <b-container>
    <b-row>
      <b-icon-heart-fill class="heart-beating h1" />
    </b-row>
    <b-row>
      <b-icon-heart-fill class="heart-moving h1" />
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { BIconHeartFill } from 'bootstrap-vue';

export default {
  name: 'Home',
  components: {
    BIconHeartFill
  }
};
</script>
<style scoped>
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
</style>
