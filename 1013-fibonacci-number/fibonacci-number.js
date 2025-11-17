/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n

    let prev2 = 0, prev1 = 1

    for(let i=2; i<= n; i++){
        let temp = prev1
        prev1 += prev2
        prev2 = temp
    }
    return prev1
};