/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let vowels = ['a','e','i','o','u']
    let mask = 0
    let seen = {0:-1}, maxl = 0

    for(let i=0; i<s.length; i++){
        let ch = s[i]
        let pos = vowels.indexOf(ch)

        if(pos != -1){
            mask ^= (1 << pos)
        }

        if(mask in seen){
            maxl = Math.max(maxl, i-seen[mask])
        }else{
            seen[mask] = i
        }
    }
    return maxl
    
};