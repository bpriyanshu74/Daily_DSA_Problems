/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //  we are doing it using binary search
    let l = 0, r = x, sqrt = 0

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(mid*mid <= x){
            sqrt = mid
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    return sqrt
    
};