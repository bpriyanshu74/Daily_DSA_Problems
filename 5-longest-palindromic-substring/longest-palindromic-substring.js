/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s
    let start = 0, end = 0

    function expand(l,r){
        while(l >= 0 && r < s.length && s[l] == s[r]){
            l--
            r++
        }
        return [l+1, r-1]
    }

    for(let i=0; i<s.length; i++){
        let [l1,r1] = expand(i,i) // for odd
        let [l2,r2] = expand(i,i+1) // for even

        if(r1-l1 > end-start){
            start = l1
            end = r1
        }
        if(r2-l2 > end-start){
            start = l2
            end = r2
        }
    }

    return s.slice(start, end+1)
};