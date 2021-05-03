<template>
    <div class="pagination-container">
        <span @click="fetchMoreActivities(activitiesAmount)"><i class="fas fa-chevron-down"></i>Load more</span>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data() {
            return {
                activitiesAmount: 10
            }
        },
        methods: {
            //Function dispatches action for fetch activities with amount of activities
            fetchMoreActivities(amount) {
                this.activitiesAmount += 10
                this.$store.dispatch("activities/fetchActivities", amount)
            }
        }
    }
</script>

<style scoped lang="scss">
    .pagination-container {
        color: #008080;
        margin-top: 2rem;
        font-size: 1.1rem;
        font-weight: 700;

        span {
            cursor: pointer;

            i {
                margin-right: 1rem;
            }
        }

    }
</style>