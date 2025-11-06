/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0, l=0, map = new Map()

    for(let r=0; r<s.length; r++){
        let ch = s[r]
        while(map.has(ch) && map.get(ch) >= l){
            let l_ch = s[l]
            map.set(l_ch, map.get(l_ch) - 1)
            if(map.get(l_ch) == 0) map.delete(l_ch)
            l++
        }
        map.set(ch, r)
        maxl = Math.max(maxl, r-l+1)
    }
    return maxl
    
};