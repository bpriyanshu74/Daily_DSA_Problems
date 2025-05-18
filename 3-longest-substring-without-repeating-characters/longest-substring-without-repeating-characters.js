/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0, substring_set = new Set()
    // brute froce: create all the valid substrings

    if(s.length == 1) return 1

    for(let i=0; i<s.length; i++){
        for(let j=i ;j<s.length; j++){
            if(substring_set.has(s[j])){
                maxl = Math.max(maxl, substring_set.size)
                substring_set.clear()
                break
            }
            substring_set.add(s[j])
        }
    }
    maxl = Math.max(maxl, substring_set.size)

    return maxl

    
};