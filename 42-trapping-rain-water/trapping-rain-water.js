/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // lets try doing it using stack
    let stack = [], n = height.length, water = 0

    for(let i=0; i<height.length; i++){
        while(stack.length && height[i] > height[stack[stack.length-1]]){
            let rb_index = stack.pop()

            if(stack.length == 0) break

            let lb_index = stack[stack.length-1]

            let distance = i - lb_index - 1

            let h = Math.min(height[lb_index], height[i]) - height[rb_index]
            water += distance * h

        }
        stack.push(i)
    }

    return water
    
};