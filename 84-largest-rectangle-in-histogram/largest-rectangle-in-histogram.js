/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // adding a sentinal value
    heights.push(0)
    let stack = [-1], maxarea = 0

    for(let i=0; i<heights.length; i++){
        while(stack.length > 1 && heights[i] < heights[stack[stack.length-1]]){
            let height = heights[stack.pop()]
            let width = i - stack[stack.length-1] -1
            maxarea = Math.max(maxarea, height*width)
        }
        stack.push(i)
    }
    return maxarea
    
};