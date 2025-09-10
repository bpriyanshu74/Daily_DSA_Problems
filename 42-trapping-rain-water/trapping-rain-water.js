/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    let lb = new Array(n).fill(0), lmax = -Infinity
    let rb = new Array(n).fill(0), rmax = -Infinity

    // filling the left boundary
    for(let i=0; i<n; i++){
        lmax = Math.max(height[i], lmax)
        lb[i] = lmax
    }

    for(let i=n-1; i>=0; i--){
        rmax = Math.max(height[i], rmax)
        rb[i] = rmax
    }

    let water = 0
    for(let i=0; i<n; i++){
        water += Math.min(lb[i], rb[i]) - height[i]
    }

    return water
};