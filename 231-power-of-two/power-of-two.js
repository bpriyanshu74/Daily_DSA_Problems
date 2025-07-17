/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    if(n == 0) return false
    let temp = n
    while(temp > 1){
        temp = temp / 2
    }
    if(temp == 0 || temp==1) return true
    return false
    
};