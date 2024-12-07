/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0, right=0, maxl=0, map = new Map()

    while(right < s.length){
        if(map.has(s[right]) && map.get(s[right]) >= left){
            left = map.get(s[right]) + 1
        }
        map.set(s[right], right)
        maxl = Math.max(maxl, right-left+1)
        right++
    }

    return maxl
    
};