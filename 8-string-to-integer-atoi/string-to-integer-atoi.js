/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if(!s) return 0
    let i=0, n = s.length, sign = 1, intMin = -(2**31), intMax = (2**31) - 1
    // skipping white spaces
    while(i < n && s[i] == " "){
        i++
    }
    // checking whether the string has ended ?
    if(i == n) return 0

    // sign checking
    if(s[i] == '+') i++
    else if(s[i] == '-'){
        sign = -1
        i++
    }

    // reading digit and convert

    let res = 0
    while( i< n && s[i] >= '0' && s[i] <= '9'){
        let digit = parseInt(s[i])

        res = res*10 + digit

        if(sign* res <= intMin) return intMin
        if(sign*res >= intMax) return intMax
        i++
    }

    return res*sign
};