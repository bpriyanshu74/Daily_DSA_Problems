/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let lb = new Array(height.length).fill(0)
    let rb = new Array(height.length).fill(0)

    // creating the left coundary
    lb[0] = height[0]
    for(let i=1; i<height.length; i++){
        lb[i] = Math.max(lb[i-1], height[i])
    }

    // creating the right boundary
    let n = height.length
    rb[n-1] = height[n-1]

    for(let i = n-2; i>= 0; i--){
        rb[i] = Math.max(rb[i+1], height[i])
    }

    // finding the total water
    let water = 0
    for(let i=0; i<n; i++){
        water += Math.min(lb[i], rb[i]) - height[i]
    }

    return water
    
};