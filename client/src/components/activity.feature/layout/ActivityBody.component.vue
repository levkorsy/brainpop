<template>
    <div class="body-container">
        <h2 class="title">{{ activity.topic_data.name }} {{ activity.resource_type }}</h2>
        <ActivityDate :date="activity.d_created"/>
    </div>
</template>

<script>
    import ActivityDate from "@/components/activity.feature/layout/ActivityDate.component";

    export default {
        name: "ActivityBody",
        components: {ActivityDate},
        props: {
            activity: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    .body-container {
        flex: 12;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 4px;
        }
    }
</style>