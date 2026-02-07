/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    function helper(i, sign, result){
        if(i >= s.length || s[i] < '0' || s[i] > '9'){
            return sign * result
        }

        let digit = s[i] - '0'

        if (
            sign * (result * 10 + digit) > max ||
            sign * (result * 10 + digit) < min
        ) {
            return sign === 1 ? max : min;
        }

        return helper(i+1, sign, result*10+digit)
    }

    let i=0, sign = 1
    let max = (2**31) - 1
    let min = -(2**31)

    while(i<s.length && s[i] == ' ') i++

    if(s[i] == '+' || s[i] == '-'){
        if(s[i] == '-') sign = -1
        i++
    }

    return helper(i,sign,0)
    
};