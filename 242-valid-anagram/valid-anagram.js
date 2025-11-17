/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let smap = new Map()

    for(let ch of s){
        smap.set(ch, (smap.get(ch) || 0) + 1)
    }

    for(let ch of t){
        if(!smap.has(ch)) return false
        smap.set(ch, smap.get(ch)-1)
        if(smap.get(ch) <= 0) smap.delete(ch)
    }

    return true
    
};