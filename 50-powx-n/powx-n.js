/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let m = Math.abs(n), res = 1

    while(m >= 1){
        if(m%2 != 0){
            res *= x
        }
        x = x*x
        m = Math.floor(m/2)
    }

    return n < 0 ? 1/res : res
    
};