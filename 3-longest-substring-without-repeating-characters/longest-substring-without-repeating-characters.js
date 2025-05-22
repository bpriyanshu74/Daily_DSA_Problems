/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0
    for(let i=0; i<s.length; i++){
        let seen = new Set()
        for(let j=i; j<s.length; j++){
            if(seen.has(s[j])){
                break
            }
            seen.add(s[j])
            maxl = Math.max(maxl, j-i+1)
        }
    }
    return maxl
    
};