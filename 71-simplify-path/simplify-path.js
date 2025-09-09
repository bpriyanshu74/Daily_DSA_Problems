/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let tokens = path.split('/')

    for(let token of tokens){
        if(token == '' || token =='.'){
            continue
        }
        else if(token == '..'){
            if(stack.length) stack.pop()
        }
        else{
            stack.push(token)
        }
    }
    
    return '/' + stack.join('/')
};