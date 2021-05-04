export default {
    methods: {
        //Function dispatches actions for filtering by type. Gets string
        filterByType(type) {
            // Dispatches action for setting current filter
            let filter;
            type === "all_work" ? filter = null : filter = {value: type, type: 'type'}
            this.$store.dispatch("activities/getCurrentFilter", filter)
        },
        //Function dispatches actions for filtering by text. Gets string
        filterByText(text) {
            // Dispatches action for fetching activities with filter
            this.$store.dispatch("activities/getCurrentFilter", {value: text, type: 'text'})
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
    return data.filter(item => {
        searchQuery = searchQuery.trim(); // Remove whitespace from both sides of a string
        searchQuery = searchQuery.toLowerCase(); //Convert the string to lowercase letters
        let afterRegex = searchQuery.replace(/[.*+\-?^${}()|[\]\\]/g, ""); // Remove symbols
        return item['topic_data']['name'].toLowerCase().includes(afterRegex);
    })
}

// Function for filter activities Gets array of objects(activities) and filter object, returns filtered array of objects(activities)
export function filterActivities(data, filter) {
    if (!filter) return data
    switch (filter.type) {
        case "type":
            return data.filter(item => item.resource_type === filter.value)
        case "text":
            return filterItems(data, filter.value)
        default:
            return data
    }
}