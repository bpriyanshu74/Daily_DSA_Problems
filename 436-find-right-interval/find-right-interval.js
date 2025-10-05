/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    // seperating the start
    let starts = intervals.map((interval, idx) => [interval[0], idx])

    starts.sort((a,b) => a[0] - b[0])

    function lowerbound(target){
        let l=0, r = starts.length

        while(l < r){
            let mid = l + Math.floor((r-l)/2)
            if(starts[mid][0] < target) l = mid + 1
            else r = mid
        }
        return l
    }
    let ans = new Array(intervals.length).fill(-1)
    for(let i=0; i<intervals.length; i++){
        let idx = lowerbound(intervals[i][1])
        if(idx < starts.length) ans[i] = starts[idx][1]
    }

    return ans

};