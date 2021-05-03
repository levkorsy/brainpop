export default {
    methods: {
        //Function dispatches actions for filtering by type. Gets string
        filterByType(type) {
            //Checking if type "all_work" dispatches action for fetching all activities without filter
            type === "all_work" ? this.$store.dispatch("activities/fetchActivities") : this.$store.dispatch("activities/filterByTypeForVuex", type)
            // Dispatches action for setting current filter
            this.$store.dispatch("activities/getCurrentFilter", type)
        },

        //Function dispatches actions for filtering by text. Gets string
        filterByText(text) {
            // Dispatches action for fetching activities with filter
            this.$store.dispatch("activities/filterByTextForVuex", text)
            // Dispatches action for reset suggestion list
            this.$store.dispatch("activities/getSuggestionsList", null)
        },

        // Dispatches action for getting suggestion list
        suggestionsList(text) {
            this.$store.dispatch("activities/getSuggestionsList", text)
        },
    }
};

// Function for filter activities array by topic_data.name. Gets array of objects(activities), returns filtered array of objects(activities)
export function filterItems(data, searchQuery) {
    console.log(data, searchQuery)
    return data.filter(item => {
        searchQuery = searchQuery.trim(); // Remove whitespace from both sides of a string
        searchQuery = searchQuery.toLowerCase(); //Convert the string to lowercase letters
        let afterRegex = searchQuery.replace(/[.*+\-?^${}()|[\]\\]/g, ""); // Remove symbols
        return item['topic_data']['name'].toLowerCase().includes(afterRegex);
    })
}