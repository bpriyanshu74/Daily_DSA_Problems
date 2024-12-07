/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(s.length <= 1) return s.length

    let maxl = 0

    for(let i=0; i<s.length; i++){
        let set = new Set()
        for(let j=i; j<s.length; j++){ 
            if(set.has(s[j])){
                maxl = Math.max(set.size, maxl)
                break
            }
            set.add(s[j])
        }
        maxl = Math.max(set.size, maxl)
    }
    return maxl
    
};