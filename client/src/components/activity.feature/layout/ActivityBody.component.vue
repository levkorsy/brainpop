<template>
<div class="body-container">
  <div>Title</div>
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

<style scoped>
.body-container{
  flex: 12;
}
</style>