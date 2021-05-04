import * as actions from "./actions";
import * as mutations from "./mutations";
import {ActivityTypes} from "@/global_constans/ActivityTypes"
import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"
import {filterActivities} from "../../utils/filterUtils"

export default {
    namespaced: true,

    state: {
        activities: [],
        activityTypes: ActivityTypes,
        currentFilter: null,
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
        //Returns object of activities sorted by month(every key - month, value array of activities). Gets state
        getActivities: state => {
            return sortDataByMonth(filterActivities(state.activities, state.currentFilter));
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
