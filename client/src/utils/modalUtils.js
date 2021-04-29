export default {
    mounted() {
        this.$route.name==='zoom' && this.openModal(this.$route.params.id)
    },
    methods: {
        openModal(id) {
            this.$store.dispatch("activities/getDataForModal", id)
        }
    }
};