/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), maxl = 0, l =0

    for(let r=0; r<s.length; r++){
        let ch = s[r]
        if(map.has(ch) && map.get(ch) >= l){
            l = map.get(ch) + 1
        }

        map.set(ch, r)
        maxl = Math.max(maxl, r-l+1)
    }

    return maxl
};