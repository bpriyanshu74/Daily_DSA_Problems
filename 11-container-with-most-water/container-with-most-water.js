/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let areamax = 0
    let lo = 0, hi = height.length - 1
    while(lo <= hi){
        let area = Math.min(height[lo],height[hi]) * (hi - lo)
        areamax = Math.max(area,areamax)
        if(height[lo] < height[hi]) lo++
        else hi--
        
    }
    return areamax
    
};