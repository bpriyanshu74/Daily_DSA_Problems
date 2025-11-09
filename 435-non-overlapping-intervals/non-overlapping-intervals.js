/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length == 1) return 0

    // sorted intervals by end time
    intervals.sort((a,b) => a[1] - b[1])
    //now we'll count the interval that overlaps and return it
    let count = 0, [start, end] = intervals[0]
    for(let i=1; i<intervals.length; i++){
        let [s,e] = intervals[i]
        if(s < end || s < start) count++
        else{
            start = s
            end = e
        }
    }

    return count
};