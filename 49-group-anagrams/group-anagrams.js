/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hashmap = new Map()

    // function createKey(word){
    //     let hm = new Map()

    //     for(let ch of word){
    //         if(hm.has(ch)){
    //             hm.set(ch, hm.get(ch) + 1)
    //         }else{
    //             hm.set(ch, 1)
    //         }
    //     }

    //     return hm
    // }

    for(let w of strs){
        let key = w.split('').sort().join('');

        if(hashmap.has(key)){
            hashmap.get(key).push(w)
        }else{
            hashmap.set(key, [w])
        }
    }

    return [...hashmap.values()]
};