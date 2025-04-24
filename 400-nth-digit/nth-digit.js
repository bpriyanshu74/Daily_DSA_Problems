/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1, base = 9, total = 0
    // finding the range in which the n lies
    while(total + (digit*base) < n){
        total += digit * base
        base *= 10
        digit++ 
    }

    // noow we find how much numbers to be discarded
    n = n - total
    // let find the number
    let num = Math.pow(10, digit-1)
    num += Math.floor((n-1)/digit)
    let index = (n-1) % digit
    let s = String(num)
    return Number(s[index]-'0')

};