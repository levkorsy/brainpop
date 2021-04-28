<template>
<div class="icon-container">
  <img :src="icon" alt="icon-image" class="activity-icon">
</div>
</template>

<script>
export default {
  name: "ActivityIcon",
  props:{
    icon:{
      type: String,
      default: null
    },
    options:{
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.icon-container{
  height: 2rem;
  flex: 1;
}
.activity-icon{
  height: 100%;
}
</style>