/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a,b) => a[1]-b[1])

    let end = -Infinity, count = 0

    for(let [s,e] of intervals){
        if(s >= end){
            end = e
        }
        else{
            count++
        }
    }

    return count
    
};