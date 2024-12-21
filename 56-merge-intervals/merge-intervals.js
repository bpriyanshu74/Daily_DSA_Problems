/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])

    let ans = [], ans_pointer = -1, left = 0, n = intervals.length

    while(left < n){
        if(ans_pointer == -1){
            ans.push(intervals[left])
            ans_pointer++
        }

        let current = intervals[left]
        let last_added = ans[ans.length-1]

        if(current[0] <= last_added[1]){
            if(current[1] > last_added[1]){
                last_added[1] = current[1]
            }
        }
        else{
            ans.push(current)
        }
        left++
    }

    return ans
    
};