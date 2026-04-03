/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length <= 2) return 0

    let water = 0, stack = [0]

    for(let r=1; r < height.length; r++){
        while(height[r] > height[stack[stack.length-1]]){
            let valley = height[stack.pop()]

            if(stack.length == 0) break

            let lb = stack[stack.length-1]

            let w = r - lb - 1
            let h = Math.min(height[r], height[lb]) - valley

            water += h*w
        }
        stack.push(r)
    }

    return water

    

};