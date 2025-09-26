/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let m = s1.length, n = s2.length
    if(m > n) return false

    let f1 = new Array(26).fill(0)
    let f2 = new Array(26).fill(0)

    for(let ch of s1){
        let index = ch.charCodeAt(0) - 97
        f1[index]++
    }
    for(let i=0; i<m; i++){
        let ch = s2[i]
        let index = ch.charCodeAt(0) - 97
        f2[index]++
    }

    function matches(){
        let flag = true
        for(let i=0; i<26; i++){
            if(f1[i] != f2[i]){
                flag = false
                break
            }
        }
        if(flag) return true
    }
    if(matches()) return true

    for(let i=m; i<n; i++){
        let prev = s2[i-m], cur = s2[i]

        f2[prev.charCodeAt(0)-97]--
        f2[cur.charCodeAt(0)-97]++

        if(matches()) return true
    }

    return false
    
};