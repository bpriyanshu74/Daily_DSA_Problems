/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxwater = -Infinity

    let l = 0, r = height.length-1

    while(l < r){
        let length = Math.min(height[l], height[r])
        let width = r-l

        maxwater = Math.max(maxwater, length*width)

        if(height[l] <= height[r]){
            l++
        }else{
            r--
        }
    }

    return maxwater
};