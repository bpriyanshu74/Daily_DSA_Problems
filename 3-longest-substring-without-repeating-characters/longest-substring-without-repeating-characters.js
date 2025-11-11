/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0, maxl = 0, map = new Map()

    for(let r=0; r<s.length; r++){
        if(map.has(s[r])){
            while(map.get(s[r]) >= l){
                l++
            }
        }
        map.set(s[r], r)
        maxl = Math.max(maxl, r-l+1)
    }
    return maxl
};