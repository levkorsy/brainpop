<template>
    <div class="container">
        <TextFilter/>
        <TypeFilter/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import TextFilter from "@/components/filter.feature/text/TextFilter.component";
    import TypeFilter from "@/components/filter.feature/type/TypeFilter.component";

    export default {
        name: 'home',
        components: {
            TypeFilter,
            TextFilter,
        },
        created() {
            this.fetchActivities()
        },
        data(){
            return{
                activities: []
            }
        },
        methods: {
            fetchActivities() {
                fetch('http://localhost:3000/activities/v1')
                    .then(response => response.json())
                    .then(data => this.activities = data);
            }
        },
    }
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }
</style>
