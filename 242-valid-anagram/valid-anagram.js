/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hashmap = new Map()

    for(let ch of s){
        if(hashmap.has(ch)){
            hashmap.set(ch, hashmap.get(ch) + 1)
        }else{
            hashmap.set(ch, 1)
        }
    }

    // now traversing the t string

    for(let ch of t){
        if(hashmap.has(ch) && hashmap.get(ch) > 0){
            hashmap.set(ch, hashmap.get(ch)-1)
            if(hashmap.get(ch) == 0){
                hashmap.delete(ch)
            }
        }else{
            return false
        }
    }

    return hashmap.size == 0 ? true : false
    
};