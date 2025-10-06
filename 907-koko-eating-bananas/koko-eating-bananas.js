/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    function check(maxcap){
        let time = 0
        for(let quant of piles){
            time += Math.ceil(quant/maxcap)
        }
        return time <= h
    }
    let l = 1, r = Math.max(...piles), ans = 0

    while(l <= r){
        let capacity = l + Math.floor((r-l)/2)

        if(check(capacity)){
            ans = capacity
            r = capacity - 1
        }else{
            l = capacity + 1
        }
    }
    return ans
};