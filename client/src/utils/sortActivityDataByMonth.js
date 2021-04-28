import moment from "moment";

const groupBy = (x,f)=>x.reduce((a,b)=>((a[f(b)]||=[]).push(b),a),{});

export async function sortDataByMonth(activity) {
    try {
     //    let activityObject = groupBy(activity, v => moment(parseInt(v.d_created)).month())
     // return Object.fromEntries(Object.entries(activityObject).sort(function(a, b){return b-a}))
return groupBy(activity, v => moment(parseInt(v.d_created)).month())
    } catch (e) {}
}