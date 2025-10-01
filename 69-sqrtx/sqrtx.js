/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 1, r = Math.floor(x/2)+1

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        let sqrt = mid*mid

        if(sqrt == x) return mid
        else if(sqrt < x) l = mid + 1
        else r = mid - 1
    }
    return r
    
};