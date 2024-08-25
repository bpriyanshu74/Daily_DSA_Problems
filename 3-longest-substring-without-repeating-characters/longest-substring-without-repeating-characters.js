/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = new Array(256).fill(-1)
    let left = 0, right = 0, maxl = 0
    function helper(char){
        return char.charCodeAt(0)
    }
    while(right < s.length){
        let index = helper(s[right])
        if(hash[index] != -1 && hash[index] >= left){
            left = hash[index] + 1
            
        }
        maxl = Math.max(maxl, right-left+1)
        hash[index] = right
        right++
    }
    return maxl
    
};