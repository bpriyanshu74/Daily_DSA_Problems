/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for(let token of tokens){
        if(token == '+'){
            let a = stack.pop(), b = stack.pop()
            stack.push(a+b)
        }
        else if(token == '-'){
            let a = stack.pop(), b = stack.pop()
            stack.push(b-a)
        }
        else if(token == '*'){
            let a = stack.pop(), b = stack.pop()
            stack.push(a*b)
        }
        else if(token =='/'){
            let a = stack.pop(), b = stack.pop()
            stack.push(parseInt(b/a))
        }else{
            stack.push(Number(token))
        }
    }

    return stack.pop()
    
};