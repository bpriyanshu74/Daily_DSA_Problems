/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0, r=0, window = 0, hashmap = new Map()

    while(r < s.length){
        if(hashmap.has(s[r])){
            l = Math.max(l, hashmap.get(s[r]) + 1)
        }
        hashmap.set(s[r], r)

        window = Math.max(window, r-l+1)
        r++
    }
    
    return window
};