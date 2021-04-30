<template>
  <div class="icon-container" :style="setStyle">
    <img :src="icon" alt="icon-image" class="activity-icon">
    <div class="icon-badge-jr" v-if="options.product === 'bpjr'">Jr.</div>
  </div>
</template>

<script>
export default {
  name: "ActivityIcon",
  props: {
    icon: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  computed: {
    setStyle() {
      return {
        "--bg-color": this.options.product === "bpjr" ? "#f8b70d": "#01cccb",
      };
    }
  },
}
</script>

<style scoped lang="scss">
$bgColor: var(--bg-color);

.icon-container {
  height: 3rem;
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  background-color: var(--bg-color);
  border-radius: 50%;
}

.activity-icon {
  height: 100%;
}
.icon-badge-jr{
  padding: 0.2rem;
  color: #92632c;
  background-color: #fdca64;
  border-radius: 50%;
  position: absolute;
  top: 2.8rem;
  left: 2.8rem;
  font-size: 0.7rem;
  font-weight: 900;
}
</style>