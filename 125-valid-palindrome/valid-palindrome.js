/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlpha(ch){
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')
    }

    let l = 0, r = s.length-1

    while(l < r){
        while(l < r && !isAlpha(s[l])) l++
        while(l < r && !isAlpha(s[r])) r--

        if(s[l].toLowerCase() != s[r].toLowerCase()) return false
        l++
        r--
    }

    return true
};