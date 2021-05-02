<template>
<div class="score-container main-color-green">
  Score
  <strong>{{ activity.score }}/{{ activity.possible_score }}</strong>
</div>
</template>

<script>
export default {
name: "ActivityScore",
  props:{
    activity:{
      type: Object
    }
  }
}
</script>

<style scoped>
.score-container{
  flex: 1;
  margin-right: 25px;
  display: flex;
  color: #0ea999;
}
strong {
  font-weight: 700;
  margin-left: 5px;
}
</style>