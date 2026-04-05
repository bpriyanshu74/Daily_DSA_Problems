/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = new Map()

    for(let str of strs){
        let freq = new Array(26).fill(0)

        for(let ch of str){
            let index = ch.charCodeAt(0) - 97
            freq[index]++
        }

        let key = freq.toString()

        if(hashmap.has(key)){
            hashmap.get(key).push(str)
        }else{
            hashmap.set(key, [str])
        }
    }

    return [...hashmap.values()]

    
};