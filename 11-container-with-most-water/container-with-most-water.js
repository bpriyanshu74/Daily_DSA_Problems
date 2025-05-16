/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // brute force
    let maxm_water = -1

    let l=0; r = height.length-1

    while(l<r){
        let water = Math.min(height[l], height[r]) * (r-l)
        maxm_water = Math.max(maxm_water, water)

        if(height[l] < height[r]){
            l++
        }
        else{
            r--
        }
    }
    return maxm_water
    
};