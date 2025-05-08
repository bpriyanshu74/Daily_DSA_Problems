/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let ans = 0
    for(let i=0; i< 32; i++){
        let new_pos = 32-1-i
        let bit = (n >> i) & 1
        let mask = bit << new_pos
        ans = ans | mask
    }
    return ans >>> 0
};