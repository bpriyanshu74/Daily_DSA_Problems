/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0, right = s.length-1
    while(left < right){
        if(s[left] == s[right]){
            while(left < s.length && s[left] == s[left+1]) left++
            while(right >= 0 && s[right] == s[right-1]) right--
            left++
            right--
            
        }else{
            return right - left + 1
        }
    }
    if(right < left) return 0
    return 1

    
};