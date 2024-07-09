/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map_s = {}
    let map_t = {}
    for(let i=0; i<s.length; i++){
        char = s[i]
        if(map_s[char]){
            map_s[char]++
        }
        else{
            map_s[char] = 1
        }
    }
    for(let i=0; i<t.length; i++){
        char = t[i]
        if(map_t[char]){
            map_t[char]++
        }
        else{
            map_t[char] = 1
        }
    }
    if(Object.keys(map_s).length !== Object.keys(map_t).length){
        return false
    }
    for(let key in map_s){
        if(map_s[key] !== map_t[key]){
            return false
        }
    }
    return true
};