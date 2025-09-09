/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxarea = 0, stack = [], n = heights.length

    for(let i=0; i<n; i++){
        while(stack.length && heights[i] < heights[stack[stack.length-1]]){
            let h = heights[stack.pop()]
            let w = stack.length == 0 ? i : i - stack[stack.length-1] - 1
            maxarea = Math.max(maxarea, h*w)
        }
        stack.push(i)
    }

    while(stack.length){
        let h = heights[stack.pop()]
        let w = stack.length == 0 ? n : n - stack[stack.length-1] - 1
        maxarea = Math.max(maxarea, h*w)
    }

    return maxarea
    
};