/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0, map = new Map(), maxl = 0

    while(r < s.length){
        if(map.has(s[r])){
            // conditiion break: calculate maxl
            maxl = Math.max(maxl, r-l)
            // update l & update map

            l = Math.max(l, map.get(s[r]) + 1)

        }
        map.set(s[r], r)
        r++
        
    }

    return Math.max(maxl, r-l)
};