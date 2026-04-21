/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the intervals by their start time
    let res = []

    intervals.sort((a,b) => a[0] - b[0])

    let start = intervals[0][0], end = intervals[0][1]

    for(let i=1; i<intervals.length; i++){
        let [si, ei] = intervals[i]

        if(si > end){
            res.push([start,end])
            start = si
            end = ei
        }else if(ei > end){
            end = ei
        }
    }

    res.push([start, end])

    return res
};