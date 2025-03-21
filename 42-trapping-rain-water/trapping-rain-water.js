/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    let leftbound = new Array(n)
    let rightbound = new Array(n)

    leftbound[0] = height[0]
    rightbound[n-1] = height[n-1]

    let lmaxm = height[0]

    for(let i=1; i<n; i++){
        if(height[i] > lmaxm){
            lmaxm = height[i]
        }
        leftbound[i] = lmaxm
    }

    let rmaxm = height[n-1]

    for(let i=n-2; i>= 0; i--){
        if(height[i] > rmaxm){
            rmaxm = height[i]
        }
        rightbound[i] = rmaxm
    }

    let trappedwater = 0

    for(let i=0; i<n; i++){
        trappedwater += Math.min(leftbound[i], rightbound[i]) - height[i]
    }

    return trappedwater
    
};