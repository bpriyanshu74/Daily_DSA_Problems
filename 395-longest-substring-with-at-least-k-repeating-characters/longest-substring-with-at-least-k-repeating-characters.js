/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if(s.length < k) return 0

    let maxlen = -Infinity

    for(let i=0; i<s.length; i++){
        let freq = new Map()
        for(let j=i; j<s.length; j++){
            let ch = s[j]
            freq.set(ch, (freq.get(ch) || 0) + 1)
            // freq[ch] = (freq[ch] || 0) + 1
            if(check(freq, k)){
                maxlen = Math.max(j-i+1, maxlen)
            }
        }
    }

    function check(map, k){
        for(let [key,val] of map){
            if(val < k) return false
        }
        return true
    }

    return maxlen == -Infinity ? 0 : maxlen
    
};