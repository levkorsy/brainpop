export default {
    methods: {
        filterByType(type) {
            type ==="all_work" ? this.$store.dispatch("activities/fetchActivities") : this.$store.dispatch("activities/filterByTypeForVuex", type)
            this.$store.dispatch("activities/getCurrentFilter", type)
        },

        filterByText(text) {

            this.$store.dispatch("activities/filterByTextForVuex", text)
            this.$store.dispatch("activities/getSuggestionsList", null)
        },
        suggestionsList(text) {
            this.$store.dispatch("activities/getSuggestionsList", text)
        },


    }
};

export function filterItems(data, searchQuery) {
    let searchResult = data.filter(item => {
        searchQuery = searchQuery.trim();
        searchQuery = searchQuery.toLowerCase();
        let afterRegex = searchQuery.replace(/[.*+\-?^${}()|[\]\\]/g, "");
        return item['topic_data']['name'].toLowerCase().includes(afterRegex);
    });
    return searchResult
}