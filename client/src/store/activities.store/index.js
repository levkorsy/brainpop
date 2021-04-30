import * as actions from "./actions";
import * as mutations from "./mutations";
import {ActivityTypes} from "../../global_constans/ActivityTypes"

export default {
    namespaced: true,

    state: {
        activities: [],
        activityTypes: ActivityTypes,
        modalData: null
    },
    actions,
    mutations,
    getters: {
        getActivities: state => {
            return state.activities;
        },

        getActivityTypes: state => {
            return state.activityTypes;
        },
        getActivityTypeById: (state) => (title) => {
            return state.activityTypes.find(type => type.title === title)  ? state.activityTypes.find(type => type.title === title) : state.activityTypes.find(type => type.title === 'all_work')
        }
    }
};
