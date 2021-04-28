<template>
<div class="activity-container">
  <ActivityIcon :icon="activity.topic_data.icon_path" :options="{ product: activity.product }"/>
  <ActivityBody/>
  <ActivityScore/>
  <ActivityZoom/>
</div>
</template>

<script>
import ActivityIcon from "@/components/activity.feature/layout/ActivityIcon.component";
import ActivityBody from "@/components/activity.feature/layout/ActivityBody.component";
import ActivityScore from "@/components/activity.feature/layout/ActivityScore.component";
import ActivityZoom from "@/components/activity.feature/layout/ActivityZoom.component";
export default {
  name: "ActivityItem",
  components: {ActivityZoom, ActivityScore, ActivityBody, ActivityIcon},
  props:{
    activity:{
      type: Object
    }
  }
}
</script>

<style scoped>
.activity-container{
  height: 10rem;
  border: #42b983 1px solid;
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
}

</style>