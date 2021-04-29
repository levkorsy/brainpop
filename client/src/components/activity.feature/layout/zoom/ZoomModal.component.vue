<template>
<div class="modal-container">
  {{  activity.id }}
  <button @click="close">X</button>
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
  methods:{
  close(){
    this.$store.dispatch("activities/resetDataForModal")

  }
  }
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