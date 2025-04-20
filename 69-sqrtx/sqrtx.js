/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 1, r = x, ans = 1
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(mid*mid <= x){
            ans = mid
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    return r
    
};