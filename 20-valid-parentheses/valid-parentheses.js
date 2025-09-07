/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {'(':')', '[':']', '{':'}'}, stack = []

    for(let ch of s){
        if(ch in pairs){
            stack.push(pairs[ch])
        }
        else{
            if(stack.length == 0 || ch != stack.pop()) return false
        }
    }

    return stack.length == 0
    
};