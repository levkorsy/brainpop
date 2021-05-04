import moment from "moment";

// Function for group items of array by value. Gets array of objects and function, returns object
const groupBy = (activityArr, f) => activityArr.reduce((a, b) => ((a[f(b)] ||= []).push(b), a), {});

// Function for sorting activities by month. Gets array of objects(activities), returns object(every key is month, value array of activities)
export function sortDataByMonth(activity) {
    return groupBy(activity, v => moment(parseInt(v.d_created)).month())
}
export function prepareData(data, url) {
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