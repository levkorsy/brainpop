<template>
  <div class="activity-container" :class="{'hidden-item': !showItem}">
    <div class="left-col" v-show="showItem">
      <ActivityIcon
          :icon="activity.topic_data.icon_path"
          :options="{ product: activity.product }"/>
      <ActivityBody :activity="activity"/>
    </div>
    <div class="right-col" v-show="showItem">
      <ActivityScore
          v-if="type.options.score"
          :activity="activity"/>
      <ActivityZoom
          v-if="type.options.zoom"
          :activity="activity"/>
    </div>
    <div class="item-toggle main-color-green" @click="showItem = !showItem">
      <i :class="showItem ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"
         :title="showItem ? 'Hide' : 'Show'"></i>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import ActivityIcon from "@/components/activity.feature/layout/ActivityIcon.component";
import ActivityBody from "@/components/activity.feature/layout/ActivityBody.component";
import ActivityScore from "@/components/activity.feature/layout/ActivityScore.component";
import ActivityZoom from "@/components/activity.feature/layout/zoom/ActivityZoom.component";

export default {
  name: "ActivityItem",
  components: {ActivityZoom, ActivityScore, ActivityBody, ActivityIcon},
  props: {
    activity: {
      type: Object
    }
  },
  computed: {
    ...mapGetters("activities", ["getActivityTypeById"]),

    type: function () {
      return this.getActivityTypeById(this.activity.resource_type)
    }
  },
  data() {
    return {
      showItem: true
    }
  }
}
</script>

<style scoped lang="scss">

.activity-container {
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
    border-left: 2px solid #cbcbcb7a;
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

.item-toggle {
  padding-left: 1rem;
  color: #0ea999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden-item {
  width: auto;
}
</style>