/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length != haystack.length){
        let n = needle.length - 1
    let left = 0
    while(left <= haystack.length - n - 1){
        let window = haystack.slice(left, left+n+1)
        if(window == needle) return left
        left++
    }
    return -1
    }
    else{
        if(haystack == needle) return 0
        return -1
    }
    
};