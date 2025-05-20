/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    // optimization using two pointer with sliding window
    // hasmap will contain all the three character and the last index they were seen, once all the character are != -1 them we'll pick the min index of the three and add it to the count with + 1. 
    let count = 0, hashmap = new Map()
    hashmap.set('a',-1)
    hashmap.set('b', -1)
    hashmap.set('c', -1)
    for(let r = 0; r<s.length; r++){
        hashmap.set(s[r], r)
        
        if(hashmap.get('a') != -1 && hashmap.get('b') != -1 && hashmap.get('c') != -1){
            let v = [...hashmap.values()]
            count += Math.min(...v) + 1
        }
    }
    return count
    
};