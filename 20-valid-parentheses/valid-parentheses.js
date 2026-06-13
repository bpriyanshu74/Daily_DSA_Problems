/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {'(': ')', '{': '}', '[': ']'}, stack = []

    for(let ch of s){
        if(stack.length == 0){
            stack.push(ch)
        }else{
            if(map[ch] != undefined){
                // opening
                stack.push(ch)
            }else{
                // closing
                if(stack.length > 0){
                    if(ch == map[stack[stack.length-1]]){
                        stack.pop()
                    }else{
                        return false
                    }
                }else{
                    // closing comes first breaking the valid rule
                    return false
                }
            }
        }
    }

    return stack.length == 0 ? true : false
};