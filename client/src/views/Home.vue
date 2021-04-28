<template>
  <div class="container">
    <TextFilter/>
    <TypeFilter/>
    <MonthActivity v-for="(value, name) in activities" :monthActivities="value" :key="name" :month="getMonthTitle(name)"/>
<ZoomModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextFilter from "@/components/filter.feature/text/TextFilter.component";
import TypeFilter from "@/components/filter.feature/type/TypeFilter.component";
import MonthActivity from "@/components/activity.feature/MonthActivity.container";
import {mapGetters, mapState} from "vuex";
import moment from "moment";
import ZoomModal from "@/components/activity.feature/layout/zoom/ZoomModal.component";


export default {
  name: 'home',
  computed: {
    ...mapState("activities", ["activities"]),
    // ...mapGetters("activities", ["getActivities"]),
  },
  components: {
    ZoomModal,
    MonthActivity,
    TypeFilter,
    TextFilter,
  },
  created() {
    this.$store.dispatch("activities/fetchActivities")
  },
  data() {
    return {
      // activities: this.getActivities
    }
  },
  methods: {
    getMonthTitle(month){
      return moment(parseInt(month)+1, 'M').format('MMMM');
    }
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;

}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/*@media (min-width: 768px) {*/
/*  .container {*/
/*    width: 650px;*/
/*  }*/
/*}*/
/*@media (min-width: 992px) {*/
/*  .container {*/
/*    width: 970px;*/
/*  }*/
/*}*/
/*@media (min-width: 1200px) {*/
/*  .container {*/
/*    width: 1170px;*/
/*  }*/
/*}*/
</style>
