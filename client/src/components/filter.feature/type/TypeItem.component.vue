<template>
    <button class="main-color-green main-color-green-border"
            @click="filterByType(filterType.title)"
            :class="{'active': setStyleActiveFilter(currentFilter, filterType)}">
        <i class="fas fa-check-circle main-color-green" v-if="setStyleActiveFilter(currentFilter, filterType)"></i>
        {{filterType.title }}
    </button>

</template>

<script>
    import {mapState} from "vuex";

    import filterByType from "@/utils/filterUtils";

    export default {
        name: "TypeItem",
        props: {
            filterType: {
                type: Object,
                required: true,
                default: null
            }
        },
        computed: {
            ...mapState("activities", ["currentFilter"]),
        },
        mixins: [filterByType],
        methods:{
            setStyleActiveFilter(currentFilter, filterType){
                if(currentFilter) return currentFilter.value === filterType.title
                if(filterType.title === 'all_work' && !currentFilter) return true
            }
        }
    }
</script>

<style scoped lang="scss">
    button {
        background: transparent;
        padding: 5px;
        border-radius: 4px;
        border: 2px solid #0ea999;
        color: #0ea999;
        font-weight: 700;
        margin: 2px;
        cursor: pointer;
        flex: 1;
        text-transform: capitalize;
        &:not(:last-child) {
            margin-right: 5px;
        }

        i {
            margin-right: 0.5rem;
        }
    }

    .active {
        background-color: #edfdfc;
    }
</style>