/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1) return x
    let l = 2, r = x-1

    while(l < r){
        let mid = l + Math.floor((r-l)/2)

        if(mid*mid > x){
            r = mid
        }else{
            l = mid + 1
        }
    }
    return l - 1
};