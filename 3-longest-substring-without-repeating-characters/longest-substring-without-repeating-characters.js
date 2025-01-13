/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) return 1
    let maxl = 0
    for(let i=0; i<s.length; i++){
        let set = new Set()
        for(let j=i; j < s.length; j++){
            if(set.has(s[j])){
                maxl = Math.max(maxl, j-i)
                break
            }else{
                set.add(s[j])
            }
        }
        maxl = Math.max(maxl, set.size)
    }
    return maxl
    
};