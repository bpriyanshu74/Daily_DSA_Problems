/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    let count = 0
    for(let i=0; i<s.length; i++){
        let temp = ''
        for(let j=i; j<s.length; j++){
            temp += s[j]
            if(check(temp)) count++
            
        }
    }
    return count
    function check(str){
        let l=0, r = str.length-1
        while(l < r){
            if(str[l] != str[r]) return false
            l++
            r--
        }
        return true
    }
    
};