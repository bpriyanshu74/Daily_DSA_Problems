/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0, maxl = 0, map = new Array(26).fill(0), maxm = -Infinity
    for(let r=0; r<s.length; r++){
        let index = s[r].charCodeAt(0) - 'A'.charCodeAt(0)

        map[index]++

        maxm = Math.max(maxm, map[index])

        while(r-l+1 - maxm > k){
            let l_index = s[l].charCodeAt(0) - 'A'.charCodeAt(0)
            map[l_index]--
            l++
            maxm = Math.max(...map)
        }

        maxl = Math.max(maxl, r-l+1)
    }

    return maxl
};