/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let hashmap = new Map(), maxfreq = 0, maxl = 0

    let l =0

    for(let r=0; r<s.length; r++){
        let ch = s[r]
        hashmap.set(ch, (hashmap.get(ch) || 0) + 1)
        maxfreq = Math.max(maxfreq, hashmap.get(ch))

        while(r-l+1 - maxfreq > k){
            hashmap.set(s[l], hashmap.get(s[l]) - 1)
            l++
        }

        maxl = Math.max(maxl, r-l+1)
    }
    return maxl
};