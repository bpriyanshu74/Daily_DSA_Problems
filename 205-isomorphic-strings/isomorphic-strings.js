/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let mapST = new Map()
    let mapTS = new Map()

    for(let i=0; i<s.length; i++){
        let a = s[i], b = t[i]

        if(mapST.has(a) && mapST.get(a) != b) return false
        if(mapTS.has(b) && mapTS.get(b) != a) return false

        mapST.set(a,b)
        mapTS.set(b,a)
    }
    return true
};