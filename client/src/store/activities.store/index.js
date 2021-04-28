import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
    namespaced: true,

    state: {
        activities: {
            test:'514235412'
        },
    },

    actions,
    mutations,
    getters: {
        getActivities: state => {
            return state.activities;
        },}
};
