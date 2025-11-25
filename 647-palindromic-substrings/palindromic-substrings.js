/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    let count = 0

    for(let i=0; i<s.length; i++){
        // expand for odd len
        expand(i,i)
        // expand for even length
        expand(i, i+1)
    }

    function expand(i,j){
        let left = i, right = j
        while(left >= 0 && right < s.length && s[left] == s[right]){
            count++
            left--
            right++
        }
    }

    return count
    
};