<template>
  <div class="month-container">
    <ActivityItem v-for="activity in monthActivities" :key="activity.id" :activity="activity"/>
  </div>
</template>

<script>
import ActivityItem from "@/components/activity.feature/ActivityItem.component";

export default {
  name: "MonthActivity",
  props: {
    monthActivities: {
      type: Array
    }
  },
  components: {ActivityItem}
}
</script>

<style scoped>
.month-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>