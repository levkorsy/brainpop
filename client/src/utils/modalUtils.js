export default {
    mounted() {
        console.log('from mixin')
        console.log(this.$route.name==='zoom');
        console.log(this.$route.path);
    },
    methods: {
        openModal(id) {
            this.$store.dispatch("activities/getDataForModal", id)
        }
    }
};