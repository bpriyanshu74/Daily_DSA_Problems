/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights)
    let r = weights.reduce((a,b) => a+b, 0)
    let ans = r

    function possible_days(cap, w){
        let days = 1, load = 0
        for(let i=0; i< w.length; i++){
            if(load + w[i] > cap){
                days += 1
                load = w[i]
            }
            else{
                load += w[i]
            }
        }
        return days
    }

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(possible_days(mid, weights) <= days){
            ans = Math.min(ans, mid)
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return ans
    
};