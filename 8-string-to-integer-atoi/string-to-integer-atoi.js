/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    if(s.length == 0) return 0

    let i = 0, sign = 1, result = 0

    if(s[i] == '-' || s[i] == '+'){
        if(s[i] == '-') sign = -1
        i++
    }

    while(i < s.length && s[i] >= '0' && s[i] <= '9'){
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0)

        if(result > Math.floor((2**31-1-digit)/10)){
            return sign == 1 ? (2**31) -1 : -(2**31)
        }

        result = result * 10 + digit
        i++
    }

    return result * sign
};