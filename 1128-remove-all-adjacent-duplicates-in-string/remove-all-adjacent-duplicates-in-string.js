/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []

    for(let ch of s){
        if(stack.length && ch == stack[stack.length-1]){
            stack.pop()
        }else{
            stack.push(ch)
        }
        
    }

    return stack.join('')
};