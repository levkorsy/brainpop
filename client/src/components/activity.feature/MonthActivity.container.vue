<template>
  <div class="month-container">
    <div class="month">October</div>
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
.month {
  padding: 5px 15px;
  background: red;
  border-radius: 35px;
  background: #ffd40029;
  margin-bottom: 9px;
}
</style>