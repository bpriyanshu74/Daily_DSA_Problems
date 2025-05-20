/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    // optimization using two pointer with sliding window
    // hasmap will contain all the three character and the last index they were seen, once all the character are != -1 them we'll pick the min index of the three and add it to the count with + 1. 
    let count = 0, a=-1, b=-1, c=-1
    for(let i = 0; i<s.length; i++){
             if (s[i] === "a") a = i;
        else if (s[i] === "b") b = i;
        else c = i;

        if (a !== -1 && b !== -1 && c !== -1) count += Math.min(a, b, c) + 1;
        
    }
    return count
    
};