<template>
    <div class="wrapper">
        <h2>Timeline</h2>
        <div class="input-container">
            <input placeholder="Search Timeline" type="text"
                   v-model="searchQuery"
                   @keyup.enter="filterByText(searchQuery)"
                   @input="suggestionsListDebounced(searchQuery)"/>
            <div class="search-icon  main-color-green-bg" @click="filterByText(searchQuery)">
                <i class="fas fa-search"></i></div>
            <AutoSuggestList/>

        </div>
    </div>

</template>

<script>
    import _ from 'lodash';

    import filterByText from "@/utils/filterUtils";
    import suggestionsList from "@/utils/filterUtils";
    import AutoSuggestList from "./AutoSuggestList.component";

    export default {
        name: "TextFilter",
        components: {AutoSuggestList},
        mixins: [filterByText, suggestionsList],
        data() {
            return {
                searchQuery: null
            }
        },
        methods: {
            // Function dispatches activity for getting suggestion list. Get string. Used debounce function of lodash
            suggestionsListDebounced: _.debounce(function (text) {
                this.$store.dispatch("activities/getSuggestionsList", text)
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">

    .wrapper {
        text-align: left;
    }


    .input-container {
        display: flex;
        height: 30px;
        width: 350px;
        position: relative;

        input {
            width: 100%;
            padding: 5px;
            border: 1px solid #cbcbcb;
            border-right: none;

            &::placeholder {
                font-weight: 700;
            }
        }

        .search-icon {
            background-color: #0ea999;
            color: white;
            width: 30px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 4px 4px 0;
            cursor: pointer;

        }
    }
</style>