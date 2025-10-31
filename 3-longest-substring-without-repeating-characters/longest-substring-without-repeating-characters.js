/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = 0, l=0, map = {}, r = 0

    for(let r=0; r<s.length; r++){
        let ch = s[r]
        if(ch in map){
            if(map[ch] >= l){
                l = map[ch]+1
            }
        }
        maxlen = Math.max(maxlen, r-l+1)
        map[ch] = r
    }
    return maxlen
};