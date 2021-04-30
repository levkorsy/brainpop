import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"

export async function fetchActivities({commit, state}) {
    try {
        fetch('http://localhost:3000/activities/v1')
            .then(response => response.json())
            .then(async data => {
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