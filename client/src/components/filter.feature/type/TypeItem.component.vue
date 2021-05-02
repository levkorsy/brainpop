<template>
  <button @click="filterByType(filterType.title)" class="main-color-green main-color-green-border" :class="{'active': currentFilter === filterType.title}"><i class="fas fa-check-circle main-color-green" v-if="currentFilter === filterType.title"></i>{{ filterType.title }}</button>

</template>

<script>
import filterByType from "@/utils/filterUtils";
import {mapState} from "vuex";

export default {
  name: "TypeItem",
  props: {
    filterType: {
      type: Object,
      required: true,
      default: null
    }
  },
  computed: {
    ...mapState("activities", ["currentFilter"]),
  },
  mixins:[filterByType],
}
</script>

<style scoped lang="scss">
button {
  background: transparent;
  padding: 5px;
  border-radius: 4px;
  border: 2px solid #0ea999;
  color: #0ea999;
  font-weight: 700;
  margin: 2px;
  cursor: pointer;
  flex: 1;

  &:not(:last-child) {
    margin-right: 5px;
  }
  i{
    margin-right: 0.5rem;
  }
}
.active{
  background-color: #edfdfc;
}
</style>