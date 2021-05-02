<template>
<div class="zoom-container main-color-green" @click="openModal(activity.id)">
<!--<a class="zoom-container" :href="'/zoom/'+activity.id">//   Another option to trigger modal using router(but refreshes the page)-->
  <span><i class="far fa-eye"></i></span>
  <span class="title">View work</span>

</div>
</template>

<script>
import openModal from "@/utils/modalUtils";

export default {
name: "ActivityZoom",
  props:{
    activity:{
      type: Object
    }
  },
  mixins:[openModal],
  methods:{
  open(id){
    this.$store.dispatch("activities/getDataForModal", {id})
  }
  },
}
</script>

<style scoped>
.zoom-container{
  flex: 2;
  color: #0ea999;
font-weight:700;
  cursor: pointer;
}
.title{
  white-space: nowrap;
  margin-left: 0.5rem;
}
</style>