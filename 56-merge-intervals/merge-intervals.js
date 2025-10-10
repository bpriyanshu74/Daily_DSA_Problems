/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 1) return intervals

    intervals.sort((a,b) => a[0]-b[0])
    let res = []

    let [start, end] = intervals[0]
    for(let i=1; i<intervals.length; i++){
        let [cur_start, cur_end] = intervals[i]

        if(cur_start <= end){
            end = Math.max(end, cur_end)
        }else{
            res.push([start, end])
            start = cur_start
            end = cur_end
        }
    }
    res.push([start,end])
    return res
};