/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let result = []
    for (let i = 0; i < (1 << n); i++) {
        result.push(i ^ (i >> 1))
    }
    return result

};