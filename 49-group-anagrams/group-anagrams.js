/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagramMap = new Map();
    for(let ele of strs){
        let eleKey = ele.split("").sort().join("");
        if (anagramMap.has(eleKey)){
            anagramMap.get(eleKey).push(ele)
        }
        else{
            anagramMap.set(eleKey,[ele])
        }
    
    }

    // console.log(anagramMap)
    return Array.from(anagramMap.values())
    
};