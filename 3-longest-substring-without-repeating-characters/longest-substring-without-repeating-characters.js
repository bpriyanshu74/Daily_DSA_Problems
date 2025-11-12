/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0, l =0, map = new Map()

    for(let r=0; r<s.length; r++){
        if(map.has(s[r])){
            while(map.get(s[r]) >= l){
                l++
            }
        }
        maxl = Math.max(maxl, r-l+1)
        map.set(s[r], r)
    }

    return maxl
};