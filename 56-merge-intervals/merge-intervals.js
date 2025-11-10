/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length == 1) return intervals

    intervals.sort((a,b) => a[0] - b[0])
    let [start, end] = intervals[0], ans = []

    for(let i=1; i<intervals.length; i++){
        let [cur_start, cur_end] = intervals[i]

        if(cur_start <= end){
            
            end = Math.max(end, cur_end)
        }else{
            ans.push([start, end])
            start = cur_start
            end = cur_end
        }
    }
    ans.push([start, end])

    return ans
};