/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length

    let maxlen = 1

    for(let i=0; i<s.length; i++){
        let hashset = new Set()

        for(let j=i; j<s.length; j++){
            if(hashset.has(s[j])){
                break
            }else{
                hashset.add(s[j])
            }
        }
        maxlen = Math.max(maxlen, hashset.size)
    }
    return maxlen
};