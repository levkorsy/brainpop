import moment from "moment";

// Function for group items of array by value. Gets array of objects and function, returns object
const groupBy = (x, f) => x.reduce((a, b) => ((a[f(b)] ||= []).push(b), a), {});

// Function for sorting activities by month. Gets array of objects(activities), returns object(every key is month, value array of activities)
export function sortDataByMonth(activity) {
    return groupBy(activity, v => moment(parseInt(v.d_created)).month())
}