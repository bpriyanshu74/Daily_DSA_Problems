/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {'(':')', '[':']', '{':'}'}, stack = []

    for(let ch of s){
        if(ch == '(' || ch == '[' || ch == '{'){
            stack.push(pairs[ch])
        }else{
            if(ch != stack.pop()) return false
        }
    }
    return stack.length ? false : true
};