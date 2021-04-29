export const setActivities = (state, payload) => {
    state.activities = payload;
};

export const setDataForModal = (state, payload) => {
    console.log(payload, 'mut')
    state.modalData = payload;
};

