/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var maxm = 0
    var stack = []
    var lastInvalidIndex = -1
    for(let i=0; i<s.length;i++){
        if(s[i] == "("){
            stack.push(i)
        }
        else{
            if(stack.length == 0){
                lastInvalidIndex = i
            }
            else{
                stack.pop()
                if(stack.length == 0){
                    maxm = Math.max(maxm, i - lastInvalidIndex)
                }else{
                    maxm = Math.max(maxm, i - stack[stack.length - 1])
                }
            }
        }
    }
    return maxm

};