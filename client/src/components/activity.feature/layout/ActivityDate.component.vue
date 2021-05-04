<template>
  <p>{{ formatDate(date) }}</p>
</template>

<script>
import moment from "moment";

export default {
  name: "ActivityDate",
  props: {
    date: {
      type: String
    }
  },
  methods: {
    //Function formats date. Get string, return string from object(moment)
    formatDate(date) {
      return moment(parseInt(date)).format('MMM D YYYY, h:mm a')
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