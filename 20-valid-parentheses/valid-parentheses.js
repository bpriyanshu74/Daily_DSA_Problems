/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {'(':')', '[':']', '{':'}'}
    let stack = []
    for(let ch of s){
        if(ch == '(' || ch == '[' || ch == '{'){
            stack.push(ch)
        }
        else{
            let top = stack.pop()
            if(ch != pairs[top]) return false
        }
    }
    return stack.length == 0
    
};