export default {
    mounted() {
        // For opening activity modal from router  checks if route = zoom and triggers function for opening modal
        this.$route.name === 'zoom' && this.openModal(this.$route.params.id)
    },
    methods: {
        //Dispatches opening modal with single activity. Gets number(id)
        openModal(id) {
            this.$store.dispatch("activities/getDataForModal", id)
        }
    }
};