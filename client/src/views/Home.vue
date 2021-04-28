<template>
  <div class="container">
    <TextFilter/>
    <TypeFilter/>
    <MonthActivity :monthActivities="activities"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TextFilter from "@/components/filter.feature/text/TextFilter.component";
import TypeFilter from "@/components/filter.feature/type/TypeFilter.component";
import MonthActivity from "@/components/activity.feature/MonthActivity.container";
import { mapGetters, mapState } from "vuex";


export default {
  name: 'home',
  computed: {
    ...mapState("activities", ["activities"]),
    // ...mapGetters("activities", ["getActivities"]),
  },
  components: {
    MonthActivity,
    TypeFilter,
    TextFilter,
  },
  created() {
    console.log(this.getActivities)
    // this.fetchActivities()
  this.$store.dispatch("activities/fetchActivities")
  },
  data() {
    return {
      // activities: this.getActivities
    }
  },
  methods: {
    // fetchActivities() {
    //   fetch('http://localhost:3000/activities/v1')
    //       .then(response => response.json())
    //       .then(data => this.activities = data);
    // }
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
