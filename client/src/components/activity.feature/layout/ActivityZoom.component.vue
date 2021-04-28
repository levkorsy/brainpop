<template>
<div class="zoom-container">
  <span><i class="far fa-eye"></i></span>
  <span class="title">View work</span>
</div>
</template>

<script>
export default {
name: "ActivityZoom"
}
</script>

<style scoped>
.zoom-container{
  flex: 2;
  color: #0ea999;
font-weight:700;
}
.title{
  white-space: nowrap;
  margin-left: 0.5rem;
}
</style>