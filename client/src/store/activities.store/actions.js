import _ from 'lodash'
import router from '@/router'

import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"
import {filterItems} from "../../utils/filterUtils"
//TODO comment and expanation why
function prepareData(data, url) {
    if (url === 'activities/v2') {
        let res = []
        data
            .map(item => {
                return item.activities.forEach(actItem => {
                    actItem.resource_type = item.resource_type
                })
            })
        data.forEach(item => {
            item.activities.forEach(actItem => {
                res.push(actItem)
            })
        })
         data = res
    }
    return data
}

export async function fetchActivities({commit, state}, amount = 10) {
    router.currentRoute.name === 'home' && commit("setActivitiesUrl", 'activities/v1')
    router.currentRoute.name === 'home-v-2' && commit("setActivitiesUrl", 'activities/v2')
    try {
        fetch(state.url.main + state.url.activities)
            .then(response => response.json())
            .then(async data => {
                data = prepareData(data, state.url.activities)
                if (amount && data.length > amount) data.length = amount
                let sortedData = sortDataByMonth(data)
                return sortedData
            }).then(sortedData => commit("activities/setActivities", sortedData, {root: true})
        )
    } catch (e) {
    }
}

export async function getDataForModal({commit, state}, id) {
    let singleActivity = null
    for (const [key, value] of Object.entries(state.activities)) {
        singleActivity = value.find(item => {
            return item.id === id
        })

        singleActivity && commit("setDataForModal", singleActivity)
    }
}

export async function resetDataForModal({commit, state}) {
    commit("setDataForModal", null)
}

export async function getCurrentFilter({commit, state}, type) {
    commit("setCurrentFilter", type)
}

export async function filterByTypeForVuex({commit, state}, type) {
    try {
        fetch(state.url.main + state.url.activities)
            .then(response => response.json())
            .then(data => {
                data = prepareData(data, state.url.activities)
                return data.filter(item => item.resource_type === type)
            })
            .then(async data => {
                let sortedData = sortDataByMonth(data)
                return sortedData
            }).then(sortedData => commit("activities/setActivities", sortedData, {root: true})
        )
    } catch (e) {
    }
}

export async function filterByTextForVuex({commit, state}, text) {
    try {
        fetch(state.url.main + state.url.activities)
            .then(response => response.json())
            .then(data => {
                // return data.filter(item=> item.resource_type === type)
                data = prepareData(data, state.url.activities)
                let filteredData = filterItems(data, text)
                return filteredData
            })
            .then(async data => {
                let sortedData = sortDataByMonth(data)
                return sortedData
            }).then(sortedData => commit("activities/setActivities", sortedData, {root: true})
        )
    } catch (e) {
    }
}

export async function getSuggestionsList({commit, state}, text) {
    try {
        fetch(state.url.main + state.url.activities)
            .then(response => response.json())
            .then(data => {
                data = prepareData(data, state.url.activities)
                let filteredData = []
                if (text) filteredData = filterItems(data, text)
                return filteredData
            })
            .then(data => {
                let filteredData = _.uniqBy(data, 'topic_data.name');
                return filteredData
            })
            .then(filteredData => commit("activities/setSuggestionsList", filteredData, {root: true})
            )
    } catch (e) {
    }
}