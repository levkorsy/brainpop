<template>
<div class="activity-container">
  <div class="left-col">
  <ActivityIcon :icon="activity.topic_data.icon_path" :options="{ product: activity.product }"/>
  <ActivityBody/>
  </div>
  <div class="right-col">
  <ActivityScore/>
  <ActivityZoom/>
  </div>
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

<style scoped lang="scss">
.activity-container{
  height: 5rem;
  border: #cbcbcb7a 2px solid;
  width: 100%;
  margin: 0.5rem 0rem;
  display: flex;
  padding: 0 30px 0 15px;
  position: relative;
  border-radius: 5px;
  &::before {
    content: "";
    border-left: 2px solid #cbcbcb7a ;
    position: absolute;
    height: 18px;
    top: -19px;
    left: 39px
  }
}
.left-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.right-col {
  display: flex;
  margin-left: auto;
  justify-content: center;
  align-items: center;
}

</style>