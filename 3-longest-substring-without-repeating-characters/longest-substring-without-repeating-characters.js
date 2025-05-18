/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l=0,r=0,dic=new Set(), maxl=0
    while(r < s.length){
        if(dic.has(s[r])){
            while(s[l] != s[r]){
                dic.delete(s[l])
                l++
            }
            dic.delete(s[l])
            l++
            
        }
        maxl = Math.max(maxl, r-l+1)
        dic.add(s[r])
        r++
    }

    return maxl
    
};