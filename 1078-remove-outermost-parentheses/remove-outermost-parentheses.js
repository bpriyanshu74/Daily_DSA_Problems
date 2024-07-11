/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    var stack = []
    var res = ""
    for(var ele of s){
        if(ele == "("){
            if(stack.length == 0){
                stack.push("(")
            }else{
                stack.push(")")
                res += "("
            }
        }
        else{
            if(stack.length > 1){
                res += stack.pop()
            }
            else{
                stack.pop()
            }
        }
        
    }
    return res
    
};