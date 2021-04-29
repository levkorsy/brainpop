<template>
  <div class="modal-container">
    {{ activity.id }}
    <span class="close-trigger" @click="close">
      <i class="fas fa-times"></i>


    </span>
  </div>
</template>

<script>
export default {
  name: "ZoomModal",
  props: {
    activity: {
      type: Object
    }
  },
  methods: {
    close() {
      this.$store.dispatch("activities/resetDataForModal")

    }
  }
}
</script>

<style scoped>
.modal-container {
  width: 35rem;
  height: 20rem;
  background-color: white;
  position: fixed;
  margin: auto 40%;
  border: 5px solid #aaaaaa;
  border-radius: 18px;
  padding: 1rem;
}

.close-trigger {
  position: absolute;
  right: 1rem;
  color: #aaaaaa;
  border: 4px solid #aaaaaa;
  border-radius: 50%;
  padding: 2px 5px;
  cursor: pointer;
}
.close-trigger:hover{
  opacity: 0.6;
  transform: scale(1.1);
}
</style>