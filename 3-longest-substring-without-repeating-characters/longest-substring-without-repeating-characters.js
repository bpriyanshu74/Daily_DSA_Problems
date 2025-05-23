/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hashmap = new Map(), l = 0, maxl = 0

    for(let r = 0; r<s.length; r++){
        if(hashmap.has(s[r])){
            l = Math.max(l, hashmap.get(s[r])+1)
        }
        maxl = Math.max(maxl, r-l+1)
        hashmap.set(s[r],r)
    }
    return maxl

    
};