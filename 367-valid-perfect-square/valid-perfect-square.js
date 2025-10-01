/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num == 0) return false

    let l=1; r = Math.floor(num/2)+1

    while(l <= r){
        let mid  = l + Math.floor((r-l)/2)

        if(mid*mid == num) return true
        else if(mid*mid < num) l = mid + 1
        else r = mid - 1
    }

    return false
    
};