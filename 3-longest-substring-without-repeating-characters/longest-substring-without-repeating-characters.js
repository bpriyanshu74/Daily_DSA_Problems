/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), maxl = 0, l =0, r = 0
    for(let r=0; r<s.length; r++){
        if(map.has(s[r]) && map.get(s[r]) >= l){
            l = map.get(s[r])+1
        }
            map.set(s[r], r)
            maxl = Math.max(maxl, r-l+1)
    }

    return maxl
    
};