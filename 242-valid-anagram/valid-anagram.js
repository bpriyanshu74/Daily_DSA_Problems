/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashmap = {}

    for(let ch of s){
        if(hashmap[ch] != undefined){
            hashmap[ch] += 1
        }else{
            hashmap[ch] = 1
        }
    }

    // now traversing the t string

    for(let ch of t){
        if(hashmap[ch] != undefined && hashmap[ch] > 0){
            hashmap[ch]--
            if(hashmap[ch] == 0){
                delete hashmap[ch]
            }
        }else{
            return false
        }
    }

    return Object.keys(hashmap).length == 0
    
};