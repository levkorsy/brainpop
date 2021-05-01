import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"
import {filterItems} from "../../utils/filterUtils"
import _ from 'lodash'
import router from '@/router'
// console.log(router.currentRoute.params)
function prepareData(data, url){
    if(url === 'activities/v2'){
        console.log(data)
       let res =[]
        data
            .map(item=>{
          return item.activities.forEach(actItem=>{
                actItem.resource_type = item.resource_type
            })
        })
        data.forEach(item=>{
            item.activities.forEach(actItem =>{
                res.push(actItem)
            })
        })
        // console.log(data1)
        //  let data2 = data1.map(changedItem=>{
        //        return changedItem.activities
        //     })
        console.log(data)
        console.log(res)
        data = res
    }
    return data
}

export async function fetchActivities({commit, state}, amount = 10) {
    console.log(router.currentRoute.name)
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
    // commit("setDataForModal", singleActivity)

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
            .then(data =>{
                 return data.filter(item=> item.resource_type === type)
            } )
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
            .then(data =>{
                 // return data.filter(item=> item.resource_type === type)
               let filteredData = filterItems(data, text)
                return filteredData
            } )
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
            .then(data =>{
                 // return data.filter(item=> item.resource_type === type)
                let filteredData = []
                if(text) filteredData = filterItems(data, text)
                return filteredData
            } )
            .then( data => {
                let filteredData = _.uniqBy(data, 'topic_data.name');
                return filteredData
            })
            .then(filteredData => commit("activities/setSuggestionsList", filteredData, {root: true})
        )
    } catch (e) {
    }
}