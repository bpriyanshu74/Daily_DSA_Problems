/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let sqrt= 1
    while(sqrt*sqrt <= x){
        sqrt++
    }
    return sqrt-1
    
};