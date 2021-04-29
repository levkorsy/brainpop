<template>
  <div class="modal-container">
    {{ activity.id }}
    <span class="close-trigger" @click="close">
      <i class="fas fa-times"></i>
    </span>

    <div class="top-row">
    <div class="placeholder"></div>
    <h1>Dna Movie Quiz</h1>
    <p>Oct 28, 2019 6:25 pm</p>
    </div>

    <div class="bottom-row">
    <h3>Great job!</h3>
    <p class="score">Score <strong>3/10</strong> </p>
    </div>

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
h1,h2,h3,h4,h5,p {
  margin: 0;
}
.modal-container {
  width: 90vw;
  max-width: 35rem;
  height: 20rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid #aaaaaa;
  border-radius: 18px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
  margin-bottom: 10px;
}
.bottom-row {
  align-self: flex-start;

}
.bottom-row h3 {
  font-size: 1.2rem;
  margin-bottom: 70px;

}
.close-trigger {
  position: absolute;
  right: 1rem;
  color: #aaaaaa;
  border: 3px solid #aaaaaa;
  border-radius: 50%;
  padding: 2px 5px;
  cursor: pointer;
}
.close-trigger:hover{
  opacity: 0.6;
  transform: scale(1.1);
}
storng {
  font-weight: 700;
}
.score {
  color: #0ea999;
}
.placeholder {
  width: 50px;
  height: 50px;
  background: grey;
  border-radius: 50%;
}
</style>