<template>
  <div class="wrapper">
    <h3>Filter by:</h3>
    <div class="btn-wrapper">
      <TypeItem v-for="(type, idx) in types" :key="idx" :filterType="type"/>
    </div>
  </div>
</template>

<script>

import TypeItem from "./TypeItem.component";
import {mapGetters} from "vuex";

export default {
  name: "TypeFilter",
  computed: {

    ...mapGetters("activities", ["getActivityTypes"]),

    types() {
      return this.$store.getters["activities/getActivityTypes"]
    }
  },

  components: {TypeItem},

}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
}

h3 {
  font-size: 1rem;
  color: #8c8c8c;
}
</style>