/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxl = 0
    let hash = new Array(26).fill(0)
    let left = 0, right = 0, maxf = 0, n = s.length, change = 0
    while(right < n){
        let index = s[right].charCodeAt(0) - 'A'.charCodeAt(0)
        hash[index]++
        maxf = Math.max(maxf, hash[index])
        while(right-left+1 - maxf > k){
            let indexl = s[left].charCodeAt(0) - 'A'.charCodeAt(0)
            hash[indexl]--
            let maxf = 0
            for(let ele of hash){
                maxf = Math.max(maxf, ele)
            }
            left++
        }
        maxl = Math.max(right-left+1, maxl) 
        right++   
    }
    return maxl
};