/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length

    let maxlen = 1

    let hashmap = {}, l = 0

    for(let r=0; r<s.length; r++){
        if(hashmap[s[r]] != undefined){
            let last_index = hashmap[s[r]]
            if(l > last_index){
                hashmap[s[r]] = r
            }else{
                l = last_index+1
                hashmap[s[r]] = r
            }
        }else{
            hashmap[s[r]] = r
        }
        maxlen = Math.max(maxlen, r-l+1)
    }
    return maxlen
};