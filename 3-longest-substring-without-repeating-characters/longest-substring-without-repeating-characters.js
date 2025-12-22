/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0

    for(let i=0; i<s.length; i++){
        let set = new Set(), count = 0
        for(let j=i; j<s.length; j++){
            if(!set.has(s[j])){
                set.add(s[j])
                count++
            }else{
                break
            }
        }
        maxl = Math.max(maxl, count)
    }
    return maxl
};