/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    if(k > candies.reduce((a,b) => a+b, 0)) return 0

    function check(maxcandies){
        let kids = 0
        for(let c of candies){
            kids += Math.floor(c/maxcandies)
        }
        return kids >= k
    }

    let l = 1, r = Math.max(...candies), ans = 0

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(check(mid)){
            ans = mid
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return ans
    
};