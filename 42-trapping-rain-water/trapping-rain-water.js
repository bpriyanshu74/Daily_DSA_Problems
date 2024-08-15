/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftmax = 0, rightmax= 0, water = 0
    let n = height.length
    let leftArray = new Array(n).fill(0)
    let rightArray = new Array(n).fill(0)
    let low = 0
    for(let i=0; i<=n;i++){
        leftmax = Math.max(height[i],leftmax)
        leftArray[i] = leftmax
    }
    for(let i=n-1; i>=0;i--){
        rightmax = Math.max(height[i],rightmax)
        rightArray[i] = rightmax
    }

    for(let i=0; i<n; i++){
        water += Math.min(leftArray[i], rightArray[i]) - height[i]
    }
    
    return water
    
};