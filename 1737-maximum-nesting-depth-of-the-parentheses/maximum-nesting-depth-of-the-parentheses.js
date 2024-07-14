/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    var stack = []
    var maxDepth = 0
    for(var i=0; i<s.length; i++){
        if(s[i]=="(" || s[i] == ")"){
            if(s[i] == "("){
                stack.push("(")
            }
            else{
                maxDepth = Math.max(maxDepth, stack.length)
                if(stack.length > 0 && stack[stack.length - 1] == "("){
                    stack.pop()
                }
            }
        }
        else{
            continue
        }
    }
    return maxDepth
    
};