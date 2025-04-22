/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    function possible_i(n, piles){
        let hours = 0
        for(let i=0; i <piles.length; i++){
            hours += Math.ceil(piles[i]/n)
        }
        return hours
    }
    let l=1, r= Math.max(...piles), ans = Infinity
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        let hours_req = possible_i(mid, piles)
        if(hours_req <= h){
            ans = Math.min(ans, mid)
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return ans
};