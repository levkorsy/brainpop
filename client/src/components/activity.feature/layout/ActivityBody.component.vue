<template>
<div class="body-container">
  <h2 class="title">Title</h2>
  <ActivityDate/>
</div>
</template>

<script>
import ActivityDate from "@/components/activity.feature/layout/ActivityDate.component";
export default {
name: "ActivityBody",
  components: {ActivityDate}
}
</script>

<style scoped lang="scss">
.body-container{
  flex: 12;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }
}
</style>