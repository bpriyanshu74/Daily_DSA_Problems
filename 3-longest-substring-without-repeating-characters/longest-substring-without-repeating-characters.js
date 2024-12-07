/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxl = 0
    for(let i=0; i<s.length; i++){
        let  map = new Array(128).fill(0)
        for(let j=i; j<s.length; j++){
            if(map[s.charCodeAt(j)] == 1){
                break
            }
            let len = j-i+1
            maxl = Math.max(len,maxl)

            map[s.charCodeAt(j)] = 1
        }
    }
    return maxl
    
};