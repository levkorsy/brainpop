import _ from 'lodash'
import router from '@/router'

import {prepareData} from "../../utils/sortActivityDataByMonth"
import {filterActivities} from "../../utils/filterUtils"


// Function for reformat data for API-2. Gets array of object and string(url), returns array
export async function fetchActivities({commit, state}, amount = 10) {
    //Setting url due to the current route
    router.currentRoute.name === 'home' && commit("setActivitiesUrl", 'activities/v1')
    router.currentRoute.name === 'home-v-2' && commit("setActivitiesUrl", 'activities/v2')
    try {
        //API request to get activities
        fetch(state.url.main + state.url.activities)
            .then(response => response.json())
            .then(async data => {
                data = prepareData(data, state.url.activities)  // preparing data due to the API
                if (amount && data.length > amount) data.length = amount // simulating pagination
                commit("activities/setActivities", data, {root: true})}
        )
    } catch (e) {
    }
}

export function getDataForModal({commit, state}, id) {
    let singleActivity = state.activities.find(item => {
            return item.id === id
        })
        singleActivity && commit("setDataForModal", singleActivity)
}

export function resetDataForModal({commit, state}) {
    commit("setDataForModal", null)
}

export function getCurrentFilter({commit, state}, type) {
    commit("setCurrentFilter", type)
}

export function setUrl({commit, state}, type) {
    commit("setActivitiesUrl", type)
}

export async function getSuggestionsList({commit, state}, text) {
text && commit("activities/setSuggestionsList", _.uniqBy(filterActivities(state.activities,  {value: text, type:'text'}), 'topic_data.name'), {root: true})
!text && commit("activities/setSuggestionsList", [], {root: true})
}


