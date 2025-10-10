/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count = 0
    if(intervals.length <= 1) return count

    intervals.sort((a,b) => a[1] - b[1])

    let [start, end] = intervals[0]

    for(let i=1; i<intervals.length; i++){
        let [cur_start, cur_end] = intervals[i]
        if(end <= cur_start){
            end = cur_end
        }else{
            count++
        }
    }
    return count
};