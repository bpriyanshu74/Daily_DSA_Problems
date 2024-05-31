/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    let left = Array(height.length).fill(0)
    let right = Array(height.length).fill(0)

    left[0] = height[0]
    right[height.length -1] = height[height.length - 1]

    for(i = 1; i < height.length; i++){
        left[i] = Math.max(left[i-1], height[i])
    }
    for(i = height.length - 2; i >= 0; i--){
        right[i] = Math.max(right[i+1], height[i])
    }

    for(i=0; i < height.length; i++){
        result += Math.min(left[i],right[i]) - height[i]
    }

    return result
};