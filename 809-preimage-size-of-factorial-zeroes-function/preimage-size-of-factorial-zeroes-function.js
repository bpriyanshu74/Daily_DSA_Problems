/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    function tz(n){
        let count = 0
        while(n > 0){
            n = Math.floor(n/5)
            count += n
        }
        return count
    }

    function leftBound(k){
        let l=0, r = 5 * 1e9
        while(l < r){
            let mid = l + Math.floor((r-l)/2)
            let zeroes = tz(mid)
            if(zeroes<k)
            {
                l=mid+1
            }
            else{
                r = mid
            }
        }
        return l
    }

      function rightBound(k){
        let l=0, r = 5 * 1e9
        while(l < r){
            let mid = l + Math.floor((r-l)/2)
            let zeroes = tz(mid)
            if(zeroes<=k)
            {
                l=mid+1
            }
            else
            {
                r = mid
            }
        }
        return l
    }
    return rightBound(k)-leftBound(k)
    
    
};