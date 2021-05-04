import _ from 'lodash'
import router from '@/router'

import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"
import {filterItems, filterActivities} from "../../utils/filterUtils"

//*********************//
//Explanation for filtering. I have decided to simulate filtering via server to get data "up-to-date", this is the reason why every filter action sends request to the server
//*********************//

// Function for reformat data for API-2. Gets array of object and string(url), returns array
function prepareData(data, url) {
    if (url === 'activities/v2') {
        let res = []
        data
            .map(item => {
                // Define key "resource_type" inside every activity item
                return item.activities.forEach(actItem => {
                    actItem.resource_type = item.resource_type
                })
            })
        data.forEach(item => {
            // Pushing changed objects into new array
            item.activities.forEach(actItem => {
                res.push(actItem)
            })
        })
         data = res
    }
    return data
}

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

export async function getDataForModal({commit, state}, id) {
    let singleActivity = state.activities.find(item => {
            return item.id === id
        })
        singleActivity && commit("setDataForModal", singleActivity)
}

export async function resetDataForModal({commit, state}) {
    commit("setDataForModal", null)
}

export async function getCurrentFilter({commit, state}, type) {
    commit("setCurrentFilter", type)
}

export async function getSuggestionsList({commit, state}, text) {
text && commit("activities/setSuggestionsList", filterActivities(state.activities,  {value: text, type:'text'}), {root: true})
!text && commit("activities/setSuggestionsList", [], {root: true})
}
// export async function filterByTypeForVuex({commit, state}, type) {
//     try {
//         //API request to get activities
//         fetch(state.url.main + state.url.activities)
//             .then(response => response.json())
//             .then(data => {
//                 data = prepareData(data, state.url.activities) // preparing data due to the API
//                 return data.filter(item => item.resource_type === type)
//             })
//             .then(async data => {
//                 let sortedData = sortDataByMonth(data)
//                 return sortedData
//             }).then(sortedData => commit("activities/setActivities", sortedData, {root: true})
//         )
//     } catch (e) {
//     }
// }

// export async function filterByTextForVuex({commit, state}, text) {
//     try {
//         //API request to get activities
//         fetch(state.url.main + state.url.activities)
//             .then(response => response.json())
//             .then(data => {
//                 data = prepareData(data, state.url.activities) // preparing data due to the API
//                 return filterItems(data, text)
//             })
//             .then(async data => {
//                 return sortDataByMonth(data)
//             }).then(sortedData => commit("activities/setActivities", sortedData, {root: true})
//         )
//     } catch (e) {
//     }
// }

