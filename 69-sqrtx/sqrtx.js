/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1) return x
    let l=1, r = x-1

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(mid*mid == x) return mid
        else if(mid*mid < x) l = mid + 1
        else r = mid - 1
    }
    return r
};