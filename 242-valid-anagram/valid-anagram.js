/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false

    let hm = {}

    for(let ch of s){
        if(hm[ch]){
            hm[ch]++
        }else{
            hm[ch] = 1
        }
    }

    for(let ch of t){
        if(hm[ch]){
            hm[ch]--
        }else{
            return false
        }
    }

    for(let key in hm){
        if(hm[key] != 0) return false
    }

    return true
};