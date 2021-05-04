<template>
  <div class="list-container" v-if="suggestionsList.length">
    <ul>
      <li class="suggest-item"
          v-for="item in suggestionsList"
          :key="item.id"
          @click="filterByText(item.topic_data.name)"
      >{{ item.topic_data.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import filterByText from "@/utils/filterUtils";

export default {
  name: "AutoSuggestList",
  computed: {
    ...mapGetters("activities", ["getSuggestions"]),
    suggestionsList: {
      get() {
        return this.getSuggestions
      },
      set() {
      }
    }
  },
  mixins: [filterByText],
}
</script>

<style scoped lang="scss">
.list-container {
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid #cbcbcb;
  border-radius: 0px 0px 5px 5px;
  z-index: 1;
  top: 29px;
  height: auto;
  max-height: 267px;
  overflow-y: auto;

  ul {
    padding: 0;
    margin: 0;

    li {
      height: 50px;
      cursor: pointer;
      list-style: none;
      padding: 1rem;
      font-weight: 600;

      &:hover {
        background-color: #e6e6e6;
      }
    }
  }
}
</style>