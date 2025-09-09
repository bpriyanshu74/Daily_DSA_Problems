/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = []

    for(let ast of asteroids){
        let destroyed = false

        while(stack.length && ast < 0 && stack[stack.length-1] > 0){
            if(Math.abs(ast) > stack[stack.length-1]){
                stack.pop()
                continue
            }
            else if(Math.abs(ast) == stack[stack.length-1]){
                stack.pop()
                destroyed = true
                break
            }else{
                destroyed = true
                break
            }
        }
        if(!destroyed){
            stack.push(ast)
        }
    }

    return stack
};