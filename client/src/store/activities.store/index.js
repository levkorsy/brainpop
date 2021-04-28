import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
    namespaced: true,

    state: {
        activities: [],
    },

    actions,
    mutations,
    getters: {
        getActivities: state => {
            return state.activities;
        },}
};
