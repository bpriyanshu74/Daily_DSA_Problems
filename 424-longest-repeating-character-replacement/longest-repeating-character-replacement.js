/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxl = 0
    for(let i=0; i< s.length; i++){
        let hash = new Array(26).fill(0)
        let maxf = 0
        for(let j=i; j<s.length; j++){
            let index = s[j].charCodeAt(0) - 'A'.charCodeAt(0)
            hash[index]++
            maxf = Math.max(maxf, hash[index])
            let change = (j-i+1) - maxf
            if(change <= k){
                maxl = Math.max(maxl, j-i+1)
            }
            else{
                break
            }
        }
    }
    return maxl
};