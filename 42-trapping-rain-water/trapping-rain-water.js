/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [], n = height.length, water = 0

    for(let i=0; i<n; i++){
        while(stack.length && height[i] > height[stack[stack.length-1]]){
            let bottomindex = stack.pop()
            if(stack.length == 0) break // no left boundary

            let leftboundary = stack[stack.length-1]

            let distance = i - leftboundary - 1
            let boundaryheight = Math.min(height[leftboundary], height[i]) - height[bottomindex]

            water += distance * boundaryheight
        }
        stack.push(i)
    }
    return water
    
};