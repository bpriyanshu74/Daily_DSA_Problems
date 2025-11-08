/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {'(': ')', '{': '}', '[': ']'}, stack = []

    for(let ch of s){
        if(ch in map){
            stack.push(map[ch])
        }else{
            if(stack.length && ch == stack[stack.length-1]) stack.pop()
            else return false
        }
    }

    return stack.length == 0
};