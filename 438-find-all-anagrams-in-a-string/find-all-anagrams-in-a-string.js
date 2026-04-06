/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length) return []
    let res = []

    let fp = new Array(26).fill(0)
    let fs = new Array(26).fill(0)

    for(let i=0; i<p.length; i++){
        let index1 = p[i].charCodeAt(0) - 97
        let index2 = s[i].charCodeAt(0) - 97

        fp[index1]++
        fs[index2]++
    }
    
    let l = 0
    if(fp.toString() == fs.toString()) res.push(l)

    for(let i=p.length; i<s.length; i++){
        let index = s[l++].charCodeAt(0) - 97
        fs[index]--

        let index2 = s[i].charCodeAt(0) - 97
        fs[index2]++
        if(fp.toString() == fs.toString()) res.push(l)
    }

    return res
};