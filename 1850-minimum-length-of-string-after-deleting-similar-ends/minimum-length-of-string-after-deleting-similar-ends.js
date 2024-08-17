/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let left = 0, right = s.length-1
    while(left < right && s[left] == s[right]){
            let char = s[left]
            while(left < s.length && s[left] == char) left++
            while(right >= 0 && s[right] == char) right--   
    }

    return (right - left + 1) > 0 ? right - left + 1 : 0

    
};