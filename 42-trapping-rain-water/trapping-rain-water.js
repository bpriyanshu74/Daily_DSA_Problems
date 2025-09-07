/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    let lb = new Array(n).fill(0), lmax = height[0]
    let rb = new Array(n).fill(0), rmax = height[n-1]

    for(let i=0; i<n; i++){
        lmax = Math.max(lmax, height[i])
        lb[i] = lmax
    }

    for(let i = n-1; i>= 0; i--){
        rmax = Math.max(rmax, height[i])
        rb[i] = rmax
    }

    let trapped = 0

    for(let i=0; i<n; i++){
        trapped += Math.min(lb[i], rb[i]) - height[i]
    }

    return trapped
    
};