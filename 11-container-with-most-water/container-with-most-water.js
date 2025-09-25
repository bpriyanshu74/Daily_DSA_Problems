/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0, r = height.length-1, maxarea = 0

    while(l < r){
        let width = r-l
        let length = Math.min(height[l], height[r])
        maxarea = Math.max(maxarea, length*width)

        if(height[l] <= height[r]){
            l++
        }else{
            r--
        }
    }
    return maxarea
};