/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals
    intervals.sort((a,b) => a[0]-b[0])
    let res = []

    let temp = intervals[0]

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0] > temp[1]){
            res.push(temp)
            temp = intervals[i]
        }
        else{
            temp[0] = Math.min(temp[0], intervals[i][0])
            temp[1] = Math.max(temp[1], intervals[i][1])
        }
    }
    res.push(temp)

    return res
    
};