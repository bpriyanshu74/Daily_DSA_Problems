/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals
    let ans = []

    intervals.sort((a,b)=> a[0]-b[0])

    let [s,e] = intervals[0]

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0] <= e){
            e = Math.max(e, intervals[i][1])
            s = Math.min(s, intervals[i][0])
        }else{
            ans.push([s,e])
            s = intervals[i][0]
            e = intervals[i][1]
        }
    }

    if(ans[ans.length-1] != [s,e]) ans.push([s,e])

    return ans
};