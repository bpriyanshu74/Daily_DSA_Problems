/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length-1, maxwater = 0

    while(l < r){
        let h = Math.min(height[l], height[r])
        let w = r-l

        maxwater = Math.max(maxwater, h*w)

        if(height[l] <= height[r]){
            l++
        }else{
            r--
        }
    }

    return maxwater
};