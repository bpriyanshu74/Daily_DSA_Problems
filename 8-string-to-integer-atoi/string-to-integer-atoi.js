/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0, sign = 1, result = 0
    let max = (2**31) - 1, min = -(2**31)

    while(i < s.length && s[i] == ' ') i++

    if(s[i] == '+' || s[i] == '-'){
        if(s[i] == '-') sign = -1
        i++
    }

    while(i < s.length && s[i] >= '0' && s[i] <= '9'){
        result = result * 10 + (s[i] - '0')

        if(sign == 1 && result > max) return max
        if(sign == -1 && -result < min) return min
        i++
    }

    return result * sign
};

