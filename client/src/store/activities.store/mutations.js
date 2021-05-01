export const setActivities = (state, payload) => {
    state.activities = payload;
};

export const setDataForModal = (state, payload) => {
    state.modalData = payload;
};
export const setCurrentFilter = (state, payload) => {
    state.currentFilter = payload;
};
export const setSuggestionsList = (state, payload) => {
    state.suggestionsList = payload;
};

export const setActivitiesUrl = (state, payload) => {
    state.url.activities = payload;
};

