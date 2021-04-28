export async function fetchActivities({ commit, state }) {
    try {
        fetch('http://localhost:3000/activities/v1')
            .then(response => response.json())
            .then(data => {
                commit("setActivities", data, { root: true })
                return data
            })
    } catch (e) {}
}

