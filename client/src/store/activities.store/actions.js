import {sortDataByMonth} from "../../utils/sortActivityDataByMonth"

export async function fetchActivities({ commit, state }) {
    try {
        fetch('http://localhost:3000/activities/v1')
            .then(response => response.json())
            .then(async data => {
                let sortedData = sortDataByMonth(data)
                return sortedData
            }).then(sortedData=>                 commit("activities/setActivities", sortedData, { root: true })
        )
    } catch (e) {}
}

