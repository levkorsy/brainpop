<template>
  <div class="modal-container">
        <span class="close-trigger" @click="close">
      <i class="fas fa-times"></i>
    </span>
    <div class="top-row">
      <div class="placeholder">
        <ActivityIcon :icon="activity.topic_data.icon_path" :options="{ product: activity.product }"/>
      </div>
      <h1>{{ activity.topic_data.name }} {{ activity.resource_type }}</h1>
      <ActivityDate :date="activity.d_created"/>
    </div>
    <div class="bottom-row">
      <h3>{{ activity.comment }}!</h3>
      <ActivityScore v-if="type.options.score" :activity="activity"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import ActivityScore from "../ActivityScore.component";
import ActivityDate from "../ActivityDate.component";
import ActivityIcon from "../ActivityIcon.component";

export default {
  name: "ZoomModal",
  components: {ActivityIcon, ActivityDate, ActivityScore},
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

  methods: {
    //Function close modal. Dispatches action
    close() {
      this.$store.dispatch("activities/resetDataForModal")
    }
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, p {
  margin: 0;
}

.modal-container {
  width: 90vw;
  max-width: 35rem;
  height: 20rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid #aaaaaa;
  border-radius: 18px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
  margin-bottom: 10px;
}

.bottom-row {
  align-self: flex-start;

}

.bottom-row h3 {
  font-size: 1.2rem;
  margin-bottom: 70px;

}

.close-trigger {
  position: absolute;
  right: 1rem;
  color: #aaaaaa;
  border: 3px solid #aaaaaa;
  border-radius: 50%;
  padding: 2px 5px;
  cursor: pointer;

}

.close-trigger:hover {
  opacity: 0.6;
  transform: scale(1.1);
  transition: all ease-in-out 0.2s;
}

storng {
  font-weight: 700;
}

.placeholder {
  border-radius: 50%;
}
</style>