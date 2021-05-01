<template>
  <div class="month-container">
    <div class="month" @click="showMonthItem = !showMonthItem" title="Show/Hide">{{ month }}</div>
    <ActivityItem v-for="activity in monthActivities" :key="activity.id" :activity="activity" v-show="showMonthItem"/>
  </div>
</template>

<script>
import ActivityItem from "@/components/activity.feature/ActivityItem.component";

export default {
  name: "MonthActivity",
  props: {
    monthActivities: {
      type: Array
    },
    month:{
      type:String,
      default: ''
    }
  },
  components: {ActivityItem},
  data(){
    return{
      showMonthItem: true
    }
  }
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
  border-radius: 35px;
  background: #ffd40029;
  margin-bottom: 9px;
  cursor: pointer;
}
</style>