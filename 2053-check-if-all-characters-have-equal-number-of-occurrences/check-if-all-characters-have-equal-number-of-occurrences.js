/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let hashmap = new Map()

    for(let i=0; i<s.length; i++){
        hashmap.set(s[i], hashmap.get(s[i])+1 || 1)
    }
    let basic_count = hashmap.get(s[0])

    for(let [key,value] of hashmap){
        if(value != basic_count) return false
    }
    return true
    
};