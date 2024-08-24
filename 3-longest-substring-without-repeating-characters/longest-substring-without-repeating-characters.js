/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 1) return 1
    let temp = []
    let maxLength = 0
    outer : 
    for(let i=0; i<s.length; i++){
        for(let j=i; j<s.length; j++){
            if(temp.includes(s[j])){
                maxLength = Math.max(maxLength, temp.length)
                temp = []
                continue outer
            }else{
                temp.push(s[j])
            }
        }
    }
    return maxLength
    
};