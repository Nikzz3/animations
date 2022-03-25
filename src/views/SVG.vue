<template>
  <div class="container">
    <svg width="200" height="200">
      <polygon points="60,30 90,90 30,90 45,60" class="triangle">
        <animate attributeName="points" attributeType="XML" from="60,30 90,90 30,90 45,60" to="60,30 90,90 30,90 10,60" dur="3s" />
      </polygon>
    </svg>
    <br />

    <p>Radius eingeben:</p>
    <input type="range" min="20" max="240" v-model="radius" />

    <svg height="500px" width="100%">
      <circle cx="50%" cy="50%" :r="radius" fill="red" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 100
    };
  }
};
</script>

<style scoped>
.triangle {
  fill: green;
}
</style>
