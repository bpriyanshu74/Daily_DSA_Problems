/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    while(n > 1){
        if(n % 2 != 0) return false
        n = n/2
    }

    return n == 1
};