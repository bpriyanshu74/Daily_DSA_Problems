/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = '', preop = '+', stack = []

    for(let i=0; i<s.length; i++){
        // if(s[i] == ' ') continue

        if(!isNaN(s[i])){
            num += s[i]
        }

        if((isNaN(s[i]) && s[i] != ' ') || i == s.length-1){
            if(preop == '+') stack.push(+num)
            else if(preop == '-') stack.push(-num)
            else if(preop == '*') stack.push(stack.pop() * +num)
            else if(preop == '/') stack.push(Math.trunc(stack.pop()/ +num))

            preop = s[i]
            num = ''
        }   
    }

    return stack.reduce((total, cur) => total+cur, 0)
    
};