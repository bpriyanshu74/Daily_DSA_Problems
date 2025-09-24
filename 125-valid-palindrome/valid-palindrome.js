/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = '', nums = ['0','1','2','3','4','5','6','7','8','9']
    for(let i=0; i<s.length; i++){
        if((s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) || (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) || nums.includes(s[i])){
            temp += s[i].toLowerCase()
        }
    }

    let l=0, r = temp.length-1
    while(l <= r){
        if(temp[l] != temp[r]) return false
        l++
        r--
    }

    return true
    
};