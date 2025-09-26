/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let n = s.length, m = p.length, res = []
    if(m > n) return res
    let freq = new Array(26).fill(0)
    let windowcount = new Array(26).fill(0)

    for(let i=0; i<m; i++){
        freq[p[i].charCodeAt(0)-97]++
    }

    for(let i=0; i<m; i++){
        windowcount[s[i].charCodeAt(0)-97]++
    }

    function matches(){
        for(let i=0; i<26; i++){
            if(freq[i] != windowcount[i]) return false
        }
        return true
    }

    if(matches()) res.push(0)

    for(let i=m; i<n; i++){
        windowcount[s[i-m].charCodeAt(0)-97]--
        windowcount[s[i].charCodeAt(0)-97]++

        if(matches()) res.push(i-m+1)
    }

    return res



    
    
};