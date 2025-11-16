/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let count = 0, k = 0, mod = Math.pow(10,9)+7

    for(let i=0; i<s.length; i++){
        if(s[i] == '0'){
            count += Math.floor((k*(k+1))/2)
            k = 0
        }else{
            k++
        }
    }
    if(k > 0){
        count += Math.floor((k *(k+1))/2)
    }

    return count % mod
};