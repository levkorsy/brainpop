<template>
<p>{{ formatDate(date) }}</p>
</template>

<script>
import moment from "moment";

export default {
name: "ActivityDate",
  props:{
    date:{
      type: String
    }
  },
   mounted() {
   },
  methods:{
    formatDate(){
      return moment(parseInt(this.date)).format('MMM D YYYY, h:mm a')
    }
  },
}
</script>

<style scoped>
  p {
    margin: 0;
    color: #8c8c8c;
  }
</style>