<template>
    <div class="container">
        <TextFilter/>
        <TypeFilter/>
        <MonthActivity
                v-for="(value, name) in getActivities"
                :monthActivities="value" :key="name"
                :month="getMonthTitle(name)"/>
        <Pagination/>
        <h2 v-if="!Object.keys(getActivities).length">No activities</h2>
        <transition name="bounce">

            <ZoomModal
                    v-if="modalData"
                    :activity="modalData"
            />
        </transition>

    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    import moment from "moment";

    import TextFilter from "@/components/filter.feature/text/TextFilter.component";
    import TypeFilter from "@/components/filter.feature/type/TypeFilter.component";
    import MonthActivity from "@/components/activity.feature/MonthActivity.container";
    import ZoomModal from "@/components/activity.feature/layout/zoom/ZoomModal.component";
    import openModal from "@/utils/modalUtils";
    import Pagination from "../components/activity.feature/Pagination.component";

    export default {
        name: 'ActivitiesView',
        computed: {
            ...mapState("activities", ["modalData"]),
            ...mapGetters("activities", ["getActivities"]),
        },
        components: {
            Pagination,
            ZoomModal,
            MonthActivity,
            TypeFilter,
            TextFilter,
        },
        mixins: [openModal],
        created() {
            this.$route.name === 'home-v-2' && this.$store.dispatch("activities/setUrl", []) //Changes url in store
            this.$store.dispatch("activities/fetchActivities") // fetches activities from the server
        },
        methods: {
            // Function returns title for the month. Get string, return string
            getMonthTitle(month) {
                return moment(parseInt(month) + 1, 'M').format('MMMM');
            }
        },
    }
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

</style>
