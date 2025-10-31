/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlen = 0

    for(let i=0; i<s.length; i++){
        let set = new Set()
        for(let j=i; j<s.length; j++){
            if(set.has(s[j])){
                break
            }
            set.add(s[j])
            maxlen = Math.max(maxlen, j-i+1)
        }  
    }
    return maxlen
};