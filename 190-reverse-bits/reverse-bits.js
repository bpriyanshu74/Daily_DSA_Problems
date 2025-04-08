/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0
    for(let cur = 0; cur < 32; cur++){
        let new_pos = 32 - cur - 1          // reverse position
        let bit = (n >> cur) & 1            // extract current bit
        let mask = bit << new_pos           // move to reversed position
        ans = ans | mask                    // set bit in result
    }
    return ans >>> 0

    
};