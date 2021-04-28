<template>
    <div class="wrapper">
        <h3>Filter by:</h3>
        <div class="btn-wrapper">
            <TypeItem v-for="(type, idx) in activityTypes" :key="idx" :filterType="type"/>
        </div>
    </div>

</template>

<script>

    import {ActivityTypes} from "../../../global_constans/ActivityTypes"
    import TypeItem from "./TypeItem.component";

    export default {
        name: "TypeFilter",
        components: {TypeItem},
        data() {
            return {
                activityTypes: ActivityTypes
            }
        },
        mounted() {
            console.log(this.activityTypes)
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    display: flex;
    flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
}
    .btn-wrapper{
        display: flex;
        justify-content: space-between;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
h3 {
  font-size: 1rem;
  color: #8c8c8c;
}
</style>