import * as actions from "./actions";
import * as mutations from "./mutations";
import {ActivityTypes} from "@/global_constans/ActivityTypes"

export default {
    namespaced: true,

    state: {
        activities: [],
        activityTypes: ActivityTypes,
        currentFilter: 'all_work',
        modalData: null,
        suggestionsList: [],
        url: {
            activities: 'activities/v1',
            main: 'http://localhost:3000/'
        },

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
        //Returns objects of single activity type. Gets state and string(title)
        getActivityTypeById: (state) => (title) => {
            return state.activityTypes.find(type => type.title === title) ? state.activityTypes.find(type => type.title === title) : state.activityTypes.find(type => type.title === 'all_work')
        },
        getCurrentFilterType: state => {
            return state.currentFilter;
        },
        getSuggestions: state => {
            return state.suggestionsList;
        },
    },

};
