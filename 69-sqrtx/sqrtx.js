/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x
    let l = 2, r = x

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(mid*mid == x) return mid

        if(mid*mid > x){
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    return r
};