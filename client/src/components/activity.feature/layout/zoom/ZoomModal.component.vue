<template>
<div class="modal-container">
  {{  activity.id }}
</div>
</template>

<script>
export default {
name: "ZoomModal",
  props:{
    activity:{
      type: Object
    }
  },
}
</script>

<style scoped>
.modal-container{
  width: 20rem;
  height: 20rem;
  background-color: #42b983;
  position: fixed;
  margin: 0 auto;
}
</style>