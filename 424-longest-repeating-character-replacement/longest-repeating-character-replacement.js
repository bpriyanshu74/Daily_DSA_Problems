/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0, maxl = 0, map = new Map(), maxf = 0, curwindow = 0
    while(right < s.length){
        map.set(s[right], map.get(s[right])+1 || 1)
        maxf = Math.max(...map.values())
        

        while((right-left+1) - maxf > k){
            map.set(s[left], map.get(s[left])-1)
            left++
            maxf = Math.max(...map.values())
        }

        maxl = Math.max(right-left+1, maxl)
        right++
    }

    return maxl
    
};