/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1, n = digits.length-1

    while(n >= 0 && carry){
        let val = digits[n] + carry
        let dig = val % 10

        digits[n] = dig

        carry = Math.floor(val/10)

        if(carry <= 0) break
        n--
    }

    if(carry == 1){
        digits = [1, ...digits]
    }

    return digits
        
    
};