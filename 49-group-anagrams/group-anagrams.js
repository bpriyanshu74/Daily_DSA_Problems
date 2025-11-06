/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {}

    for(let str of strs){
        let freq = new Array(26).fill(0)
        for(let ch of str){
            let index = ch.charCodeAt(0) - 97
            freq[index]++
        }
        let key = freq.join('#')
        if(!map[key]) map[key] = []

        map[key].push(str)
    }

    return Object.values(map)
    
};