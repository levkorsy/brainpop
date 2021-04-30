<template>
  <div class="wrapper">
    <h2>Timeline</h2>
    <div class="input-container">
    <input placeholder="Search Timeline" type="text" v-model="searchQuery"/>
<!--    <input placeholder="Search Timeline" type="text" @input="filterByText(searchQuery)" v-model="searchQuery"/>-->
    <div class="search-icon" @click="filterByText(searchQuery)"><i class="fas fa-search"></i></div>
    </div>
  </div>

</template>

<script>
import filterByText from "@/utils/filterUtils";

export default {
name: "TextFilter",
  mixins:[filterByText],
  data(){
  return {
    searchQuery: null
  }
  },
}
</script>

<style scoped lang="scss">
.wrapper{
  text-align: left;
}


.input-container {
  display: flex;
  height: 30px;
  width: 350px;
  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #cbcbcb ;
    border-right: none;

    &::placeholder {
      font-weight: 700;
    }
  }
  .search-icon {
    background-color: #0ea999;
    color: white;
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

  }
}
</style>