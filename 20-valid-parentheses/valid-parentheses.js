/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    var hashmap = {"(": ")", "[": "]", "{":"}"}

    for(var ele of s){
        if(ele in hashmap){
            stack.push(hashmap[ele])
        }
        else{
            if(stack.length == 0 || ele !== stack.pop()){
                return false
            }
        }
    }
    return stack.length == 0
    
};