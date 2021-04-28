<template>
<div class="score-container">
  Score
  <strong>3/10</strong>
</div>
</template>

<script>
export default {
name: "ActivityScore"
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